import React from 'react';
import './footer.css'
import image from '../../assets/unknown.png'
import play from '../../assets/GPlay.png'
export default function Footer() {
  return <div>
      <footer className="footer">
  	 <div className="scontainer">
  	 	<div className="row">
  	 		<div className="footer-col">
                   <div className='imgss'>
  	 			<h4><img className="sig" src={image} alt="" /></h4>
  	 			
  	 				<img className="play" src={play} alt="" />
  	 				</div>
  	 			
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4 id="cccc"> Company</h4>
  	 			<ul>
  	 			<li>© 2020 by Signo. All Rights Reserved.
				</li>
  	 			<li>Signodrive Logistics Pvt Ltd. is an Indian corporation and conducts business throughout India. Signodrive Logistics Pvt Ltd is the holder registered trademark for the name Signo within India. Signo is not affiliated with any trucking company of the same name located in India. </li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4 id="ddd">Social-links</h4>
  	 			<ul>
					<div className="social-links">
					<a href="#"><i className="fab fa-facebook-f"></i></a>
					<a href="#"><i className="fab fa-linkedin-in"></i></a>
					<a href="#"><i className="fab fa-youtube"></i></a>
				
					</div>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4 id="ddd">Contact-Us</h4>
  	 			<ul>
					   <li>HEAD OFFICE</li>
					   <li>B-61, Sector-67, Noida, Uttar Pradesh
						201014
						info@signo.in
						Tel: +91 7428523569
						</li>
				   </ul>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

  </div>;
}
