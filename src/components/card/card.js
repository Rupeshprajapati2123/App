import React from 'react';
import './card.css'
import image  from '../../assets/im.jpg'
export default function Card() {
  return <div>
      <div className="container">
        <div className="view">
            <div><img className="img" src={image} alt="" /></div>
            <div className="viewcon">
                <div>
                    <button className="vi"><p className="vii"><i class="far fa-eye"></i>  17 views</p></button>
                </div>
                <div>
                    <button className="vi"><p className="vii"><i class="fas fa-users"></i>  3 Connections</p></button>
                </div>
            </div>
        </div>
        <div className="general">
            <div>
                <p className="location-1">MANGLORE KARNATKA</p>
            </div>
            <div>
                <p className="loc-2"> Akshay</p>
            </div>
            <div className="what">Shipper</div>
            <div className="bb">
                <button className="aa"><p className="boot"> View Profile</p></button>
                <button className="cc"><p className="boot1"><i class="fas fa-phone-alt"></i>&nbsp;&nbsp;&nbsp;Get Contact Details</p></button>
            </div>
        </div>
    </div>
  </div>;
}
