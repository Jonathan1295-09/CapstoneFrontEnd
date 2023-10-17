import { Link, useLoaderData, Form } from "react-router-dom"


function Show (props){

    const project = useLoaderData()

    return (
        <div>
            <div className="project">
                <h1>{project.project_name}</h1>
                <h2>{project.start_date}</h2>
                <h2>{project.end_date}</h2>
                <h2>{project.notes}</h2>
                <h2>{project.supplies}</h2>
                <h2>{project.image}</h2>
            </div>
                <h2>Update Project</h2>
                <Form method="ost" action={`/update/${project.id}`} className="show">
                    <div className="Update">
                        <input type="text" name="Project Name" defaultValue={project.project_name}/>
                        <input type="text" name="Start Date" defaultValue={project.start_date}/>
                        <input type="text" name="End Date" defaultValue={project.end_date}/>
                        <input type="text" name="notes" defaultValue={project.notes}/>
                        <input type="text" name="Supplies" defaultValue={project.supplies}/>
                        <input type="text" name="Image" defaultValue={project.image}/>
                    </div>
                        <button>Update</button>
                </Form>
                    <div className="updatebutton">
                        <Form>
                            <button>Delete</button>
                        </Form>
                    </div>
                        <Link to={"/"}>Home</Link>
        </div>
    )
}

export default Show;