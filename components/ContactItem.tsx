import { BsGithub, BsTwitter, BsLinkedin, BsMedium, BsFillFileEarmarkPdfFill} from 'react-icons/bs'

export default function ContactItem(props) {

    const logoMap = {
        'Github': <BsGithub className='dark:text-github'/>,
        'Linkedin': <BsLinkedin className='dark:text-linkedin'/>,
        'Twitter': <BsTwitter className='dark:text-twitter'/>,
        'Medium': <BsMedium className='dark:text-medium'/>,
        'Resume': <BsFillFileEarmarkPdfFill className='hover:text-resume dark:text-resume'/>,
    }

    return (
        <a href={props.url} target="_blank" className="relative [&>*]:p-3 [&>*]:text-6xl [&>*]:duration-700 [&>*]:hover:text-[#683238]/[0.35]" rel="noopener">
            {logoMap[props.name]}
        </a>
    );
}