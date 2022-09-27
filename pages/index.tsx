import Link from 'next/link'
import Layout from '../components/Layout'
import Contact from '../components/Contact'
import { motion } from 'framer-motion'
import { GiCobweb } from 'react-icons/gi'
import { HiHome } from 'react-icons/hi'

const IndexPage = () => (
    <Layout title="Dev Patel">
        <div className="block mx-auto w-fit rounded-md mobile:scale-95 md:scale-100">
            
            <header className="flex flex-col [&>*]:p-1 mobile:space-y-5 md:space-y-8 text-left text-[#323232] dark:text-b_white">
                <h1 className="font-Playfair mobile:text-6xl md:text-7xl text-a_brown dark:text-c_taupe">Hi, I'm Dev !</h1>
                <div className="font-SansPro mobile:space-y-2 md:space-y-3 mobile:text-[1.1rem] md:text-[1.5rem] [&>*]:text-gray/[0.75] [&>*]:dark:text-c_taupe/[0.75]">
                    <h1>{'{ x : x ∈'} (<span className="underline">2A CS Ryerson</span> ∩ <span className="underline">Aspiring SWE</span>) {'}'}</h1>
                    <h1>Welcome to my 🏡 on the <GiCobweb className="inline"/> !!</h1>
                    <h1>Seeking 2023 Internship/Co-op</h1>
                </div>
            </header>

            <Contact/>
        </div>
    </Layout>
)

export default IndexPage
