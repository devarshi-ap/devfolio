import { motion } from "framer-motion";

export default function ProjectBox({ name, description, tools, link, demo}) {
    return (
        <motion.div

            initial={{ y:"40%", opacity: 0.1, scale: 1 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{duration: 0.5, ease: 'easeIn'}}
            exit={{ opacity: 0 }}
            drag
            dragConstraints={{
                top: -100,
                right: 100,
                bottom: 100,
                left: -100,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 90 }}
            dragElastic={0.75}
            whileTap={{ cursor: "grabbing" }}
            className="cursor-grab"
        >

            <div className="flex flex-col justify-between rounded-md hover:scale-105 duration-500 border border-[#1a7]">
                
                <div className="w-full border py-4 rounded-t-md border-[#000] bg-[url('https://images.unsplash.com/photo-1655998233171-ee5b130acba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=798&q=80')] bg-cover">
                    <h3 className="underline underline-offset-2 decoration-2 text-white">{name}</h3>
                </div>
                
                <div className="space-y-5 py-4 px-3 rounded-b-md flex flex-col justify-between bg-a_black dark:bg-d_coolwhite text-b_white dark:text-gray">
                    <p className="text-sm w-[80%] mx-auto">{description}</p>
                    <code className="text-sm">🔨= {tools}</code>
                    <p><a className="border border-[#d9dcee] dark:border-orange p-1 rounded-md" href={link}>↗ ({demo ? 'Demo' : 'Github'})</a></p>
                </div>
            </div>
        </motion.div>
    )
}