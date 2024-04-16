import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import TaskProvider from "../utils/context/TaskContext";
import useFormValidation from "../utils/hooks/useFormValidation"
import { useNavigate } from "react-router-dom";

export default function FormInputs() {
  const { tasksProvide } = useContext(TaskProvider)
  const [task, setTask] = useState({
    name: "",
    priority: "low",
    status: "En cours",
  })
  const { errors, validateTask } = useFormValidation

  const navigate = useNavigate()
  const handleSubmitForm = (event) => {
    event.preventDefault()
    if(!validateTask(task)) return
    tasksProvide(task)
    navigate("/")
  }
  const handleChangeForm = (event) => {
    const { name, value } = event.target
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }))    
  }
    return (
        <Container>
          <Form onSubmit={handleSubmitForm}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Nom de la tâche</Form.Label>
              <Form.Control 
                type="text" 
                name="name"
                value={task.name}
                onChange={handleChangeForm}
                isInvalid={!!errors.name}
                required />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control 
                type="date" 
                name="dueDate"
                onChange={handleChangeForm}
                required />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Select 
              name="priority"
              value={task.priority}
              onChange={handleChangeForm}
            >
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