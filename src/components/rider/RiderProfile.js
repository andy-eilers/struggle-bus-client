import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getRiderById } from "./RiderManager.js"

export const RiderProfile = () => {
    const [riderProfile, setRiderProfile] = useState({})
    const history = useHistory()
    const { riderId } = useParams()

    useEffect(() => {
        getRiderById(riderId).then(data => setRiderProfile(data))
    }, [riderId])

    return (
        <>
            <button className="button is-success" onClick={() => history.push({ pathname: `/riders/${riderProfile.id}/update` })
            }>
                Update Rider Profile
            </button>
            <div>
                {
                        <section key={`riderProfile--${riderProfile.id}`} className="rider">
                            <div className="riderProfile__username">User Name: {riderProfile.user?.username}</div>
                            <div className="riderProfile__firstName">First Name: {riderProfile.user?.first_name}</div>
                            <div className="riderProfile__lastName">Last Name: {riderProfile.user?.last_name}</div>
                            <div className="riderProfile__email">Email: {riderProfile.user?.email}</div>
                            <div className="riderProfile__bio">Bio: {riderProfile.bio}</div>
                        </section>
                }
            </div>
        </>
    )
}