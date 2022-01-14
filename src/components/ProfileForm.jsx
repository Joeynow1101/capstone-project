import GlobalStyles, {
  Button,
  ProfileInput,
  ProfileSelectInput,
} from "../GlobalStyles/GlobalStyles";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const FormValues = {
  name: String,
  breed: String,
  weight: String,
  age: String,
  activity: String,
  gender: String,
};

export default function ProfileForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <ProfileInput>
          <input type="text" placeholder="Name" {...register("Name")} />
        </ProfileInput>
        <ProfileInput>
          <input type="text" placeholder="Rasse" {...register("breed")} />
        </ProfileInput>
        <ProfileInput>
          <input type="text" placeholder="z.B 15 Kg" {...register("weight")} />
        </ProfileInput>
        <ProfileSelectInput>
          <select {...register("age")}>
            <option hidden>Alter</option>
            <option value="Welpe">Welpe</option>
            <option value="Junghund">Junghund</option>
            <option value="Ausgewachsen">Ausgewachsen</option>
          </select>
        </ProfileSelectInput>
        <ProfileSelectInput>
          <select {...register("activity")}>
            <option hidden>Aktivität</option>
            <option value="ruhig">ruhig</option>
            <option value="normal">normal</option>
            <option value="aktiv">aktiv</option>
          </select>
        </ProfileSelectInput>
        <ProfileRadioInput>
          <RadioButton
            type="radio"
            name="gender"
            value="male"
            checked
            {...register("gender")}
          />
          <label htmlFor="male">Rüde</label>
          <RadioButton
            type="radio"
            name="gender"
            value="female"
            checked
            {...register("gender")}
          />
          <label htmlFor="female">Hündin</label>
        </ProfileRadioInput>
        <Button type="submit">Profil erstellen</Button>
      </Container>
    </>
  );
}

const Container = styled.form`
  display: grid;
  justify-content: center;
  align-content: center;
  margin: auto;
  width: 20rem;
  border-radius: 10px;
  background-color: var(--secondary);
  grid-template-rows: repeat(6, 1fr);
  grid-row-gap: 1.5rem;
  padding: 1rem;
`;

const ProfileRadioInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
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
