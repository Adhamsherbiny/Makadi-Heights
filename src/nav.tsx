import { useQuery } from 'react-query';
import logo from "./assets/Logo.png"
import weather from "./assets/weather.png"
import contact from "./assets/contact.png"
import menu from "./assets/menu.png"
import round from "./assets/round.png"
import './App.css';
import "./homepage.css"
import axios from 'axios';

function Nav() {
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=26.96546281915211&lon=33.883077697384714&appid=f1130b3524feefd0549671bf69edc578";
    const { isLoading , data} =  useQuery("weather" , ()=>{
    return  axios.get(url)
  })
  if(isLoading){
    return 
    <div className='loading'>
      <p className='website-name'>MAKADI HEIGHTS</p>
      <p className='slogan'>MADE OF MOMENTS</p>
      <p>Loading ...</p>
    </div>
  }
  return (
    <nav>
    <div className="nav-logo">
      <img src={logo} alt="Makadi logo" />
    </div>
    <div className="nav-tabs">
      <ul>
        <li>
          <div className="weather">
          <img className='weather-logo' src={weather} alt="weather" />
          <p className="weather-deg">{Math.floor(data?.data["main"].temp - 273)}</p>
          <img className='deg-mark' src={round} alt="weather" />
          </div>
        </li>
        <li>
          <img className='contact-logo' src={contact} alt="Contact Icon" />
        </li>
        <li>
          <button className='book-btn'>BOOK NOW</button>
        </li>
        <li>
          <div className="nav-menu">
            <span>MENU</span>
            <img  src={menu} alt="Menu Icon" />
          </div>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Nav
