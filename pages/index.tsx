import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from 'antd'

const Home: NextPage = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-stone-900'>
      <h1 className='text-5xl text-indigo-500'>Hello World!</h1>
    </div>
  )
}

export default Home
