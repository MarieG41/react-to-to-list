import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function TaskModel() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Nom de la tâche</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Select aria-label="Default select example">
            <option>Priorité</option>
            <option value="low">Basse</option>
            <option value="moderate">Moyenne</option>
            <option value="high">Elevée</option>
          </Form.Select>
          <Button type="submit" variant="primary">Ajouter la tâche</Button>
        </Form>
      </>
    );
}