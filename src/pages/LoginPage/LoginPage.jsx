/* eslint-disable jsx-a11y/anchor-is-valid */
import "./LoginPage.css";

const LoginPage = () => {
	return (
		<>
			<div className="container-fluid login-main-container">
				<div className="row login-container">
					<div className="col-sm-10 p-0">
						<div className="row login-container-content">
							{/* header section  */}
							<div className="col login-header">
								<h3>
									Welcome to <br />
									Project Management Technology
								</h3>
							</div>

							{/* body section  */}
							<div className="col">
								<div className="row login-body ">
									<div className="col-md-6 col-lg-5 p-0 login-body-img">
										<img
											src="/assets/loginPage/images/login-image.png"
											alt="login left-side img"
											className="img-fluid right-img"
										/>
										<img
											src="/assets/loginPage/logo/PMT-LOGO-bl.png"
											alt=""
											className="img-fluid right-logo"
										/>
									</div>
									<div className="col-md-6 col-lg-5 p-0 login-form">
										<div className="text-section">
											<h3>Login to your account</h3>
											<div className="horizontal-line"></div>
										</div>

										<div className="form-section">
											<form action="#">
												<div className="email-section">
													<label htmlFor="email">E-mail</label>
													<input
														type="email"
														name="email"
														id="email"
														autoComplete="off"
													/>
												</div>

												<div className="password-section">
													<label htmlFor="password">Password</label>
													<input
														type="password"
														name="password"
														id="password"
														autoComplete="off"
													/>
												</div>

												<button type="submit" className="login-button">
													Login
												</button>

												<div className="forget-password">
													<a href="#">Forgot Password ? </a>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>

							{/* footer section  */}
							<div className="login-footer-container">
								<div className="col-lg-10 col-12 login-footer">
									<div className="login-footer-left">
										&copy; 2022 ProjmanTech. All rights reserved
									</div>

									<div className="login-footer-center">
										<img src="/assets/loginPage/icons/fb.webp" alt="fb icon" />

										<img
											src="/assets/loginPage/icons/logo-social-network-twitter-icon-753306.png"
											alt="twitter icon"
										/>

										<img
											src="/assets/loginPage/icons/LinkedIn_icon_circle.svg.png"
											alt="linkedin icon"
										/>

										<img
											src="/assets/loginPage/icons/instagram-icon-.png"
											alt="instagram icon"
										/>
									</div>

									<div className="login-footer-right">
										<a href="#" id="term">
											Term and Conditions
										</a>
										<a href="#">Privacy Policy</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
