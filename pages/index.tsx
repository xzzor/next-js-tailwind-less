import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from 'antd'

const Home: NextPage = () => {
  return (
    <>
    <h1 className='cursor-pointer text-green-600 text-center mt-44'>Hello Tailwind</h1>
    <Button type='primary'>CLick me! Please</Button>
    
    </>
  )
}

export default Home
