import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
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
                            <div className="post__rider">Who's Struggling? <Link to={`/riders/${post.rider.id}`}>{post.rider.user?.username}</Link></div>
                            <div className="post__title">Hop On: <Link to={`/posts/${post.id}`}>{post.title}</Link></div>
                            <div className="post__struggle">Struggles: {post.struggles?.map(struggle => {
                                return struggle.label + (" ")
                            })}</div>
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
                                    deletePost(post.id).then(history.push("/comments/new"))
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