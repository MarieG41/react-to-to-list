import React from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export default function Home() {
    return (
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nom de la tâche</th>
              <th>Date</th>
              <th>Priorité</th>
              <th>Statut</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Form.Check 
                  type="checkbox"
                  id={`status`}
                />
              </td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
}