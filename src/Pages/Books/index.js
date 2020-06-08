import React, { useState, useEffect } from 'react'
import axios from '../../Services/Axios'
import { FiTrash, FiPenTool } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

export default () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get("/books")
             .then(data => {
                 setBooks(data.data)
             })
    }, [])

    function handleRemoveBook(id){
        axios.delete(`/books/${id}`)
             .then(data => {
                 const newBooks = books.filter(book => book.id !== id)
                 setBooks(newBooks)
                 swal("Registro excluído com sucesso.")
             })
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-10 m-auto">
                        <h1>Cadastro de livros</h1><hr />

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Autor</th>
                                    <th>Editora</th>
                                    <th>Gênero</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    books.map(book => (
                                        <tr key={book.id}>
                                            <td>{book.title}</td>
                                            <td>{book.author}</td>
                                            <td>{book.publishing}</td>
                                            <td>{book.genre}</td>
                                            <td>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => handleRemoveBook(book.id)}
                                                >
                                                    <FiTrash />
                                                </button>
                                                <Link 
                                                    className="btn btn-warning btn-sm"
                                                    to={`/book/${book.id}/edit`}
                                                >
                                                    <FiPenTool />
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}