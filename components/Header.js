import styles from '../styles/Header.module.css';

const Header = () => {
	return (
		<div>
			<h1
				className={styles.title}
				// style={{
				// 	backgroundColor: 'red',
				// }}
			>
				<span>Web Dev</span> News
			</h1>

			<p className={styles.description}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem
				reiciendis quam asperiores quia mollitia sed nesciunt nostrum soluta
				cumque!
			</p>
		</div>
	);
};

export default Header;
