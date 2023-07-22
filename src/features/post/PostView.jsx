import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './PostSlice'

const PostView = () => {
    const {isLoading, posts, error} = useSelector((state) => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [posts])
    
    return (
        <div>
            PostView
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PostView