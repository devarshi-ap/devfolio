import Layout from '../components/Layout'
import Contact from '../components/Contact'
import { GiCobweb } from 'react-icons/gi'

const IndexPage = () => (
    <Layout title="Dev Patel">
        <div className="block mx-auto w-fit rounded-md mobile:scale-95 md:scale-100">
            
            <header className="flex flex-col [&>*]:p-1 mobile:space-y-5 md:space-y-8 text-left text-[#323232] dark:text-b_white">
                <h1 className="font-Playfair mobile:text-4xl md:text-5xl text-a_brown dark:text-c_taupe">Hi, I'm Dev !</h1>
                <div className="font-SansPro mobile:text-[1.1rem] md:text-[1.2rem] [&>*]:text-gray/[0.75] [&>*]:dark:text-c_taupe/[0.75]">
                    <h1>{'{ x : x ∈'} (<span className="underline">3A CS UWO</span> ∩ <span className="underline">Prev. SWE Co-op @ <strong>OPG</strong></span>) {'}'}</h1>
                    <h1>Welcome to my 🏡 on the <GiCobweb className="inline"/> !!</h1>
                </div>
                <h1 className='font-SansPro mobile:space-y-2 md:space-y-3 mobile:text-[0.75rem] md:text-[1rem] text-[#D6D6D6] dark:text-gray'><s><em>In pursuit of a 2025 Summer internship (pretty pls :)).</em></s></h1>
            </header>

            <Contact/>
        </div>
    </Layout>
)

export default IndexPage
