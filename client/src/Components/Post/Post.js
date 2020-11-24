import CommentsList from '../CommentsList/CommentsList';
import CommentForm from '../CommentForm/CommentForm';

function Post({post}) {
	return (
		<div style={ {border: 'solid black', width: '30%', height: '40%'} }>
			<div>Автор: { post.authorID }</div>
			<div>Название проекта: { post.title }</div>
			<div>Описание проекта: { post.description }</div>
			<img src={ post.photo } style={ {width: '50%', heigh: '35%'} }/>
			<div>Комментарии: <CommentsList key={post._id} id={ post._id }/> <br/> <CommentForm id={post._id} /></div>
		</div>
	);
}

export default Post;
