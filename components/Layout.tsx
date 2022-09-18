import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Toggle from './Toggle'
import Footer from './Footer'
import { motion } from 'framer-motion'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <div className="bg-c_taupe dark:bg-[#16181D] bg-auto duration-100 border border-[#000] min-h-screen flex flex-col justify-between">
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="Site Icon" href="/favicon.ico" />
        </Head>

        <header>
            <nav className="flex flex-row font-Playfair justify-between p-4 bg-white bg-opacity-20 dark:bg-opacity-0 backdrop-blur-sm dark:backdrop-blur-none w-full border-b-2 dark:border-b-0 border-d_babyblue">
                <Toggle />
                
                <div className='flex justify-between text-c_tea dark:text-d_coolwhite text-lg decoration-2 min-w-[18rem] mr-3'>
                    <Link href="/" className="link link-underline font-thin link-underline-black">Home</Link>
                    <Link href="/about" className="link link-underline font-thin link-underline-black">About</Link>
                    <Link href="/projects" className="link link-underline font-thin link-underline-black">Projects</Link>
                </div>
            </nav>
        </header>


        <main className="flex flex-col flex-grow">
            <motion.div
                initial={{ y:"10%", opacity: 0.1, scale: 1 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{duration: 0.4, ease: 'easeIn'}}
                exit={{ opacity: 0 }}
                className="flex flex-grow border-[#000] items-center"
            >
            {children}
            </motion.div>
        </main>
    
    <footer>
      <Footer />
    </footer>
  </div>
)

export default Layout
