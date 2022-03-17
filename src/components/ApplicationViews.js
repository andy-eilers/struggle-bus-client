import React from "react"
import { Route } from "react-router-dom"
import { BusList } from "./bus/BusList.js"
import { PostList } from "./post/PostList.js"
import { PostForm } from "./post/PostForm.js"
import { UpdatePost } from "./post/UpdatePost.js"
import { RiderProfile } from "./rider/RiderProfile.js"
import { UpdateRider } from "./rider/UpdateRider.js"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgray"
        }}>
            <Route exact path="/busses">
                <BusList />
            </Route>

            <Route exact path="/posts">
                <h1>Bus Stop</h1>
                <PostList />
            </Route>

            <Route exact path="/posts/new">
                <PostForm />
            </Route>

            <Route exact path="/posts/:postId(\d+)/update">
                <UpdatePost />
            </Route>

            <Route exact path="/riders/:riderId(\d+)">
                <RiderProfile />
            </Route>

            <Route exact path="/riders/:riderId(\d+)/update">
                <UpdateRider />
            </Route>
        </main>
    </>
}