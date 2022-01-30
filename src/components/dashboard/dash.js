import React from 'react';
import './dash.css'
import plus from '../../assets/Plus.svg'
import search from '../../assets/Search.svg'
import Comp from '../comp/comp';
export default function Dash() {
  return <div>
      <section className="yellowBox">
        <div className="yellowBoxContent">
            <p className="ind">India’s #1 Online Driver Directory</p>
            <p className='gst'>Connect with GST and Aadhar verified Transporters</p>    
        </div>
        </section>
    <section className="frontContent">
        <div className="drivers">
            <p><b>Search Drivers</b></p>
            <span>
                <input type="radio" name="searchDrivers" value="By Location" id="byLocation" />By Location
            </span>
            <span>
                <input type="radio" name="searchDrivers" value="By Name" id="byName" />By Name
            </span>
        </div>
        <div className="cityAndState">
            <div className="city">
                <p id="city"><b>Source City</b></p>
                <input  type="text" placeholder="Where is your Loading Point?" />
            </div>
            <div className="state">
                <b><p className="destination">Destination State</p></b>
                <div className="buttons">
                    <button id="b1">Maharashtra &nbsp; <img id="ser"src={plus} alt="" /></button>
                    <button id="b1">Gujarat &nbsp; <img id="ser"src={plus} alt="" /></button>
                    <button id="bb">Delhi &nbsp; <img id="ser"src={plus} alt="" /></button>
                    <button id="bb">Karnataka &nbsp; <img id="ser"src={plus} alt="" /></button>
                    <button style = {{border: "none" ,backgroundColor: "#FBFFCF"}}><img src={search} alt=""/> &nbsp;<p id="bbb"> Search</p></button>
                </div>
            </div>
        </div>
    </section>
    <div className="write">
        <p className="write-1">Top Drivers of Vahak Marketplace </p>
        <div>
            <Comp />
        </div>
        </div>
  </div>;
  
}
