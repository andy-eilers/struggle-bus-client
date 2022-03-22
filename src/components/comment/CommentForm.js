import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { createComment, getPostById } from "./CommentManager.js"

export const CommentForm = ({ id }) => {
    const history = useHistory()
    console.log(id)
    const [currentComment, setCurrentComment] = useState({
        rider: 0,       
        body: "",
        date: "",
    })

    const changeCommentState = (domEvent) => {
        domEvent.preventDefault()
        const copy = { ...currentComment }
        let key = domEvent.target.name
        copy[key] = domEvent.target.value
        setCurrentComment(copy)
    }

    return(
        <form className="postForm">
            <h1 className="commentForm__title">Help a Struggler Out</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="body">Give Us Your Thoughts: </label>
                    <input type="text" name="body" required autoFocus className="form-control"
                        value={currentComment.body}
                        onChange={changeCommentState}
                    />    
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <input type="text" name="date" required autoFocus className="form-control"
                        value={currentComment.date}
                        onChange={changeCommentState}
                    />    
                </div>
            </fieldset> 
            <button type="submit"
            onClick={evt => {
                evt.preventDefault()
                const comment = {
                    post: id,
                    rider: currentComment.rider,
                    body: currentComment.body,
                    date: currentComment.date
                }

                createComment(comment)
                .then(() => history.push("/posts"))
            }}
            className="btn btn-primary">Submit Comment</button>     
        </form>
    )
}