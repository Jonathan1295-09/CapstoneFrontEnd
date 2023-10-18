import {Link} from 'react-router-dom';

// describe the post prop
function Post ({post}){
    return <div>
        <Link to={`/project/${post.id}`}>
            <h1>{post.project_name}</h1>
            <h2>{post.start_date}</h2>
            <h2>{post.end_date}</h2>
            <h2>{post.notes}</h2>
            <h2>{post.supplies}</h2>
            <h2>{post.image}</h2>
        </Link>
    </div>
}

export default Post;