export const getBusses = () => {
    return fetch("http://localhost:8000/busses", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("sb_token")}`
        }
    })
        .then(response => response.json())
}