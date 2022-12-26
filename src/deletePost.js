import React, { useEffect, useState } from 'react';

const Delete = (props) =>{
    const {
        userToken,
        setToken
    } = props

const deletePost = async (event) => {
    const [posts, setPosts] = useState('');
    event.preventDefault()
    const res = fetch(`${APIURL}posts/${posts._id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await res.json();
    console.log("data", data)
}
}

export default Delete