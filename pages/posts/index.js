import { useState } from "react";
import Posts from "../../components/Posts";
import postsData from "../../data/posts.json";

const POSTS_CONTENT = {
	title: "All Posts",
};

const AllPosts = () => {
	const [showLimit, setShowLimit] = useState(4);

	const handlePostLoader = () => {
		setShowLimit((prev) => (prev = postsData.length));

		if (showLimit === postsData.length) {
			setShowLimit((prev) => (prev = 4));
		}
	};

	return (
		<div className="all-posts-page">
			<Posts
				handleLoadMorePosts={handlePostLoader}
				posts={postsData.slice(0, showLimit)}
				{...POSTS_CONTENT}
				showLimit={showLimit}
				dataCount={postsData.length}
			/>
		</div>
	);
};

export default AllPosts;
