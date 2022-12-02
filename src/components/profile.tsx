import React from 'react'

type ProfileProps = {
    profile: {
    firstName: string,
    lastName: string,
    age: number,
    }
}

const Profile: React.FunctionComponent<ProfileProps> = ({ profile }): JSX.Element => {
    return (
        <>
          <p>Profile</p>
          <div>Welcome, {profile.firstName}</div> 
        </>
    )
}

export default Profile;