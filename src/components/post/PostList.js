import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getPosts, deletePost } from "./PostManager.js"

export const PostList = () => {
    const [posts, setPosts] = useState([])
    const history = useHistory()

    useEffect(() => {
        getPosts().then(data => setPosts(data))
    }, [])

    return (
        <>                
            <button className="button is-success" onClick={() => history.push("/posts/new")}>
                What's Your Struggle?
            </button>
            <div>
                {
                    posts.map(post => {
                        return <section key={`post--${post.id}`} className="post">
                            <div className="post__rider">Who's Struggling? {post.rider.user?.username}</div>
                            <div className="post__title">Hop On: {post.title}</div>                        
                            <div className="post__bus">Bus Size: {post.bus?.label}</div>                            
                            <div className="post__description">Here's The Struggle: {post.description}</div>
                            <div className="post__date">Struggled On: {post.date}</div>
                            <div className="post__struggle">Struggles: {post.struggle?.map(struggle => 
                            {return struggle.label}).join('\n')} 
                            </div>
                            <div className="button">
                                {post.rider.user?.id === parseInt(localStorage.getItem("userId"))
                                ?
                                <button onClick={() =>
                                    history.push({ pathname: `/posts/${post.id}/update` })
                                }>Edit Struggle</button>
                                : ""}
                            </div>
                            <div className="button">
                                {post.rider.user?.id === parseInt(localStorage.getItem("userId"))
                                ?
                                <button onClick={() =>
                                    deletePost(post.id)
                                }>Delete</button>
                                : ""}
                            </div>
                        </section>
                    })
                }                
            </div>
        </>
    )
}