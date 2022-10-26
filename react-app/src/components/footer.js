import "./footer.css";
import ben from "./pictures/ben.jpg"

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
								<div className="fname">Benjamin Lau</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
