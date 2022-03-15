import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getPostById, updatePost, getBusses, getStruggles } from "./PostManager.js"

export const UpdatePost = () => {
    const history = useHistory()
    const [busses, setBus] = useState([])
    const [struggles, setStruggles] = useState([])
    const { postId } = useParams()

    const [currentPost, setCurrentPost] = useState({
        rider: "",
        title: "",
        bus: 0,
        description: "",
        date: "",
        struggles: []
    })

    useEffect(() => {
        getPostById(postId).then(postData => setCurrentPost({
            rider: postData.rider,
            title: postData.title,
            bus: postData.bus,
            description: postData.description,
            date: postData.date,
            struggle: postData.struggle,
        }))
            .then(getBusses().then(data => setBus(data)))
            .then(getStruggles().then(data => setStruggles(data)))
    }, [postId])

    const changeUpdatedPost = (domEvent) => {
        domEvent.preventDefault()
        const copy = { ...currentPost }
        let key = domEvent.target.name
        copy[key] = domEvent.target.value
        setCurrentPost(copy)
    }

    return (
        <form className="updateForm">
            <h2 className="updateForm__title">Edit Your Struggle</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                    value={currentPost.title}
                    onChange={changeUpdatedPost} 
                    />   
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="bus">Bus Size: </label>
                    <select name="bus" required autoFocus className="form-control"
                        value={currentPost.bus}
                        onChange={changeUpdatedPost}>
                        <option value="0"> Select a Bus</option>
                        {
                            busses.map(bus => (
                                <option key={bus.id} value={bus.id}>
                                    {bus.label}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                    value={currentPost.description}
                    onChange={changeUpdatedPost} 
                    />   
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <input type="text" name="date" required autoFocus className="form-control"
                    value={currentPost.date}
                    onChange={changeUpdatedPost} 
                    />   
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="struggle">Struggle: </label>
                    <select name="struggle" required autoFocus className="form-control"
                        value={currentPost.struggle}
                        onChange={changeUpdatedPost}>
                        <option value="0">Select Your Struggles</option>
                        {
                            struggles.map(struggle => (
                                <option key={struggle.id} value={struggle.id}>
                                    {struggle.label}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const post = {
                        rider: currentPost.rider.id,
                        title: currentPost.title,
                        bus: currentPost.bus,
                        description: currentPost.description,
                        date: currentPost.date,
                        struggle: currentPost.struggle
                    }

                    updatePost(post, postId)
                        .then(() => history.push("/posts"))
                }}
                className="btn btn-primary">Save Struggle</button>
            <button type="cancel" onClick={() => {
                history.push("/posts")
            }}>Cancel</button>        
        </form>
    )
}