import React, { useEffect, useState } from "react"
import { useParams, useHistory, Link } from "react-router-dom"
import { getPostById, deletePost } from "./PostManager.js"
import { CommentForm } from "../comment/CommentForm.js"

export const PostDetails = () => {
    const [currentPost, setCurrentPost] = useState({})
    const { postId } = useParams()
    const history = useHistory()

    useEffect(() => {
        getPostById(postId).then(data => setCurrentPost(data))
    }, [postId])
    
    return (
        <>                
            <button className="button is-success" onClick={() => history.push("/posts")}>
                Back To The Stop
            </button>
            <div>
                {
                    <section key={postId} className="currentPost_id">
                            <div className="currentPost__rider">Who's Struggling? <Link to={`/riders/${currentPost.rider?.id}`}>{currentPost.rider?.user?.username}</Link></div>
                            <div className="currentPost__title">Hop On: {currentPost.title}</div>                        
                            <div className="currentPost__bus">Bus Size: {currentPost.bus?.label}</div>                            
                            <div className="currentPost__description">Here's The Struggle: {currentPost.description}</div>
                            <div className="currentPost__date">Struggled On: {currentPost.date}</div>
                            <div className="currentPost__struggle">Struggles: {currentPost.struggle?.map(struggle => 
                            {return struggle.label}).join('\n')} 
                            </div>
                            <div className="button">
                                {currentPost.rider?.user?.id === parseInt(localStorage.getItem("userId"))
                                ?
                                <button onClick={() =>
                                    history.push({ pathname: `/posts/${currentPost.id}/update` })
                                }>Edit Struggle</button>
                                : ""}
                            </div>
                            <div className="button">
                                {currentPost.rider?.user?.id === parseInt(localStorage.getItem("userId"))
                                ?
                                <button onClick={() =>
                                    deletePost(currentPost.id).then(history.push(`/posts/${postId}`))
                                }>Delete</button>
                                : ""}
                            </div>
                            <div>{currentPost.comment_set?.map(
                                (comment) => {
                                    return <div key={`comment--${comment.id}`}>{comment.body} from <Link to={`/profile/${comment.id}`}>{currentPost.rider?.user?.username}</Link> on {comment.date}</div>
                                })}
                            </div>
                            <div>
                                <CommentForm id={currentPost.id}/>
                            </div>
                        </section>
                    }               
            </div>
        </>
    )
}