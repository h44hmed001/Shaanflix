import { Link } from "react-router-dom";

const Navbar = () => {
  return (

      <nav className="container flex mx-auto fixed ">
        {/* Icon and List */}
        <div className="flex p-5">
        <img className="h-8 pr-8" src="/images/shaanflix.png" alt=""/>
        <ul className="flex text-white text-sm p-1">
          <li className="mr-5 font-bold"><button>Home</button></li>
          <li className="mr-5"><button>TV Shows</button></li>
          <li className="mr-5"><button>Movies</button></li>
          <li className="mr-5"><button>New & Popular</button></li>
          <li className="mr-5"><button>My List</button></li>
          <li>Browse By Languages</li>
        </ul>

        

        {/* Avatar and  Widgets*/}
        
        {/*<ul className='flex'>
        <li><SearchIcon/></li>
        <li>Kids</li>
        <li><NotificationsNoneIcon/></li>
        </ul>*/}
  </div>
  
        
      </nav>
    

  )
}

export default Navbar
