import React, { useEffect, useState } from 'react';

const Delete = (props) =>{
    const {
        userToken,
        post
    } = props

const deletePost = async (event) => {
    event.preventDefault()
    const res = fetch(`https://strangers-things.herokuapp.com/api/2209-FTB-CT-WEB-PT/posts/${post._id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`
        }
    });
}
return(
<button onClick={deletePost} className="button">Delete Post</button>
);
}

export default Delete;