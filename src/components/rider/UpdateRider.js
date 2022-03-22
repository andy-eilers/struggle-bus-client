import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getRiderById, updateRider } from "./RiderManager.js"

export const UpdateRider = () => {
    const history = useHistory()
    const { riderId } = useParams()

    const [currentRiderProfile, setCurrentRiderProfile] = useState({
        username:"",
        firstName:"",
        lastName:"",
        email:"",
        bio:""
    })

    useEffect(() => {
        getRiderById(riderId).then(riderData => setCurrentRiderProfile({
            username: riderData.user.username,
            firstName: riderData.user.first_name,
            lastName: riderData.user.last_name,
            email: riderData.user.email,
            bio: riderData.bio
        }))
    }, [riderId])

    const changeUpdatedRider = (domEvent) => {
        domEvent.preventDefault()
        const copy = { ...currentRiderProfile }
        let key = domEvent.target.name
        copy[key] = domEvent.target.value
        setCurrentRiderProfile(copy)
    }

    return (
        <form className="updateForm">
            <h2 className="updateForm__title">Edit Your Rider Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="username">User Name: </label>
                    <input type="text" name="username" required autoFocus className="form-control"
                    value={currentRiderProfile.username}
                    onChange={changeUpdatedRider} 
                    />   
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" required autoFocus className="form-control"
                    value={currentRiderProfile.firstName}
                    onChange={changeUpdatedRider} 
                    />   
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" required autoFocus className="form-control"
                    value={currentRiderProfile.lastName}
                    onChange={changeUpdatedRider} 
                    />   
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" required autoFocus className="form-control"
                    value={currentRiderProfile.email}
                    onChange={changeUpdatedRider} 
                    />   
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="bio">Bio: </label>
                    <input type="text" name="bio" required autoFocus className="form-control"
                    value={currentRiderProfile.bio}
                    onChange={changeUpdatedRider} 
                    />   
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const rider = {
                        username: currentRiderProfile.username,
                        first_name: currentRiderProfile.firstName,
                        last_name: currentRiderProfile.lastName,
                        email: currentRiderProfile.email,
                        bio: currentRiderProfile.bio
                    }

                    updateRider(rider, riderId)
                        .then(() => history.push(`/riders/${riderId}`))
                }}
                className="btn btn-primary">Save Rider</button>
            <button type="cancel" onClick={() => {
                history.push("/posts")
            }}>Cancel</button>        
        </form>
    )
}