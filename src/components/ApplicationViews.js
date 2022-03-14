import React from "react"
import { Route } from "react-router-dom"
import { BusList } from "./bus/BusList.js"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "slategray"
        }}>
            <Route exact path="/busses">
                <BusList />
            </Route>
        </main>
    </>
}