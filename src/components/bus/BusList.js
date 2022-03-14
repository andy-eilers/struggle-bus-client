import React, { useEffect, useState } from "react"
import { getBusses } from "./BusManager.js"

export const BusList = () => {
    const [ busses, setBusses ] = useState([])

    useEffect(() => {
        getBusses().then(data => setBusses(data))
    }, [])

    return (
        <article className="busses">
            <h1>Busses</h1>
            {
                busses.map(bus => {
                    return <section key={`bus--${bus.id}`} className="bus">
                    <h2>{bus.label}</h2>
                    </section>
                })
            }    
        </article>
    )
}