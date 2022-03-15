export const getPosts = () => {
    return fetch("http://localhost:8000/posts", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("sb_token")}`
        }
    })
        .then(response => response.json())
}

export const getPostById = (id) => {
    return fetch(`http://localhost:8000/posts/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("sb_token")}`
        }
    })
        .then(res => res.json())
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
        .then(response => response.json())
}

export const getBusses = () => {
    return fetch("http://localhost:8000/busses", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("sb_token")}`
        }
    })
        .then(response => response.json())
}

export const getStruggles = () => {
    return fetch("http://localhost:8000/struggles", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("sb_token")}`
        }
    })
        .then(response => response.json())
}

export const deletePost = (id) => {
    return fetch(`http://localhost:8000/posts/${id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("sb_token")}`,
        },
    })
        .then(getPosts)
  }

  export const updatePost = (post, id) => {
    return fetch(`http://localhost:8000/posts/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("sb_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
        .then(getPosts)
}