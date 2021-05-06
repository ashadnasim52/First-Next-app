import Head from 'next/head';
import ArticleList from '../components/ArticleList';

export default function Home({ articles }) {
	console.log(articles);
	return (
		<>
			<Head>
				<title>Ashad Nextjs</title>
				<meta name='description' content='nextjs....' />
			</Head>
			<div>Welcome to Nextjs</div>
			<ArticleList articles={articles} />
		</>
	);
}

export const getStaticProps = async () => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_limit=6`
	);
	console.log(res);
	const data = await res.json();
	console.log(data);
	return {
		props: {
			articles: data,
		},
	};
};
