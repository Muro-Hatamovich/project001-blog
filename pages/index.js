import { Fragment, useState } from "react";
import Banner from "../components/banner";
import Posts from "../components/posts";
import fs from "fs/promises";
import path from "path";

const BANNER_CONTENT = {
	title: "Code with me",
	paragraph:
		"More “two heads are better than one” than “stop reading over my shoulder,” pair programming is the practice of two developers sharing a single workstation to interactively tackle a coding task together. At Code Fellows, pair programing is one way we foster a collaborative environment while developing key industry skills.",
};

const POSTS_CONTENT = {
	title: "Featured Posts",
};

const Home = ({ posts }) => {
	const [showLimit, setShowLimit] = useState(2);

	const handlePostLoader = () => {
		setShowLimit((prev) => (prev = posts.length));

		if (showLimit === posts.length) {
			setShowLimit((prev) => (prev = 2));
		}
	};

	const getFeaturedPosts = (data) => {
		return data.filter((post) => post.isFeatured);
	};

	return (
		<Fragment>
			<Banner {...BANNER_CONTENT} />
			<Posts
				handleLoadMorePosts={handlePostLoader}
				posts={getFeaturedPosts(posts).slice(0, showLimit)}
				{...POSTS_CONTENT}
				showLimit={showLimit}
				dataCount={getFeaturedPosts(posts).length}
			/>
			;
		</Fragment>
	);
};

export const getStaticProps = async () => {
	const filePath = path.join(process.cwd(), "data", "posts.json");

	const posts = JSON.parse(await fs.readFile(filePath));

	return { props: { posts }, revalidate: 10 };
};

export default Home;
