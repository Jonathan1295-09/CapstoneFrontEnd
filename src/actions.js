import url from "./url";
import { redirect } from "react-router-dom";

export const createAction = async({request}) => {
    const formData = await request.formData();
    const newProject = {
        project_name: formData.get("Project Name"),
        start_date: formData.get("Start Date"),
        end_date: formData.get("End Date"),
        notes: formData.get("Notes"),
        supplies: formData.get("Supplies"),
        image: formData.get("Image")
    }
    await fetch(url + "project/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newProject)
    })
    return redirect("/")
}

export const updateAction = async({request, params}) => {
    const id = params.id
    const formData = await request.formData();
    const updateProject = {
        project_name: formData.get("Project Name"),
        start_date: formData.get("Start Date"),
        end_date: formData.get("End Date"),
        notes: formData.get("Notes"),
        supplies: formData.get("Supplies"),
        image: formData.get("Image")
    }
    await fetch(url + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(updateProject)
    })
    return redirect(`/project/${id}`)
}

export const deleteAction = async({params}) => {
    const id = params.id
    await fetch(url + id, {
        method: "delete"
    })
    return redirect('/')
}