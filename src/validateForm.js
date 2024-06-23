export default function validateForm(formData) {
    let errors = {};
  
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.age) errors.age = 'Age is required';
    else if (isNaN(formData.age) || formData.age <= 0) errors.age = 'Age must be a number greater than 0';
    if (formData.attendingWithGuest && !formData.guestName) {
      errors.guestName = 'Guest Name is required if attending with a guest';
    }
  
    return errors;
  }
  