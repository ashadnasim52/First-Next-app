import styles from '../styles/Article.module.css';
import ArticleItems from './ArticleItems';

const ArticleList = ({ articles }) => {
	return (
		<div className={styles.grid}>
			{articles.map((article) => (
				<ArticleItems article={article} />
			))}
		</div>
	);
};

export default ArticleList;
