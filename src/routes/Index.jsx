import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ShowBooks from '../features/books/ShowBooks'
import AddBook from '../features/books/AddBook'
import Navbar from '../layout/Navbar'
import Error from '../pages/Error'
import EditBook from '../features/books/EditBook'

const Index = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/show-books" element={<ShowBooks />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/edit-book" element={<EditBook />} />
            <Route path="*" element={<Error/>} />
        </Routes>
    </BrowserRouter>
  )
}
export default Index