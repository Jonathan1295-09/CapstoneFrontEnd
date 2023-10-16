import Post from '../components/Post';
import { useRouteLoaderData, Form } from 'react-router-dom';

function Index (props){
    const projects = useRouteLoaderData()
    return<>
        <div>
            <h2>Project Planner</h2>
                <Form method='Post' action='/create'>
                    <input type='text' name='Project name' placeholder='Project Name'/>
                    <input type='date' name='Start Date' placeholder='Start Date'/>
                    <input type='date' name='End Date' placeholder='End Date'/>
                    <input type='text' name='Notes' placeholder='Notes'/>
                    <input type='text' name='Supplies' placeholder='Supplies'/>
                    <input type='Image' name='Project name' placeholder='Project Name'/>
                </Form>
        </div>
        {project.map((projects) => <Post key={projects.id} post={project}/>)}
    </>
}

export default Index;