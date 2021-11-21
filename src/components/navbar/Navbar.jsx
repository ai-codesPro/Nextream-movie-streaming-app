import React from 'react'
import "./Navbar.scss"
import { useState } from 'react';
import { ArrowDropDown, NotificationsActive, Search } from '@material-ui/icons';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
           <div className="container">
               <div className="left">
                    <img src="http://1africa.xyz/wp-content/uploads/2021/11/logo.png" alt="NEXTSTREAM" />
                     <span>Home</span>
                     <span>Seasonal</span>
                     <span>Movies</span>
                     <span>Popular</span>
                     <span>New</span>
                     <span>My List</span>
                </div>
               
                <div className="right">
                    < Search className="icon"/>
                    <span>KID</span>
                    <NotificationsActive className="icon"/>
                    <img src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg" alt="" />

                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                    
                </div>
           </div>
        </div>
    )
}

export default Navbar
