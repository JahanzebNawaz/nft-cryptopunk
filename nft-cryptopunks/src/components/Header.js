import React from 'react'
import './Header.css'
import logoPunk from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitch from '../assets/header/theme-switch.png'


const Header = () => {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img src={logoPunk} className='punkLogo' alt="" />
            </div>
            <div className='searchBar'>
                <div className='searchIcon'>
                    <img src={searchIcon} alt="" />
                </div>
                    <input type="search" className='searchInput' placeholder='Search your NFT!!' />
            </div>

            <div className='headerItems'>
                <p>Drops</p>
                <p>Market Place</p>
                <p>Create</p>
            </div>

            <div className='headerActions'>
                <div className='themeSwitch'>
                    <img src={themeSwitch} className='themeSwitchIcon' alt="" />
                </div>
            </div>
            <div className="loginButton">GET IN</div>


        </div>
    )
}

export default Header
