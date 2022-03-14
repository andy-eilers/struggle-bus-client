export const getPosts = () => {
    return fetch("http://localhost:8000/posts", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("sb-token")}`
        }
    })
        .then(response => response.json())
}

export const createPost = (post) => {
    return fetch("http://localhost:8000/posts", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("sb_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
        .then(response => response.json)
}

export const getBusses = () => {
    return fetch("http://localhost:8000/busses", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("sb_token")}`
        }
    })
        .then(response => response.json())
}