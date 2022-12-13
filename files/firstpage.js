import React from "react";
import background from '/Projects/react/library/src/img/istockphoto-1336271758-170667a.jpg'
import '/Projects/react/library/src/firstpage.css';

function Firstpage() {

	return (
		<>
		<div >
			<nav className="navbar">
				<div className="logo">IIIT</div>
				<ul className="nav-links">
					<li className="active"><a href="lib.html">Library</a></li>
					<li className="active"><a href="aboutus.html">About college</a></li>
					<li className="ctn2"><a href="https://rguktn.ac.in/contactus/">Contacct Us</a></li>
				</ul>
				<img src="./img/menu-btn.png" alt="" className="menu-btn"></img>
			</nav>
			<header>
				<div class="header-content">
					<h2>WELCOME TO MY COLLEGE PAGE</h2>
					<div class="line"></div>
					<h1>IIIT NUZVID(RGUKT)</h1>
				</div>
			</header>
		</div>
		</>
	)
}

export default Firstpage;