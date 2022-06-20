import Container from "../layout/container";
import Post from "./post";

const Posts = ({ title, posts, handleLoadMorePosts, showLimit, dataCount }) => {
	return (
		<div className="posts">
			<Container>
				<div className="row">
					<h2 className="posts__title">{title}</h2>

					<div className="posts__list">
						{posts.map((post) => (
							<Post
								key={post.title.replace(" ", "-")}
								{...post}
							/>
						))}
					</div>

					<div onClick={handleLoadMorePosts} className="load-more">
						{showLimit >= dataCount ? "Load less" : "Load more"}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Posts;
