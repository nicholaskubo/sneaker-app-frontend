import React from 'react'

export default function Bio(props) {
    return (
        <div>
            {/* {console.log(props)} */}
            {props.user_shoes.user.bio}
        </div>
    )
}
