import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import '../assets/styles/header.css'

export default function Header() {
    return (
      <>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">To Do List</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <NavLink className={"nav-link"} to="/">Accueil</NavLink>
              <NavLink className={"nav-link"} to="/nouvelle-tache">Nouvelle tâche</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    );
}