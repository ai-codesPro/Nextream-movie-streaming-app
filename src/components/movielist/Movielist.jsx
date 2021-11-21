import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React from 'react'
import Listitem from '../listitem/Listitem'
import "./Movielist.scss"

function Movielist() {
    return (
        <div>
            <span className="listTitle">Continue watching</span>
                <div className="wrapper">
                    <ArrowBackIosOutlined />
                    <div className="container">
                        <Listitem />
                    </div>
                    <ArrowForwardIosOutlined />
                </div>                
        </div>
    )
}

export default Movielist
