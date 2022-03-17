export const getRiders = () => {
    return fetch("http://localhost:8000/riders", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("sb_token")}`
        }
    })
    .then(response => response.json())
}

export const getRiderById = (id) => {
    return fetch(`http://localhost:8000/riders/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("sb_token")}`
        }
    })
    .then(response => response.json())
}

export const deleteRider = (rider, id) => {
    return fetch(`http://localhost:8000/riders/${id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("sb_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(rider)
    })
        .then(getRiders)
  }

  export const updateRider = (rider, id) => {
      return fetch(`http://localhost:8000/riders/${id}`, {
          method: "PUT",
          headers: {
              "Authorization": `Token ${localStorage.getItem("sb_token")}`,
              "Content-Type": "application/json"
          },
          body: JSON.stringify(rider)
      })
          .then(getRiders)
  }