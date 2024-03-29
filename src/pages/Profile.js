import React, {useState} from 'react'
import {Card, Button, Alert} from "react-bootstrap"
import { useAuth } from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'

export default function Profile() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    // Handle log out from current user
    async function handleLogout() {
        setError('')

        try{
            await logout()
            history.pushState('/login')
        }catch{
            setError('Failed to log out')
        }
    }


    return (
        <>
        <Card>
          <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt02">
          <Button variant="link" onClick={handleLogout}>Log Out</Button>
        </div>
        </>
    )
}
