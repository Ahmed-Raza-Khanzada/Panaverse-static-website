'use client';
import {ChakraProvider,theme} from '@chakra-ui/react'
import Navbar from  '../components/Navbar'
// import Footer from  '../components/Footer'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const customTheme = {
    ...theme,
    breakpoints: {
      base: "0px",
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
  };
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <ChakraProvider >
        
      <Navbar/>
      <div>
        
        {children}
      </div>
       
      </ChakraProvider>
      </body>
    </html>
  )
}
 