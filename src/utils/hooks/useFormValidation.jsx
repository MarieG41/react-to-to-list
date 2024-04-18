// useFormValidation.js
import { useState } from "react";
import { validateDate } from "../helpers/validateDate.jsx";

const useFormValidation = () => {
  const [errors, setErrors] = useState({});

  const validateTask = (task) => {
    const newErrors = {};
    if (!task.name || task.name.length < 8) {
      newErrors.name =
        "Le nom de la tâche doit contenir au moins 8 caractères.";
    }
    if (!validateDate(task.dueDate)) {
      newErrors.dueDate =
        "La date due doit être au format dd/mm/YYYY et ne doit pas être antérieure à la date du jour.";
    }
    
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return { errors, validateTask };
};

export default useFormValidation;
