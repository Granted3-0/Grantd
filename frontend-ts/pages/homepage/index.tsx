import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Banner from './Banner'
import Features from './Features'
import Footer from '../components/Footer'


const Homepage: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Banner/>
      <Features />
      <Footer />
    </div>
  )
}

export default Homepage
