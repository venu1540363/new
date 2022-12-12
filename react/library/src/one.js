import React from 'react'

function Login() {
	return (
		<div>
			<div classNameName="login">
				<h2>Login Form</h2>
				<input action="/firstpage.html" method="post">
					<div classNameName="imgcontainer">
						<img src="/img/Avatar.png" alt="Avatar" className="avatar" />
					</div>

					<input classNameName="container">
						<label for="usrname"><b>Username</b></label>
						<input type="text" placeholder="Enter Username" name="uname" required ></input>

						<label for="psw"><b>Password</b></label>
						<input type="password" placeholder="Enter Password" name="psw" required>
							<input type="password" placeholder="Enter Password" id="psw" name="psw"
								pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
								title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
								required>
								<button type="submit"><a href="firstpage.html">Login</a></button>
								<label>
									<input type="checkbox" checked="checked" name="remember"> Remember me </input>
								</label>
							</input>

							<div className="container">
								<button type="reset" className="cancelbtn">Cancel</button>
								<span className="psw"> <a href="forgotpassword.html">Forgot password?</a></span>
							</div>
						</input>
						<div id="message">
							<p id="letter" className="invalid">A <b>lowercase</b> letter</p>
							<p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
							<p id="number" className="invalid">A <b>number</b></p>
							<p id="length" className="invalid">Minimum <b>8 characters</b></p>
						</div>
					</input>
				</input>
			</div>
			<h1>Hello</h1>
		</div>
	
	)
}

export default Login;