import CustomLink from "../custom-link";

const Nav = () => (
	<nav className="nav">
		<CustomLink href="/posts" className="nav__item">
			All posts
		</CustomLink>
		<CustomLink href="/contacts" className="nav__item">
			Contacts
		</CustomLink>
	</nav>
);

export default Nav;
