// import Project from '../components/Navbar';
import { Form } from 'react-router-dom';

function Create (props){
    return<>
        <div>
            <h2>Project Planner</h2>
                <Form method='Post' action='/create'>
                    <input type='text' name='Project Name' placeholder='Project Name'/>
                    <input type='date' name='Start Date' placeholder='Start Date'/>
                    <input type='date' name='End Date' placeholder='End Date'/>
                    <input type='text' name='Notes' placeholder='Notes'/>
                    <input type='text' name='Supplies' placeholder='Supplies'/>
                    <input type='text' name='Image' placeholder='Project Name'/>
                    <button>Create</button>
                </Form>
        </div>
        
    </>
}

export default Create;