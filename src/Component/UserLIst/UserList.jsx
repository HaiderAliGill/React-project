import React from 'react'
import { Link } from 'react-router-dom'

let userData = {

    user: [
        { id: 1, name: "ali" },
        { id: 2, name: "musa" },
        { id: 3, name: "bilal" }
    ]

}


function UserList() {
    return (
        <div className='nav-container'>
            <h1 className=''>
                USERLIST 
                <ul>
                    {
                        userData.user.map((user, index) => (
                            <li key={index}>
                                <Link to={`/user/${user.id}`}>{user.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </h1>
        </div>
    )
}

export default UserList