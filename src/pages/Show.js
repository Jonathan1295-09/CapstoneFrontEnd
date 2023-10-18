import { Link, useLoaderData, Form } from "react-router-dom"


function Show (props){
    const post = useLoaderData()

    return (
        <div> <Link to={"/"} className="homebutton">Home</Link>
            <div className="projectlist">
                <h1>{post.project_name}</h1>
                <h2>{post.start_date}</h2>
                <h2>{post.end_date}</h2>
                <h2>{post.notes}</h2>
                <h2>{post.supplies}</h2>
                <img src={post.image}/>
            </div>
                <h2 className="updateheader">Update Project</h2>
                <Form method="post" action={`/update/${post.id}`} className="show">
                    <div className="Inputs">
                        <input type="text" name="Project Name" defaultValue={post.project_name}/>
                        <input type="text" name="Start Date" defaultValue={post.start_date}/>
                        <input type="text" name="End Date" defaultValue={post.end_date}/>
                        <input type="text" name="Notes" defaultValue={post.notes}/>
                        <input type="text" name="Supplies" defaultValue={post.supplies}/>
                        <input type="text" name="Image" defaultValue={post.image}/>
                    </div>
                        <button className="updatebutton">Update</button>
                </Form>
                    <div>
                        <Form method="post" action={`/delete/${post.id}`}>
                            <button className="deletebutton">Delete</button>
                        </Form>
                    </div>
                       
        </div>
    )
}

export default Show;