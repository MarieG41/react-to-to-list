import { useContext, useState } from "react";
import { TaskContext } from "../utils/context/TaskContext.jsx";
import { Form, Button, Container, Row } from "react-bootstrap";
import useFormValidation from "../utils/hooks/useFormValidation.jsx";
import { useNavigate } from "react-router-dom";

const FormInput = () => {
  const { addTask } = useContext(TaskContext);
  const [task, setTask] = useState({
    name: "",
    dueDate: "",
    priority: "Basse",
    status: "En cours",
  });

  const { errors, validateTask } = useFormValidation();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateTask(task)) return;

    addTask(task);
    navigate("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  return (
    <>
      <Container>
        <Row>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nom de la tâche</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={task.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date due</Form.Label>
              <Form.Control
                type="text"
                name="dueDate"
                value={task.dueDate}
                onChange={handleChange}
                placeholder="jj/mm/aaaa"
                isInvalid={!!errors.dueDate}
              />
              <Form.Control.Feedback type="invalid">
                {errors.dueDate}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Priorité</Form.Label>
              <Form.Select
                name="priority"
                value={task.priority}
                onChange={handleChange}
              >
                <option value="Basse">Basse</option>
                <option value="Moyenne">Moyenne</option>
                <option value="Elevée">Elevée</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
              Ajouter la tâche
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default FormInput;
