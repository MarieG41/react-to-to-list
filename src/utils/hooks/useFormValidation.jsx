import { useState } from "react";

const useFormValidation = () => {
    const [ errors, setErrors ] = useState({})
    const validateTask = (task) => {
        const newErrors = {}
        if(!task.name || task.name.length < 8) {
            newErrors.name = "Le nom de la tâche doit contenir au moins 8 caractères."
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }
    return { errors, validateTask }
}  

export default useFormValidation