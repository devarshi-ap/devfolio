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
    labels: ['React', 'Python', 'Java', 'TypeScript', 'Next.js', 'SQL', 'Node.js (+Express)'],
    datasets: [
        {
            label: 'Lines of Code [scale= 1:1000]',
            data: [7, 8, 8, 3, 3, 1, 6],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
        {
            label: 'Proficiency [scale= 1:1 out of /10]',
            data: [8, 8, 8, 7, 6, 4, 6],
            backgroundColor: 'rgba(85, 223, 248, 0.2)',
            borderColor: 'rgba(85, 223, 248, 1)',
            borderWidth: 1,
        },
    ],
};

export default function AboutPage() {
    const langArr = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'Java', 'Python', 'Bash', 'SQL', 'C', 'Lisp', 'Smalltalk', 'Elixir']
    const languages = langArr.map(lang => <div key={lang + '123'}>{lang}</div>);

    const dbArr = ['MongoDB', 'Redux-TK', 'PostgreSQL', 'SQLite3']
    const databases = dbArr.map(db => <div key={db + '123'}>{db}</div>);

    const toolArr = ['Cypress', 'Insomnia', 'Unittest', 'PgAdmin', 'Power BI']
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
                            I recently completed a 12-month co-op term at OPG (PNGS) as a SWE Intern. Now, I'm a 4th-Year CS Student working towards my HBSc. in Computer Science, having transferred from TMU to Western University.
                        </p>

                        <p>
                            I spend a lot of my free time messing around with code and I'll journal some of it here.
                            Some of these might be <a href="/projects" className="text-orange dark:text-twitter">projects</a> and hopefully the rest might still be of interest to yalls!
                        </p>

                        <p>
                            I'm always learning new skills and expanding my knowledge by taking up projects that involve <span className="text-orange dark:text-twitter">bleeding-edge technology</span>.
                        </p>

                        <p>
                            <s><em>In pursuit of a 2025 Summer internship (pretty pls :)).</em></s>
                        </p>
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

                    <h1 className="text-4xl mobile:text-2xl mt-10 my-2 font-SerifPro text-orange dark:text-twitter underline underline-offset-6">Interests & Hobbies</h1>
                    <div className='text-dark_gray dark:text-c_taupe text-md font-SansPro space-y-6'>
                        <p>
                            It's important to discover things you enjoy outside of school and work; things that make you human!
                            Some activities I enjoy the heck out of:
                        </p>
                        <ul className='list-inside'>
                            <li className='underline'>Sports:</li>
                            <ul className='list-disc list-inside ml-3'>
                                <li>🏀 : 5'11 Point Forward out of Toronto :)</li>
                                <li>🥏 : s/o my summer TUC team, ManILoveFrisbee</li>
                                <li>🏈 : Fantasy Football</li>
                                <li>🏋🏽 : Weightlifting; progress, one day at a time</li>
                            </ul>

                            <li className='underline'>Current Interests:</li>
                            <ul className='list-disc list-inside ml-3'>
                                <li>💻 : OS Dev from Scratch (x86)</li>
                                <li>🤝🏻 : Grokking Algorithms</li>
                                <li>🦾 : Spending 5 hours automating a 5 minute task</li>
                            </ul>

                            <li className='underline'>Solace:</li>
                            <ul className='list-disc list-inside ml-3'>
                                <li>🎧 : Self-proclaimed Music Savante (psst... <a href="https://open.spotify.com/user/dev9191?si=1fa1d94bb5564d46" className="text-orange dark:text-twitter">Spotify :)</a>)</li>
                                <li>🌟 : Stargazing</li>
                                <li>🛍️ : Thrifting</li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
