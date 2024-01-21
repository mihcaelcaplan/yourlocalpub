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
        <body className=''>
        <main className="flex flex-row h-full" >
        <CartContext.Provider value={[cart, setCart]}>
            {/* main screen */}
            <div className="bg-pubmain md:flex-1 md:p-2">
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