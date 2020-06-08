import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Books from '../../Pages/Books'
import FormBook from '../../Pages/Books/FormBook'

export default () => {
    return (
        <BrowserRouter>
            <Route path="/" exact>

            </Route>

            <Route path="/book" exact>
                <Books />
            </Route>

            <Route path="/book/add" exact>
                <FormBook />
            </Route>

            <Route path="/book/:id/edit" exact>
                <FormBook />
            </Route>
        </BrowserRouter>
    )
}