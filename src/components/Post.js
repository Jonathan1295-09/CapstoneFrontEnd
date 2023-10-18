import {Link} from 'react-router-dom';

// describe the post prop
function Post ({post}){
    return <div className='listbox'>
        <Link to={`/project/${post.id}`} className='list'>
            <h1>{post.project_name}</h1>
            <h2>{post.start_date}</h2>
            <h2>{post.end_date}</h2>
            <h2>{post.notes}</h2>
            <h2>{post.supplies}</h2>
            <img src={post.image}/>
        </Link>
    </div>
}

export default Post;