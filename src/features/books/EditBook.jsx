import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { updateBook } from './BookSlice'
import { useNavigate } from 'react-router-dom'

const EditBook = () => {
    const location = useLocation()
    console.log(location)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [title, setTitle] = useState(location.state.title)
    const [author, setAuthor] = useState(location.state.author)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateBook({ title, author }))
        navigate('/show-books')
    }

    return (
        <div className='flex justify-center items-center mt-6 '>
            <form onSubmit={handleSubmit} className='border border-green-700 bg-green-700 p-10 rounded-lg'>
                <div className='flex gap-2 mb-2'>
                    <label htmlFor="title">Title : </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        id="title"
                        className='border border-blue-700 bg-white rounded-lg'
                    />
                </div>
                <div className='flex gap-2 mb-2'>
                    <label htmlFor="author">Author : </label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        id="author"
                        className='border border-blue-700 bg-white rounded-lg' />
                </div>
                <div className='flex justify-center items-center mt-4'>
                    <button className='bg-blue-600 rounded-lg p-2' type="submit">Update Book</button>
                </div>
            </form>
        </div>
    )
}

export default EditBook