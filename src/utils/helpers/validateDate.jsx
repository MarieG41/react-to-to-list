export const validateDate = (dateString) => {
    if (!dateString) return false;
  
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dateString.match(regex)) return false;
  
    const [day, month, year] = dateString
      .split("/")
      .map((num) => parseInt(num, 10));
    const date = new Date(year, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  
    return date >= today;
  };

  export default validateDate