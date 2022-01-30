import React from 'react';
import logo from '../../assets/logo.png'
import './nav.css'
export default function Nav() {

  return <div> 
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
	  <div className="container-fluid ">
		<a className="navbar-brand " href="#">
    <img src={logo} />
    </a>
		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
		  <ul className="navbar-nav">
			<li className="nav-item">
			  <a className="nav-link active" aria-current="page" href="#">Home</a>
			</li>
			<li className="nav-item">
			  <a className="nav-link" href="#">&nbsp;&nbsp;&nbsp;Services</a>
			</li>			
			<li className="nav-item">
			  <a className="nav-link" href="#">&nbsp;&nbsp;&nbsp;Marketplace</a>
			</li>			
			<li className="nav-item">
			  <a className="nav-link" href="#">&nbsp;&nbsp;&nbsp;Driver Directory</a>
			</li>			
			<li className="nav-item">
			  <a className="nav-link" href="#">&nbsp;&nbsp;&nbsp;Blogs</a>
			</li>			
			<li className="nav-item">
			  <a className="nav-link" href="#">&nbsp;&nbsp;&nbsp;Company</a>
			</li>			
      <li className="nav-item">
			  <a className="nav-link" href="#"><i class="fas fa-globe-europe"></i>&nbsp;&nbsp;English&nbsp;&nbsp;&nbsp;</a>
			</li>			
		  </ul>		  
      {/* <li className="nav-item"> */}
			  <a className="nav-link" href="#"><button className='butto'><p className='parr'>Login/signup</p></button></a>
					
		</div>
	  </div>
	</nav>

  </div>;
}
