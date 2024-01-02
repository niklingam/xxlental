import React, { useState } from 'react'
import { MenuOutlined, HomeOutlined} from '@ant-design/icons';
import { Avatar, message, Space, Dropdown } from 'antd';
import './headercss.css'




function App() {

    const [isMobile, setIsMobile] = useState(false);
    const onClick = ({ key }) => {
        message.info(`label' ${key}`);
    };
    return (
        
        <nav className='navbar'>
            
            <div className='header'>
                
                <span>
                    <h3>LetsAndLouster <HomeOutlined /></h3>
                    {/* <img src="image.png" /> */}
                </span>
            </div>
               
            <ul className={isMobile ? "nav-links-mobile" : "nav-link-1"}
            onClick={()=> setIsMobile(false)}
            > 
                <a href="/" className='home'>
                    <li>Home</li>
                </a>
                <a href="/About" className='about'>
                    <li>About</li>
                </a>
                <a href="/Contact" className='contact'>
                    <li>ContactUs</li>
                </a>
            </ul>
            <ul className='nav-link-2'>
            </ul>
            <div className='menu-icon'
             onClick={()=> setIsMobile(!isMobile)}
            >
            <MenuOutlined />
            </div>
        </nav>
    );
}
export default App;  