import Footer from "./footer/Footer"
import Navbar from "./navbar/Navbar"

import Head from 'next/head';

export default function Layout({ children }) {
    return (
      <>
        <Head>
          <link rel="shortcut icon" href="/" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
          <title>Victor Blois</title>
        </Head>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    )
  }