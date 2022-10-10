import ContactItem from './ContactItem'

export default function Contact() {
    return (
        <div className="max-w-fit flex mt-5">

            <ContactItem 
                url="https://github.com/devarshi-ap"
                name="Github"
            />

            <ContactItem 
                url="https://www.linkedin.com/in/devarshi-ap/"
                name="Linkedin"
            />

            <ContactItem 
                url="https://twitter.com/thefirstdev"
                name="Twitter"
            />

            <ContactItem 
                url="https://medium.com/@cforsmart/"
                name="Medium"
            />

            <ContactItem 
                url="/Resume.pdf"
                name="Resume"
            />
        </div>
    )
}