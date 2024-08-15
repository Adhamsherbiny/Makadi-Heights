import './App.css';
import "./homepage.css"
import "./nav.css"
import MakadiServices from './makadi services';
import Nav from './nav';
import WelcomeSection from './welcome section';
function App() {  
  return (
    <div className='homepage'>
      <div className="container">
        <Nav/>
      </div>
        <WelcomeSection/>
        <MakadiServices/>
    </div>
  )
}

export default App
