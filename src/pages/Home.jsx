import React from "react";
import { useContext, useState, useEffect } from "react";
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
  const [showToDoOnly, setShowToDoOnly] = useState(false);
  const [currentTasks, setCurrentTasks] = useState([]);
  const [showByPriority, setShowByPriority] = useState(false);

  useEffect(() => {
    let filteredTasks = showToDoOnly
      ? tasks.filter((task) => task.status === "En cours")
      : tasks;

    filteredTasks =
      showByPriority && showByPriority !== "all"
        ? filteredTasks.filter((task) => task.priority === showByPriority)
        : filteredTasks;

    setCurrentTasks(filteredTasks);
  }, [showToDoOnly, showByPriority, tasks]);

  const handleShowToDoOnly = () => {
    setShowToDoOnly(!showToDoOnly);
  };

  const handleShowByPriority = (e) => {
    setShowByPriority(e.target.value);
  };
  return (
    <Container>
      <Row>
        <h1>Liste de tâche</h1>
      </Row>
      <Row className="align-items-end">
        <Col xs={3}>
          <Button
            variant="primary"
            className="mb-3"
            onClick={handleShowToDoOnly}
          >
            {showToDoOnly
              ? "Voir toutes les tâches"
              : "Voir seulement les tâches à faire"}
          </Button>
        </Col>
        <Col xs={5}>
          <Form.Group className="mb-3">
            <Form.Label>Priorité</Form.Label>
            <Form.Select name="priority" onChange={handleShowByPriority}>
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
              <th>Nom</th>
              <th>A faire avant le</th>
              <th>Priorité</th>
              <th>Terminé ?</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentTasks.length > 0 &&
              currentTasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.name}</td>
                  <td>{task.dueDate}</td>
                  <td>
                    <Badge
                      bg={
                        task.priority === "Elevée"
                          ? "danger"
                          : task.priority === "Moyenne"
                          ? "warning"
                          : "success"
                      }
                    >
                      {task.priority}
                    </Badge>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={task.status === "Terminé"}
                      onChange={(e) =>
                        handleTaskStatusChange(task.name, e.target.checked)
                      }
                    />
                  </td>
                  <td>
                    <img onClick={() => removeTask(task.name)} className="trash-icon" src={trash} alt="Icone d'une poubelle rouge" />
                  </td>
                </tr>
              ))}
          </tbody>
      </Table>
    </Container>
  );
}
