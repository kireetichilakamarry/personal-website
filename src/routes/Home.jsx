import { summary } from '../contents/Home'
import githubLogo from '../assets/Github.svg'
import linkedinLogo from '../assets/Linkedin.svg'
import instagramLogo from '../assets/Instagram.svg'
import twitterLogo from '../assets/Twitter.svg'
import profilePic from '../assets/sausalito_pic.png'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-row py-[10%] px-[5%] items-center'>
        {/* Image (for now, just use something random) */}
        <div className='w-1/3 h-1/3 py-40'>
            <img src={profilePic} alt="Profile Picture" />
        </div>

        {/* Summary and Social Media Links */}
        <div className='flex-col py-40'>
            <div className='p-[2%]'>
                {summary}
            </div>
            <div className='flex flex-row justify-between px-[40%] py-[5%]'>
                <a target="_blank" href="https://github.com/kireetichilakamarry/"><img src={githubLogo} alt="Github logo" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/kchilaka/"><img src={linkedinLogo} alt="Linkedin logo" /></a>
                <a target="_blank" href="https://www.instagram.com/kireeti.chy"><img src={instagramLogo} alt="Instagram logo" /></a>
                <a target="_blank" href="https://x.com/KChilakamarry"><img src={twitterLogo} alt="Twitter logo" /></a>
            </div>
        </div>

    </div>
  )
}

export default Home
