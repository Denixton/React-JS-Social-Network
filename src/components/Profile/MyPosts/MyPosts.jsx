import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	
	let posts = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);
	
	// Ссылка на textarea с текстом сообщения
	let newPostElement = React.createRef();

	// Функция добавления нового поста
	const addPost = () => {
		// Вызов функции addPost из state.js
		props.addPost();
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
				</div>
				<button onClick={addPost}>
					Add post
				</button>
			</div>
			<div className={classes.posts}>
				{posts} 
			</div>
		</div>
	);
	
}


export default MyPosts;