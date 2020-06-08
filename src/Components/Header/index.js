import React, { useState } from 'react'
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

export default () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Navbar expand="md" color="dark" dark>
            <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
            <Collapse isOpen={isOpen} navbar>
            <Nav navbar className="m-auto">
                <NavItem>
                    <NavLink href="/book/add">Adicionar Livros</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/book">Listar Livros</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
    )
}