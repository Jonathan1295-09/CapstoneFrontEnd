import Post from '../components/Post';
import { useLoaderData, Link } from 'react-router-dom';

function Projects (props){

    const projects = useLoaderData()

    return (
        <div className='allprojects'><Link to={"/"} className='homebutton'>Home</Link>
                {projects.map((project) => <Post key={project.id} post={project}/>)}
                
        </div>
    )
}

export default Projects;