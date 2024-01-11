import React, { Fragment } from "react";

function Index(){
    return(
        <Fragment>
            <header className="top-area">
			<div className="header-area">
			    <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">

			        <div className="container" />

			            <div className="navbar-header">
			                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
			                    <i className="fa fa-bars"></i>
			                </button>

			            <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
			                <a className="navbar-brand" href="index.html" >WhyAgstn</a>
			                <ul className="nav navbar-nav navbar-right" style={{marginLeft: "750px"}} data-in="fadeInDown" data-out="fadeOutUp">
			                <li className="smooth-menu active"></li>
			                    <li className=" smooth-menu"><a href="Index.js">Home</a></li>
			                    <li className="smooth-menu"><a href="#about">About Me</a></li>
			                    <li className="smooth-menu"><a href="#education">Riwayat Pendidikan</a></li>
			                </ul>
			            </div>
			        </div>
			    </nav>
			</div>

		    <div className="clearfix"></div>

		</header>

        <section id="welcome-hero" className="welcome-hero">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className="header-text">
							<h2>hi <span>,</span> i am Wahyu Agustin Orbaningsih <span>.</span>   </h2>
							<p>Student of SMKN 6 JEMBER</p>
							<a href="assets/download/browney.txt" download>download resume</a>
						</div>
					</div>
				</div>
			</div>
		</section>

        <section id="about" className="about">
			<div className="section-heading text-center">
				<h2>About Me</h2>
			</div>
			<div className="container">
				<div className="about-content">
					<div className="row">
						<div className="col-sm-6">
							<div className="single-about-txt">
								<h3>
									Saya adalah seorang siswi kelas 12 jurusan Rekayasa Perangkat Lunak di SMKN 6 JEMBER
								</h3>
								<p>
                                    Nama   : Wahyu Agustin Orbaningsih
									TTL    : Jember, 08 Agustus 2005
									Umur   : 18 Tahun
									Alamat : Jln. Merpati, WringinAgung
								</p>
								<div className="row">
									<div className="col-sm-6">
										<div className="single-about-add-info">
											<h3>phone</h3>
											<p>+62 815-5420-3527</p>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="single-about-add-info">
											<h3>email</h3>
											<p>orbaningrum0@gmail.com</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-offset-1 col-sm-5">
							<div className="single-about-img">
								<img src="assets/images/about/orba.jpeg" alt="profile_image" />
								<div className="about-list-icon">
									<ul>
										<li>
											<a href="#">
												<i  className="fa fa-facebook" aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i  className="fa fa-dribbble" aria-hidden="true"></i>
											</a>
											
										</li>
										<li>
											<a href="#">
												<i  className="fa fa-twitter" aria-hidden="true"></i>
											</a>
											
										</li>
										<li>
											<a href="#">
												<i  className="fa fa-linkedin" aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i  className="fa fa-instagram" aria-hidden="true"></i>
											</a>
										</li>
									</ul>
								</div>

							</div>

						</div>
					</div>
				</div>
			</div>
		</section>

        <section id="education" className="education">
			<div className="section-heading text-center">
				<h2>Riwayat Pendidikan</h2>
			</div>
			<div className="container">
				<div className="education-horizontal-timeline">
					<div className="row">
						<div className="col-sm-4">
							<div className="single-horizontal-timeline">
								<div className="experience-time">
									<h2>2013 - 2019</h2>
									<h3></h3>
								</div>
								<div className="timeline-horizontal-border">
									<i className="fa fa-circle" aria-hidden="true"></i>
									<span className="single-timeline-horizontal"></span>
								</div>
								<div className="timeline">
									<div className="timeline-content">
										<h4 className="title">
											SDN WringinAgung 03 
										</h4>
										<h5>Pd. Waluh, WringinAgung, Kec. Jombang</h5>
										<p className="description">
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="single-horizontal-timeline">
								<div className="experience-time">
									<h2>2019 - 2021</h2>
									<h3></h3>
								</div>
								<div className="timeline-horizontal-border">
									<i className="fa fa-circle" aria-hidden="true"></i>
									<span className="single-timeline-horizontal"></span>
								</div>
								<div className="timeline">
									<div className="timeline-content">
										<h4 className="title">
											SMP Negeri 1 Tanggul
										</h4>
										<h5>Tanggul Kulon, Kec. Tanggul</h5>
										<p className="description">
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="single-horizontal-timeline">
								<div className="experience-time">
									<h2>2021 - Sekarang</h2>
									<h3></h3>
								</div>
								<div className="timeline-horizontal-border">
									<i className="fa fa-circle" aria-hidden="true"></i>
									<span className="single-timeline-horizontal spacial-horizontal-line
									"></span>
								</div>
								<div className="timeline">
									<div className="timeline-content">
										<h4 className="title">
											SMNKN 6 JEMBER
										</h4>
										<h5>JL. PB. Sudirman, Tekoan, Tanggul Kulon,Kec. Tanggul</h5>
										<p className="description">
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

        <footer id="footer-copyright" class="footer-copyright">
			<div class="container">
				<div class="hm-footer-copyright text-center">
					<p>
					</p>
				</div>
			</div>
			<div id="scroll-Top">
				<div class="return-to-top">
					<i class="fa fa-angle-up " id="scroll-top" ></i>
				</div>
				
			</div>
			
        </footer>

		<script src="assets/js/jquery.js"></script>
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
		
        <script src="assets/js/bootstrap.min.js"></script>
		
		<script src="assets/js/bootsnav.js"></script>
		
		<script src="assets/js/jquery.sticky.js"></script>
		
		<script src="assets/js/progressbar.js"></script>

		<script src="assets/js/jquery.appear.js"></script>

        <script src="assets/js/owl.carousel.min.js"></script>

		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
		
        <script src="assets/js/custom.js"></script>
        </Fragment>
    )
}

export default Index;