import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import Beta from './components/Beta'
import Banner from './homepage/Banner'
import Features from './homepage/Features'
import Footer from './components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Beta />
      <Banner />
      <Features />
      <Footer />
 
    </div>
  )
}

export default Home
