import Layout from '../components/Layout'
import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export const data = {
    labels: ['React', 'Python', 'Java', 'Node.js (+Express)', 'SQL', 'Next.js'],
    datasets: [
      {
        label: 'Lines of Code [scale= 1:1000]',
        data: [7, 8, 8, 6, 1, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Proficiency [scale= 1:1 out of /10]',
        data: [8, 8, 8, 6, 4, 6],
        backgroundColor: 'rgba(85, 223, 248, 0.2)',
        borderColor: 'rgba(85, 223, 248, 1)',
        borderWidth: 1,
      },
    ],
};

export default function AboutPage() {
    const langArr = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'Java', 'Python', 'Bash', 'SQL']
    const languages = langArr.map(lang => <div key={lang + '123'}>{lang}</div>);

    const dbArr = ['MongoDB', 'Redux-TK', 'Postgres']
    const databases = dbArr.map(db => <div key={db + '123'}>{db}</div>);

    const toolArr = ['Cypress', 'Insomnia', 'PgAdmin']
    const tools = toolArr.map(tool => <div key={tool + '123'}>{tool}</div>);

    const otherArr = ['RESTful API design', 'E2E Testing']
    const otherStuff = otherArr.map(thing => <div key={thing + '123'}>{thing}</div>);

    return (
        <Layout title="About Me">
            <div className="max-w-lg sm:mx-auto mobile:mx-4 my-16">
                <h1 className="text-6xl mobile:text-4xl mb-10 font-SerifPro text-c_tea dark:text-b_white">Devarshi Patel</h1>
                <div className="flex flex-col">
                    <div className="text-dark_gray dark:text-c_taupe text-md font-SansPro space-y-6">
                        
                        <p>↬ <em>Busy Doing What I Love, and Loving What I Do!</em></p>
                        <p>I'm Devarshi Patel and <a href="/" className="text-orange dark:text-twitter">this site</a> is my 🏡 on the 🕸.</p>
                        
                        <p>
                            I'm currently in my 2nd year at Ryerson University working towards my HBSc. for Computer Science.
                            My dedication lies in solving problems using technologies and methodologies that one might even consider magic 🪄!
                        </p>
                        
                        <p>
                            I spend a lot of my free time messing around with code and here I'll tabulate some of it.
                            Some things might even be called <a href="/projects" className="text-orange dark:text-twitter">projects</a> and hopefully the rest might still be of interest.
                        </p>

                        <p>
                            I'm always learning new skills and expanding my knowledge by taking up projects that involve <span className="text-orange dark:text-twitter">bleeding-edge technology</span>.
                            Actively in pursuit of a 2023 internship (pretty pls :)).
                        </p>

                        <p>
                            It's important to discover things you enjoy outside of school and work; things that make you human!
                            Some activities I enjoy the heck out of:
                        </p>
                        <ul className='list-inside'>
                            <li className='underline'>Sports:</li>
                            <ul className='list-disc list-inside ml-3'>
                                <li>🏀 : Point Forward; you probably can't guard me :)</li>
                                <li>🥏 : s/o my summer team, ManILoveFrisbee</li>
                                <li>🏈 : Fantasy Football; go Chargers!</li>
                            </ul>

                            <li className='underline'>Interests:</li>
                            <ul className='list-disc list-inside ml-3'>
                                <li>🎲 : Studying the Probability Theory behind Poker</li>
                                <li>💻 : Spending a day automating a 5 minute task</li>
                                <li>🤝🏻 : Volunteering (FYFB, Community Centers, Ryerson Clubs)</li>
                            </ul>

                            <li className='underline'>Solace:</li>
                            <ul className='list-disc list-inside ml-3'>
                                <li>🎧 : Self-proclaimed Music Savante</li>
                                <li>🌟 : Stargazing</li>
                                <li>🗺 : Planning future travels</li>
                            </ul>
                        </ul>
                    </div>
                    
                    <h1 className="text-4xl mobile:text-2xl mt-10 my-2 font-SerifPro text-orange dark:text-twitter underline underline-offset-6">Skills</h1>
                    
                    <h3 className="text-xl mobile:text-lg my-1 font-SansPro text-gray dark:text-d_coolwhite">$ Languages & Frameworks</h3>
                    <div className="grid grid-cols-4 gap-4 [&>*]:animate-bounce-slow text-center text-gray dark:text-d_coolwhite border-2 border-[#60a5fa] pt-1">
                        {languages}
                    </div>

                    <h3 className="text-xl mobile:text-lg my-1 font-SansPro text-gray dark:text-d_coolwhite">$ Databases & Stores</h3>
                    <div className="grid grid-cols-3 gap-4 [&>*]:animate-bounce-slow text-center text-gray dark:text-d_coolwhite border-2 border-[#8b22cc] pt-1">
                        {databases}
                    </div>

                    <h3 className="text-xl mobile:text-lg my-1 font-SansPro text-gray dark:text-d_coolwhite">$ Tools</h3>
                    <div className="grid grid-cols-2 gap-4 [&>*]:animate-bounce-slow text-center text-gray dark:text-d_coolwhite border-2 border-[#e883d8] pt-1">
                        {tools}
                    </div>

                    <h3 className="text-xl mobile:text-lg my-1 font-SansPro text-gray dark:text-d_coolwhite">$ Other</h3>
                    <div className="grid grid-cols-2 gap-4 [&>*]:animate-bounce-slow text-center text-gray dark:text-d_coolwhite border-2 border-[#f43f5e] pt-1">
                        {otherStuff}
                    </div>

                    <Radar data={data} className="border-2 p-2 my-5 bg-white rounded-md" />
                </div>
            </div>
        </Layout>
    )
}
