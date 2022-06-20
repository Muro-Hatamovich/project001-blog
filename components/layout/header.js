import Container from "./container";
import Nav from "./Nav";
import CustomLink from "../custom-link";

const Header = () => (
	<header className="header">
		<Container>
			<div className="row">
				<div className="header__main">
					<CustomLink href="/">
						<h1 className="logo">hatamovich.codes</h1>
					</CustomLink>

					<Nav />
				</div>
			</div>
		</Container>
	</header>
);

export default Header;
