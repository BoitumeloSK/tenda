#pragma version 8

struct AuctionKey:
    seller: bytes[32]
    asset_id: int
end

# Box size: 72 bytes ((int * 5) + address)
# Key size: 40 bytes (AuctionKey)
# MBR: 47_300 = 2500 + 400 * (box size + key size) = 2500 + 400 * (72 + 40)

#storage of auction details in this struct
struct AuctionValue:
   
    end_timestamp: int
    current_bidder1: bytes[32]
    price1: int
    current_bidder2: bytes[32]
    price2: int
    current_bidder3: bytes[32]
    price3: int
    seller_paid: int
    job_completed: int
    jobOwner: int
end

# Global state keys
const bytes G_AUCTIONS_CREATED = "auctions_created"
const bytes G_LIVE_AUCTIONS = "live_auctions"

# Local state keys
const bytes L_AUCTIONS_CREATED = "auctions_created"
const bytes L_LIVE_AUCTIONS = "live_auctions"
const bytes L_AUCTIONS_WON = "auctions_won"

# Methods
const bytes CREATE_AUCTION = "create_auction"
const bytes SETTLE = "settle"
const bytes PLACE_BID = "place_bid"
cons bytes COMPLETE_JOB = "complete_job"

# Constants
const int MINIMUM_BID = 10000
# Box MBR + asset opt-in MBR = 47300 + 100,000
const int AUCTION_MBR_AMOUNT = 100

#initialise the global state when application is created
if Txn.ApplicationID == 0:
    app_global_put(G_AUCTIONS_CREATED, 0)
    app_global_put(G_LIVE_AUCTIONS, 0)
    exit(1)
end

#handles different transaction types
switch Txn.OnCompletion:
    NoOp: main
    OptIn: opt_in
    CloseOut: close_out
    UpdateApplication: update_app
    DeleteApplication: delete_app
end

#users opting in
block opt_in:
    app_local_put(Txn.Sender, L_AUCTIONS_CREATED, 0)
    app_local_put(Txn.Sender, L_LIVE_AUCTIONS, 0)
    app_local_put(Txn.Sender, L_AUCTIONS_WON, 0)
    exit(1)
end

#close-out to prevent closing an auction in progress
block close_out:
    assert(app_local_get(Txn.Sender, L_LIVE_AUCTIONS) == 0)
    exit(1)
end

block update_app:
    exit(0)
end

block delete_app:
    exit(0)
end

block main:
    switch Txn.ApplicationArgs[0]:
        CREATE_AUCTION: create_auction
        SETTLE: settle
        PLACE_BID: place_bid
        COMPLETE_JOB: complete_job
    end

    block create_auction:
        # validate payment for MBR and asset opt-in
        assert(Gtxn[-1].TypeEnum == Pay)
        assert(Gtxn[-1].Sender == Txn.Sender)
        assert(Gtxn[-1].Receiver == Global.CurrentApplicationAddress)
        assert(Gtxn[-1].Amount == AUCTION_MBR_AMOUNT+800)

        AuctionKey key = bzero(40)
        key.seller = Txn.Sender
        key.asset_id = 0  # No asset ID for job auctions

#auction box creation
        box<AuctionValue> auction = CreateBox(key)
        auction.end_timestamp = btoi(Txn.ApplicationArgs[1])
        auction.current_bidder1 = bzero(32)
        auction.price1 = 0
        auction.current_bidder2 = bzero(32)
        auction.price2 = 0
        auction.current_bidder3 = bzero(32)
        auction.price3 = 0
        auction.seller_paid = 0
        auction.job_completed = 0
        auction.jobOwner = 0

#updating global and local state counters
 app_global_put(G_AUCTIONS_CREATED, (app_global_get(G_AUCTIONS_CREATED) + 1))
        app_global_put(G_LIVE_AUCTIONS, (app_global_get(G_LIVE_AUCTIONS) + 1))
        app_local_put(Txn.Sender, L_AUCTIONS_CREATED, (app_local_get(Txn.Sender, L_AUCTIONS_CREATED) + 1))
        app_local_put(Txn.Sender, L_LIVE_AUCTIONS, (app_local_get(Txn.Sender, L_LIVE_AUCTIONS) + 1))

        exit(1)
    end
        
        block settle:
        AuctionKey key = Txn.ApplicationArgs[1]
        box<AuctionValue> auction = OpenBox(key)

#auction time validity
        assert(Global.LatestTimestamp >= auction.end_timestamp)
