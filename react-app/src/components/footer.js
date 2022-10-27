import "./footer.css";
import ben from "./pictures/ben.jpg"
import linkedin from "./pictures/linkedin.png"

function Footer() {
	return (
		<footer>
			<div className="Footer-container">
				<div className="devs">
					<div className="Meet">Meet The Developer!</div>
					<div className="Footer">
						<div className="Footer-inner">
							<div className="footer-stuff">
								<a
									className="aaa"
									href="https://github.com/BenjaminKHLau"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={ben} className="footer-img" />
								</a>
								<a
									className="aaa"
									href="https://www.linkedin.com/in/benjaminkhlau/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={linkedin} className="footer-img" />
								</a>
							</div>
								<div className="fname">Crafty is an Etsy inspired application by Benjamin Lau</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
