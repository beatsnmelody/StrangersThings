import React, { useEffect, useState } from 'react';

const messageFunction = async (event) => {
    event.preventDefault()
    const res = fetch('https://20a4d1385484.ngrok.io/api/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            message: {}
              
    })
});
    const data = await res.json();
    console.log("data", data)
}

export default deletePost