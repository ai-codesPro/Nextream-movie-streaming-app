import React from 'react'
//import { AcUnit } from "@material-ui/icons"
import "./Home.scss"
import Navbar from '../components/navbar/Navbar'
import Featured from '../components/featured/Featured'
import Movielist from '../components/movielist/Movielist'

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <Featured type="movie"/>
            <Movielist />
            <Movielist />
            <Movielist />
            <Movielist />
        </div>
    );
};

export default Home
