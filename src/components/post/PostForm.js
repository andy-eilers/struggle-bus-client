import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { createPost, getBusses, getStruggles } from "./PostManager.js"

export const PostForm = () => {
    const history = useHistory()
    const [busses, setBus] = useState([])
    const [struggles, setStruggles] = useState([])
    const [selectedStruggles, setSelectedStruggles] = useState([])

    const [currentPost, setCurrentPost] = useState({
        rider: "",
        title: "",
        bus: 0,
        description: "",
        date: "",
        struggles: []
    })
    
    useEffect(() => {
        getBusses().then(busses => setBus(busses))
    }, [])

    useEffect(() => {
        getStruggles().then(struggles => setStruggles(struggles))
    }, [])

    const changePostState = (domEvent) => {
        domEvent.preventDefault()
        const copy = { ...currentPost }
        if (domEvent.target.name === "struggles") {
            if (domEvent.target.checked === true){
                const copystruggles = [ ...selectedStruggles ]
                copystruggles.push(parseInt(domEvent.target.value))
                setSelectedStruggles(copystruggles)
            }else if (domEvent.target.checked === false){
                const copystruggles = [ ...selectedStruggles ]
                const struggleIndex = copystruggles. indexOf(parseInt(domEvent.target.value))
                copystruggles.splice(struggleIndex, 1)
                setSelectedStruggles(copystruggles)
            }
            }
        else {
            let key = domEvent.target.name
            copy[key] = domEvent.target.value
            setCurrentPost(copy)
        }
    }

    return(
        <form className="postForm">
            <h1 className="postForm__title">What's Your Struggle</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentPost.title}
                        onChange={changePostState}
                    />
                </div>    
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Bus">Bus Size: </label>
                    <select name="bus" required autoFocus className="form-control"
                        value={currentPost.bus}
                        onChange={changePostState}>
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
                    <label htmlFor="description">Tell Us About It: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentPost.description}
                        onChange={changePostState}
                        placeholder="Just let it all out"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date (0000-00-00): </label>
                    <input Type="text" name="date" required autoFocus className="form-control"
                        value={currentPost.date}
                        onChange={changePostState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="struggle">Struggles: </label>
                    <select name="struggle" required autoFocus className="form-control"
                        value={currentPost.struggle}
                        onChange={changePostState}>
                        <option value="0">Select Your Struggles</option>
                        {
                            struggles.map(
                                (struggle) => {
                                return <option onChange={changePostState} name="struggles" key={`struggle--${struggle.id}`} value={struggle.id}>{struggle.label}</option>                                    
                                
                                })
                        }
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const post = {
                        rider: currentPost.rider,
                        title: currentPost.title,
                        bus: parseInt(currentPost.bus),
                        description: currentPost.description,
                        date: currentPost.date,
                        struggles: currentPost.struggles,
                    }

                    createPost(post)
                        .then(() => history.push("/posts"))
                }}
                className="btn btn-dataprimary">Hop On The Bus</button>    
        </form>
    )
}