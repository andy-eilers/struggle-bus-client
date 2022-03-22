export const getComments = () => {
    return fetch("http://localhost:8000/comments", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("sb_token")}`
        }
    })
        .then(response => response.json())
}

export const getCommentById = (id) => {
    return fetch(`http://localhost:8000/comments/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("sb_token")}`
        }
    })
        .then(res => res.json())
}

export const createComment = (comment) => {
    return fetch("http://localhost:8000/comments", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("sb_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
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

export const deleteComment = (id) => {
    return fetch(`http://localhost:8000/comments/${id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("sb_token")}`,
        },
    })
        .then(getComments)
  }

  export const updateComment = (comment, id) => {
    return fetch(`http://localhost:8000/comments/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("sb_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    })
        .then(getComments)
}