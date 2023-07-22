"use client";
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Middle from '../components/Middle'
import Features from '../components/Features'
import Features2 from '../components/Features2'
import Features3 from '../components/Features3'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   

      <Middle/>
      <Features/>
      <Features2/>
      {/* <Features3/> */}

    </>
  )
}
