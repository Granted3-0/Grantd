import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Searchbar from './Searchbar'
import Highlights from './Highlights'

const PersonalGrants: NextPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Searchbar/>
      <Highlights />

     
    </div>
  )
}

export default PersonalGrants
