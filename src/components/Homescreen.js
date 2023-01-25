import Rows from './Rows'
import Banner from './Banner'
import Navbar from './Navbar'
import requests from '../Requests'


const Homescreen = () => {
  return (
    <div className='bg-black'>
        {/* Navbar */}
        <Navbar/>
        {/* Banner */}
        <Banner/>
        {/* Shows */}
        <Rows title="Trending" fetchURL={requests.requestTrending} />
        <Rows title="Popular" fetchURL={requests.requestPopular} />
        <Rows title="Top-Rated" fetchURL={requests.requestTopRated} />
        <Rows title="Horror" fetchURL={requests.requestHorror} />
        <Rows title="Up-Coming" fetchURL={requests.requestUpcoming} />
        
    
    </div>
  )
}

export default Homescreen
