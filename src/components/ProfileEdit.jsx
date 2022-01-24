import GlobalStyles, {
  Button,
  ProfileInput,
  ProfileSelectInput,
} from "../GlobalStyles/GlobalStyles";
import styled from "styled-components";

import { useState, useEffect } from "react";
import { saveToLocal, loadFromLocal } from "../lib/localStorage";
import { useNavigate } from "react-router-dom";
import validation from "../lib/validation";

export default function ProfileEdit() {
  const initialUser = {
    name: "",
    breed: "",
    weight: "",
    age: "",
    activity: "",
  };
  const [user, setUser] = useState(initialUser);
  const localStorageUsers = loadFromLocal("_users");
  const [users, setUsers] = useState(localStorageUsers ?? []);
  const navigate = useNavigate();

  const removeItem = () => localStorage.removeItem("_users");

  useEffect(() => {
    saveToLocal("_users", users);
    if (users.length > 0) navigate("/profile");
  }, [users]);

  const handleChange = (event) => {
    let inputValue = event.target.value;
    setUser({
      ...user,
      [event.target.name]: inputValue,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    validation(user) && setUsers([...users, user]);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          onChange={handleChange}
          value={user.name}
        />

        <FormInput
          type="text"
          placeholder="Rasse"
          name="breed"
          id="breed"
          onChange={handleChange}
          value={user.breed}
        />

        <FormInput
          type="number"
          placeholder="Gewicht in Kg"
          pattern="[0-9]{1,2}"
          name="weight"
          onChange={handleChange}
          value={user.weight}
        />
        <select name="age" value={user.age} onChange={handleChange}>
          <option hidden>Alter</option>
          <option value="Welpe">Welpe</option>
          <option value="Junghund">Junghund</option>
          <option value="Ausgewachsen">Ausgewachsen</option>
        </select>

        <select name="activity" value={user.activity} onChange={handleChange}>
          <option hidden>Aktivität</option>
          <option value="ruhig">ruhig</option>
          <option value="normal">normal</option>
          <option value="aktiv">aktiv</option>
        </select>

        <label htmlFor="male"> Rüde</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
        />

        <label htmlFor="female"> Hündin</label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
        />

        <Button type="submit">Erstellen</Button>

        <Button
          type="reset"
          onClick={() => {
            setUser(initialUser);
          }}
        >
          Zurücksetzen
        </Button>
      </Form>
    </>
  );
}

const Form = styled.form`
  display: grid;
  justify-content: center;
  align-content: center;
  margin: auto;
  width: 20rem;
  border-radius: 10px;
  background-color: var(--secondary);

  grid-row-gap: 0.5rem;
  padding: 1rem;

  /* display: grid;
  justify-content: center;
  align-content: center;
  margin: auto;
  width: 20rem;
  border-radius: 10px;
  background-color: var(--secondary);

  grid-row-gap: 0.5rem;
  padding: 1rem; */
`;

const FormInput = styled.input`
  font-family: "CaveatBrush";
  width: 16rem;
  border: 0;
  border-bottom: 1px solid var(--secondary-two);
  outline: 0;
  font-size: 1.9rem;
  background: transparent;
  color: var(--secondary-one);
  margin: 0.5rem 0 1rem 0;

  &::placeholder {
    font-family: "CaveatBrush";
    font-size: 1.7rem;
    text-align: center;
    color: var(--secondary-one);
  }
`;

const SpanSelect = styled.select`
  width: 10rem;
  text-align: center;
  margin: auto;
`;

const RadioButton = styled.input`
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid darkgray;
  border-radius: 50%;
  outline: none;

  :checked {
    width: 20px;
    height: 20px;
    background-color: var(--primary-two);
  }
`;
