const nameValidation = (name) => name !== "";
const breedValidation = (breed) => breed !== "";

const validation = (user) =>
  nameValidation(user.name) && breedValidation(user.breed);

export default validation;
