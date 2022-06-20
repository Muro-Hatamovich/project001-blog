import Container from "./layout/container";
const Banner = ({ title, paragraph }) => (
	<div className="banner">
		<Container>
			<div className="row">
				<div className="banner__main">
					<h2 className="banner__title">{title}</h2>

					<p className="banner__para">{paragraph}</p>

					<button className="banner__btn">
						Let&apos; get started
					</button>
				</div>
			</div>
		</Container>
	</div>
);

export default Banner;
