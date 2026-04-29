import React from 'react'
import styles from '../styles/Header.module.css'
import Navbar from './Navbar'
export default function Header() {
  return (
    <header className={`${styles.header_layout}  bg-transparent lg:w-1/4 lg:max-w-64 xl:ml-20 ` }>
      <img className={`${styles.header_photo}  saturate-50 shadow-2xl shadow-zinc-800/50  lg:mt-12`} src="images/photo.png" alt="photo" />
        <Navbar/>
    </header>
  )
}
