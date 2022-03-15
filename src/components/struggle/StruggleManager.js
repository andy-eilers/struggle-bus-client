export const getStruggles = () => {
    return fetch("http://localhost:8000/struggles", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("sb_token")}`
        }
    })
    .then(response => response.json)
}