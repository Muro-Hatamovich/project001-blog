import Link from "next/link";

const CustomLink = ({ children, href, className = "link" }) => (
	<Link href={href}>
		<a className={className}>{children}</a>
	</Link>
);

export default CustomLink;
