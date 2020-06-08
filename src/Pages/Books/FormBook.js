import React, { useState, useEffect } from 'react'
import axios from '../../Services/Axios'
import swal from 'sweetalert'
import { useParams } from 'react-router-dom'

export default () => {

    const { id } = useParams()

    useEffect(() => {
        axios.get(`books/${id}`)
             .then(data => {
                setBook(data.data)
             })
    }, [])

    function handleChangeInput(event){
        const {name, value} = event.target

        setBook({
            ...book,
            [name]:value
        })
    }

    function handleSubmitForm(event){
        event.preventDefault()

        if(id){
            axios.put(`books/${book.id}`, book)
                 .then(data => {
                    swal("Livro atualizado com sucesso.")
                 })
        }else{
            axios.post('books', book)
                 .then(data => {
                    swal("Livro cadastrado com sucesso.")
                 })
        }
    }

    const [book, setBook] = useState({
        title: '',
        author: '',
        genre: '',
        publishing: ''
    })

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-10 col-8 m-auto">
                        <h1>Cadastrar Livros</h1> <hr />

                        <form className="form" onSubmit={handleSubmitForm}>
                            <div className="form-group">
                                <label htmlFor="title">Título</label>
                                <input type="text" className="form-control" value={book.title} required name="title" id="title" onChange={handleChangeInput} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="author">Autor</label>
                                <input type="text" className="form-control" value={book.author} required name="author" id="author" onChange={handleChangeInput} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="genre">Gênero</label>
                                <input type="text" className="form-control" value={book.genre} required name="genre" id="genre" onChange={handleChangeInput} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="publishing">Editora</label>
                                <input type="text" className="form-control" value={book.publishing} required name="publishing" id="publishing" onChange={handleChangeInput} />
                            </div>

                            <div className="form-group text-center">
                                <button type="submit" className="btn btn-success btn-block" >Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}