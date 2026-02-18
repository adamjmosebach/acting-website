import './Home.css'
import headshot from '../images/headshot.jpg'
import MOTOEflyer from '../images/MOTOEflyer.jpg'
import HomeNavButton from '../components/HomeNavButton'

function Home({ updateBannerNav }) {

  updateBannerNav(false)

  return (
    <div className='home-div'>
      <div className='home-nav'>
        <HomeNavButton name='Bio' linkTo='/bio' />
        <HomeNavButton name='Resume' linkTo='/resume' />
        <HomeNavButton name='Photos' linkTo='/photos' />
        <HomeNavButton name='Media' linkTo='/media' />
        <HomeNavButton name='Contact' linkTo='/contact' />
      </div>
      <div className='headshot-container'>
        <img src={headshot} alt='headshot' className='headshot'></img>
      </div>
      <div className='headshot-container'>
        <href src='https://cur8.com/21064/project/135538'><img src={MOTOEflyer} alt='headshot' className='headshot'></img></href>
      </div>
    </div>
  )
}

export default Home
