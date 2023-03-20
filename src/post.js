import React, { useEffect, useState } from 'react';
import Delete from './deletePost.js';

const Homepage = (props) => {
    const {
        userToken,
        setToken
    } = props
    const [posts, setPosts] = useState([]);
    const [userTitle, setTitle] = useState('');
    const [userDescription, setDescription] = useState('');
    const [userPrice, setPrice] = useState('');
    useEffect(() => {
        const fetchPosts = async () => {
            const rsp = await fetch("https://strangers-things.herokuapp.com/api/2209-FTB-CT-WEB-PT/posts", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                },
            });
            const data = await rsp.json();
            console.log("data", data);
            setPosts(data.data.posts);
        }
        fetchPosts();
    }, [])
    const createPost = async (event) => {
        event.preventDefault()
        const rsp = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-CT-WEB-PT/posts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            },
            body: JSON.stringify({
                post: {
                    title: userTitle,
                    description: userDescription,
                    price: userPrice
                }
            })
        })
        const data = await rsp.json()
        console.log("data", data)
    }
    return (<div><div id='container'>
        <span>What Do You Want To Sell?</span>
        <form onSubmit={createPost}>
            <label htmlFor='title'>Post Title:</label>
            <input type='text' name='title' value={userTitle} onChange={(event) => setTitle(event.target.value)} />
            <label htmlFor='description'>Post Description:</label>
            <input type='text' name='description' value={userDescription} onChange={(event) => setDescription(event.target.value)} />
            <label htmlFor='price'>Post Price:</label>
            <input type='text' name='price' value={userPrice} onChange={(event) => setPrice(event.target.value)} />
            <button type='submit'>Sell Your Lovely Item!</button>
        </form>
    </div>
        {
            posts.map((post, index) => {
                return <div key={index}>
                    <h3>{post.title}</h3>
                    <div class="description">{post.description}</div>
                    { post.isAuthor ? <Delete post={post}
                    userToken={userToken}/> : null}
                </div>
            })
        }
    </div>
    )
    
}

export default Homepage