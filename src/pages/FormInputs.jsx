import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import TaskProvider from "../utils/context/TaskContext";

export default function FormInputs() {
  const { tasks } = useContext(TaskProvider)
    return (
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Nom de la tâche</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>
            <Form.Select aria-label="Default select example">
              <option>Priorité</option>
              <option value="low">Basse</option>
              <option value="moderate">Moyenne</option>
              <option value="high">Elevée</option>
            </Form.Select>
            <Button type="submit" variant="primary">
              Ajouter la tâche
            </Button>
          </Form>
        </Container>
    );
}