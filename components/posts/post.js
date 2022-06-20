import CustomLink from "../custom-link";

const Post = ({ id, title, description, image }) => (
	<article className="post">
		<div className="post__main">
			<header className="post__header">
				<time>2020/20/15</time>

				<p>by hatamovich.info@gmail.com</p>
			</header>

			<div className="post__text">
				<h3 className="post__title">{title}</h3>

				<p className="post__para">{description.substring(0, 170)}...</p>
			</div>

			<CustomLink href={`/posts/${id}`} className="post__link">
				Explore details
			</CustomLink>
		</div>

		<div className="post__image">
			<img src={image} alt="" />
		</div>
	</article>
);

export default Post;
