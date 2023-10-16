import url from "./url"

//Index loader
export const indexLoader = async () => {
    const response = await fetch(url)
    const projects = await response.json()
    return projects
}

//Show loader
export const showLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(url + id)
    const project = await response.json()
    return project
}