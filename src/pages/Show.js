import { Link, useLoaderData, Form } from "react-router-dom"


function Show (props){
    const post = useLoaderData()

    return (
        <div>
            <div className="project">
                <h1>{post.project_name}</h1>
                <h2>{post.start_date}</h2>
                <h2>{post.end_date}</h2>
                <h2>{post.notes}</h2>
                <h2>{post.supplies}</h2>
                <h2>{post.image}</h2>
            </div>
                <h2>Update Project</h2>
                <Form method="post" action={`/update/${post.id}`} className="show">
                    <div className="Update">
                        <input type="text" name="Project Name" defaultValue={post.project_name}/>
                        <input type="text" name="Start Date" defaultValue={post.start_date}/>
                        <input type="text" name="End Date" defaultValue={post.end_date}/>
                        <input type="text" name="Notes" defaultValue={post.notes}/>
                        <input type="text" name="Supplies" defaultValue={post.supplies}/>
                        <input type="text" name="Image" defaultValue={post.image}/>
                    </div>
                        <button>Update</button>
                </Form>
                    <div className="deletebutton">
                        <Form method="post" action={`/delete/${post.id}`}>
                            <button>Delete</button>
                        </Form>
                    </div>
                        <Link to={"/"}>Home</Link>
        </div>
    )
}

export default Show;