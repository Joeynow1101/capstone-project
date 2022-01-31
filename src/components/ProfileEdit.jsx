import GlobalStyles, {
  Button,
  ProfileInput,
  ProfileSelectInput,
} from "../GlobalStyles/GlobalStyles";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { saveToLocal, loadFromLocal } from "../lib/localStorage";
import { useNavigate } from "react-router-dom";
import AvatarChanger from "../components/AvatarChanger";

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
    setUsers([...users, user]);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <AvatarChanger></AvatarChanger>
        <FormInput
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          onChange={handleChange}
          value={user.name}
          required
        />

        <FormInput
          type="text"
          placeholder="Rasse"
          name="breed"
          id="breed"
          onChange={handleChange}
          value={user.breed}
          required
        />

        <FormInput
          type="number"
          placeholder="Gewicht in Kg"
          pattern="[0-9]"
          name="weight"
          onChange={handleChange}
          value={user.weight}
          required
        />
        <SelectBox>
          <select name="age" value={user.age} onChange={handleChange} required>
            <option hidden value="">
              Alter
            </option>
            <option value="Welpe">Welpe</option>
            <option value="Junghund">Junghund</option>
            <option value="Ausgewachsen">Ausgewachsen</option>
          </select>

          <select
            name="activity"
            value={user.activity}
            onChange={handleChange}
            required
          >
            <option hidden value="">
              Aktivität
            </option>
            <option value="ruhig">ruhig</option>
            <option value="normal">normal</option>
            <option value="aktiv">aktiv</option>
          </select>
        </SelectBox>
        <RadioBox>
          <label htmlFor="male"> Rüde</label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
            required
          />

          <label htmlFor="female"> Hündin</label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
            required
          />
        </RadioBox>
        <ButtonBox>
          <Button type="submit">Erstellen</Button>

          <Button
            type="reset"
            onClick={() => {
              setUser(initialUser);
            }}
          >
            Zurücksetzen
          </Button>
        </ButtonBox>
      </Form>
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  margin: auto;
  align-items: center;
  
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 2rem;
`;
const RadioBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  accent-color: var(--primary-two);
  label {
  }
  input {
  }
`;

const SelectBox = styled.div`
  display: flex;
  gap: 2rem;

  select {
    font-size: 1.2rem;
    text-align: center;
    border: none;
    width: 100%;
    height: 2rem;
    border-radius: 8px;
    background-color: var(--primary-one);
    color: var(--secondary-two);
    box-shadow: 6px 7px 23px -3px rgba(56, 43, 23, 0.2);
  }
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
  text-align: center;

  &::placeholder {
    font-family: "CaveatBrush";
    font-size: 1.7rem;
    text-align: center;
    color: var(--secondary-one);
  }
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
