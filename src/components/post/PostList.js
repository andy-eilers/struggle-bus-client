import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getPosts, deletePost, createPost } from "./PostManager.js"

export const PostList = (props) => {
    const [posts, setPosts ] = useState([])
    const history = useHistory()

    useEffect(() => {
        getPosts().then(data => setPosts(data))
    }, [])

    return (
        <>
        <section>
            <h1>{post.bus.name}</h1>

        </section>
        </>
    )
}