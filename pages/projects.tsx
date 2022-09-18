import Link from 'next/link'
import Layout from '../components/Layout'
import ProjectBox from '../components/ProjectBox'
import { projects } from '../utils/sample-data'

export default function ProjectsPage() {    
    return (
        <Layout title="Projects">
            <div className="grid min-h-fit place-items-center my-20">
                <div className="w-[75%]">

                    <h1 className="w-fit font-Splash text-c_tea dark:text-d_coolwhite text-6xl mx-auto mb-16">Projects.</h1>

                    <div className="grid grid-cols-2 mobile:grid-cols-1 md:grid-cols-2 gap-16 place-content-stretch w-[90%] mx-auto text-center text-gray dark:text-d_coolwhite">

                        {projects.map(proj => (
                            <ProjectBox 
                                name={proj.name}
                                description={proj.description}
                                tools={proj.tools}
                                link={proj.link}
                                demo={proj.demo}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}