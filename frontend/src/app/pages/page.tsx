// pages/index.js

import React from 'react';
import Link from 'next/link';
import Navbar from '../navbar/navbar.js';
import styles from './app/navbar/navbar.module.css';



export default function Home() {
  return (
    <main className={styles.main}>
      <h1>
       <Link href="/">ProcureLink</Link>
      </h1>
      <Navbar />
      <div className={styles.description}>
        <section>
          <h2>About ProcureLink</h2>
          <p>
            ProcureLink is a revolutionary app that connects users with a wide range of services and simplifies the process of booking and managing those services. Whether you need professional assistance or want to explore new experiences, ProcureLink has got you covered.
          </p>
        </section>
      </div>
      <section>
      <h2>How to Use ProcureLink</h2>
            <div>
              <h3>1. Sign Up</h3>
              <p>Create an account to access all features and services.</p>
            </div>
            <div>
              <h3>2. Browse Services</h3>
              <p>Explore the diverse range of services available.</p>
            </div>
            <div>
              <h3>3. Customize Booking</h3>
              <p>Personalize your booking with specific requirements.</p>
            </div>
            <div>
              <h3>4. Track Bookings</h3>
              <p>Stay updated with the status of your bookings.</p>
            </div>
            <div>
              <h3>5. Enjoy the Experience</h3>
              <p>Have a seamless and enjoyable service experience.</p>
            </div>
            <div>
          <section>
          <Link href="/services">
            <div className={styles.button}>Browse Services</div>
            </Link>
          </section>
        </div>
        <div>
          <section>
            <h2>More about ProcureLink</h2>
            <p>
              ProcureLink streamlines the service booking process. By using ProcureLink, you can save time and effort by easily browsing and booking services online. The platform provides a diverse selection of service providers, ensuring that you find the perfect fit for your needs. Additionally, ProcureLink offers personalized customization options, allowing you to tailor your service bookings to your specific requirements. With a convenient booking tracking feature, you can easily monitor the status of your bookings and stay informed. Experience seamless service provision with ProcureLink and enjoy the convenience and peace of mind it brings.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
