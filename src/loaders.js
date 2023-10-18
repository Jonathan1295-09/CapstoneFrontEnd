import url from "./url"

//Index loader
export const indexLoader = async () => {
    const response = await fetch(url,
       {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
       } )
    const projects = await response.json()
    return projects
}

//Show loader
export const showLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(url+"project/"+ id, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    })
    const project = await response.json()
    return project
}