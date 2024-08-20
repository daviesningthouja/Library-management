import './home.css'
import HeroSectionImg from '../../assets/b1.png';
import {MainLayout} from '../index.js';

const Home = () =>{


  return (
    <MainLayout>
      <div className='header section_padding'>
        <div className='header_container'>
          
          <h1 className='gradient_text'>Welcome to Your Library Portal</h1>
          <p>Search, Borrow, and Manage Your Books with Ease</p>
        
          <div className='header_search-bar'>
            <input type="text" placeholder="Search your favorite books..."/>
            <button>Search</button>
          </div>

        </div>

        <div className='header_picture'>
          <img src={HeroSectionImg}/>
        </div>

      </div>
  </MainLayout>
  
    
  )
}

export default Home
