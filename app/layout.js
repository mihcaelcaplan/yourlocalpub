'use client'

import './globals.css'
import { useState, useEffect, createContext } from 'react'
import {Schibsted_Grotesk} from 'next/font/google'

import { CartContext } from '@/app/components/cart_context'
import Header from "@/app/components/header"
import SidePane from '@/app/components/sidepane'

// set up font
const schibsted_grotesk = Schibsted_Grotesk({
  // weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({ children }) {
  const [cart, setCart] = useState({})
  
  // load cart from storage on page load
  useEffect(() => {
    if(localStorage.getItem("cart") != null){
      const stored_cart = JSON.parse(localStorage.getItem('cart'))
      setCart(stored_cart)
    }
    // console.log("page loaded")
  }, []);
  
  // save cart to storage when modified
  useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        // console.log(cart)
      }, [cart]);
  


    return (
      <html lang="en" className={schibsted_grotesk.className}>
        <Head />
        <body className=''>
        <main className="flex flex-row h-full" >
        <CartContext.Provider value={[cart, setCart]}>
            {/* main screen */}
            <div className="bg-pubmain lg:flex-1">
                <Header />
                {children}
          </div>        
          {/* info pane */}
          <div className='bg-pubmain lg:w-[485px] h-auto min-h-screen'>
              <SidePane />
          </div>
        </CartContext.Provider>
    
      </main>
      </body>
      </html>
    )
  }

  const Head = ()=>{
    return(
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/icons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
    )
  }