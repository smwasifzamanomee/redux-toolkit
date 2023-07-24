import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteBook } from './BookSlice'

const ShowBooks = () => {
    const books = useSelector(state => state.books.books)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteBook(id))
    }
   
    return (
        <div className='flex justify-center items-center mt-20'>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left">
                    <thead class="text-xs uppercase bg-green-700">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Author
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => {
                            const { id, title, author } = book
                            return (
                                <tr key={index} class="bg-green-500 border-b">
                                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                        {index + 1}
                                    </th>
                                    <td class="px-6 py-4">
                                        {title}
                                    </td>
                                    <td class="px-6 py-4">
                                        {author}
                                    </td>
                                    <td class="px-6 py-4 flex gap-6">
                                        <Link to="/edit-book" state={{id, title, author}} class="font-medium text-blue-600 hover:underline">Edit</Link>
                                        <button onClick={() => handleDelete(book.id)} class="font-medium text-red-600 hover:underline">Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShowBooks