import React from "react";
import { useContext } from "react";
import { TaskContext } from "../utils/context/TaskContext";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import trash from "../assets/icons/trash-solid.svg"
import '../assets/styles/home.css'

export default function Home() {
  const { tasks, handleTaskStatusChange, removeTask } = useContext(TaskContext);
  return (
    <Container>
      <Row>
        <h1>Liste de tâche</h1>
      </Row>
      <Row className="align-items-end">
        <Col xs={3}>
          <Button variant="primary" className="mb-3"></Button>
        </Col>
        <Col xs={5}>
          <Form.Group className="mb-3">
            <Form.Label>Priorité</Form.Label>
            <Form.Select name="priority">
              <option value="all">Toutes</option>
              <option value="Basse">Basse</option>
              <option value="Moyenne">Moyenne</option>
              <option value="Elevée">Elevée</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

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
            <td>
              <Badge
                bg={
                  tasks.priority === "Elevée"
                    ? "danger"
                    : tasks.priority === "Moyenne"
                    ? "warning"
                    : "success"
                }
              >
                {tasks.priority}
              </Badge>
            </td>
            <td>
              <Form.Check type="checkbox" id={`status`} onChange={(e) =>
                        handleTaskStatusChange(tasks.name, e.target.checked)
                      }/>
            </td>
            <td>
              <img onClick={() => removeTask(tasks.name)} className="trash-icon" src={trash} alt="Icone d'une poubelle rouge" />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
