import { summary } from '../contents/Home'
import githubLogo from '../assets/Github.svg'
import linkedinLogo from '../assets/Linkedin.svg'
import instagramLogo from '../assets/Instagram.svg'
import twitterLogo from '../assets/Twitter.svg'

const Home = () => {
  return (
     <div className='min-h-screen flex py-40 w-full items-center'>
        <div>
            {summary}
        </div>
        <div>
            <img src={githubLogo} alt="Github logo" />
            <img src={linkedinLogo} alt="Linkedin logo" />
            <img src={instagramLogo} alt="Instagram logo" />
            <img src={twitterLogo} alt="Twitter logo" />
        </div>
    </div>
  )
}

export default Home
