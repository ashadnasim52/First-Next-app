import styles from '../styles/Article.module.css';
import Link from 'next/link';
const ArticleItems = ({ article }) => {
	console.log(article);
	return (
		<Link href='/article/[id]' as={`/article/${article.id}`}>
			<a className={styles.card}>
				<h3>{article.title}</h3>
				<p>{article.body}</p>
			</a>
		</Link>
	);
};

export default ArticleItems;
