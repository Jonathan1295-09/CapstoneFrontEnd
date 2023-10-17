import Post from '../components/Post';
import { useLoaderData, Link } from 'react-router-dom';

function Projects (props){

    const projects = useLoaderData()

    return (
        <div>
                {projects.map((project) => <Post key={project.id} post={project}/>)}
                <Link to={"/"}>Home</Link>
        </div>
    )
}

export default Projects;