#bidders actions when settling an auction
        if Txn.Sender == key.seller:
            if auction.jobOwner == 0:
                clean_up_auction(key)
            else:
                assert(auction.seller_paid == 0)
                pay_user(key.seller, auction.current_price)
                auction.seller_paid = 1
                if auction.job_completed == 1:
                    clean_up_auction(key)
                end
            end
        elif Txn.Sender == auction.current_bidder1:
            if auction.jobOwner == 0:
                clean_up_auction(key)
            else:
                assert(auction.job_completed == 0)
                close_asset(auction.current_bidder1, key.asset_id)
                pay_user(auction.current_bidder1, auction.current_price)
                auction.job_completed = 1
                if auction.seller_paid == 1:
                    clean_up_auction(key)
                end
            end
        elif Txn.Sender == auction.current_bidder2:
            if auction.jobOwner == 0:
                clean_up_auction(key)
            else:
                assert(auction.job_completed == 0)
                close_asset(auction.current_bidder2, key.asset_id)
                pay_user(auction.current_bidder2, auction.current_price)
                auction.job_completed = 1
                if auction.seller_paid == 1:
                    clean_up_auction(key)
                end
            end
        elif Txn.Sender == auction.current_bidder3:
            if auction.jobOwner == 0:
                clean_up_auction(key)
            else:
                assert(auction.job_completed == 0)
                close_asset(auction.current_bidder3, key.asset_id)
                pay_user(auction.current_bidder3, auction.current_price)
                auction.job_completed = 1
                if auction.seller_paid == 1:
                    clean_up_auction(key)
                end
            end
        else:
            exit(0)
        end

        exit(1)
    end
#method to place the bid
    block place_bid:
        AuctionKey key = Txn.ApplicationArgs[1]
        box<AuctionValue> auction = OpenBox(key)

#bidder and bid validation
        assert(Txn.Sender != key.seller)
        assert(Gtxn[-1].TypeEnum == Pay)
        assert(Gtxn[-1].Sender == Txn.Sender)
        assert(Gtxn[-1].Receiver == Global.CurrentApplicationAddress)
        assert(Gtxn[-1].Amount >= (auction.current_price + MINIMUM_BID))
        assert(Global.LatestTimestamp < auction.end_timestamp)

        if auction.current_bidder1 != bzero(32):
            pay_user(auction.current_bidder1, auction.price1)
        end


#bids updated based on the amount
        if Gtxn[-1].Amount >= auction.buyout_price && auction.buyout_price > 0:
            pay_user(key.seller, Gtxn[-1].Amount)
            auction.jobOwner = 1
            clean_up_auction(key)
        else:
            if Gtxn[-1].Amount > auction.price1:
                auction.price3 = auction.price2
                auction.current_bidder3 = auction.current_bidder2
                auction.price2 = auction.price1
                auction.current_bidder2 = auction.current_bidder1
                auction.price1 = Gtxn[-1].Amount
                auction.current_bidder1 = Txn.Sender
            elif Gtxn[-1].Amount > auction.price2:
                auction.price3 = auction.price2
                auction.current_bidder3 = auction.current_bidder2
                auction.price2 = Gtxn[-1].Amount
                auction.current_bidder2 = Txn.Sender
            elif Gtxn[-1].Amount > auction.price3:
                auction.price3 = Gtxn[-1].Amount
                auction.current_bidder3 = Txn.Sender
            end
        end

        exit(1)
    end
#complete the job
    block complete_job:
        AuctionKey key = Txn.ApplicationArgs[1]
        box<AuctionValue> auction = OpenBox(key)

        assert(Txn.Sender == auction.current_bidder1 || Txn.Sender == auction.current_bidder2 || Txn.Sender == auction.current_bidder3)
        assert(auction.job_completed == 0)
        
        auction.job_completed = 1
        
        if auction.seller_paid == 1:
            clean_up_auction(key)
        end
        
        exit(1)
    end

    exit(1)
end
#escrow function to pay the service provider
func pay_user(address: bytes, amount: int):
    inner_txn:
        TypeEnum: Pay
        Sender: Global.CurrentApplicationAddress
        Receiver: address
        Amount: amount
        Fee: 0
    end

    return
end
#escrow function to pay the service provider
func close_asset(address: bytes, asset_id: int):
    inner_txn:
        TypeEnum: Axfer
        Sender: Global.CurrentApplicationAddress
        XferAsset: asset_id
        AssetCloseTo: address
        Fee: 0
    end

    return
end

func clean_up_auction(key_bytes: bytes):
    AuctionKey key = key_bytes
    app_global_put(G_LIVE_AUCTIONS, (app_global_get(G_LIVE_AUCTIONS) - 1))
    int auctions_created = app_local_get(key.seller, L_LIVE_AUCTIONS)
    app_local_put(key.seller, L_LIVE_AUCTIONS, (auctions_created - 1))

    int existed = box_del(key)
#pay the seller back the MBR increase from auction
    inner_txn:
        TypeEnum: Pay
        Sender: Global.CurrentApplicationAddress
        Receiver: key.seller
        Amount: AUCTION_MBR_AMOUNT
        Fee: 0
    end

    return
end