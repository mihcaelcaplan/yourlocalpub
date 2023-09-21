'use client'

import './globals.css'
import SidePane from '@/app/components/sidepane'
import Header from "@/app/components/header"
import { useState, useEffect, createContext } from 'react'

import { CartContext } from '@/app/components/cart_context'

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
      <html lang="en">
        <body className=''>
        <main className="flex flex-row h-full" >
        <CartContext.Provider value={[cart, setCart]}>
            {/* main screen */}
            <div className="content-panel w-screen md:w-2/3">
                <Header />
                {children}
          </div>        
          {/* info pane */}
          <div className='info_panel hidden md:w-1/3 md:flex h-auto min-h-screen'>
              <SidePane />
          </div>
        </CartContext.Provider>
    
      </main>
      </body>
      </html>
    )
  }