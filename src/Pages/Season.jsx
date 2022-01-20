import Navbar from "../components/Navbar";
import Header from "../components/Header";
import styled from "styled-components";

function Season() {
  return (
    <>
      <Header titleText={"Läufigkeit"} />
      <Container>
        <h2>Beginn der Läufigkeit</h2>
        <input type="date" />
        <p>
          Die Läufigkeit bezeichnet die fruchtbare Phase (Brunstphase) des
          Sexualzyklus der Hündinnen. Sie wird in 4 Phasen unterteilt.
        </p>
        <h2> Proöstrus (Vorbrunst)</h2>
        <p>
          Die erste Phase der Läufigkeit dauert im Schnitt 9 Tage, kann aber
          zwischen 3 und 17 Tage variieren. Die Vulva deiner Hündin schwillt an
          und blutet – bei manchen relativ stark, bei anderen nur schwach. Zu
          diesem Zeitpunkt ist deine Hundedame{" "}
          <strong>noch nicht fruchtbar</strong> , dennoch fühlen sich Rüden von
          ihr stark angezogen. Deinen Liebling interessiert das in dieser Phase
          herzlich wenig. Es kann vorkommen, dass sie interessante Rüden in die
          Flucht schlägt.
        </p>
        <h2> Östrus (Brunst)</h2>
        <p>
          Genau so wie der Proöstrus dauert der Östrus in etwa 9 Tage, kann aber
          zwischen 3 und 21 Tage schwanken. Die Vulva ist nicht mehr ganz so
          stark geschwollen und der Ausfluss wird etwas wässriger.{" "}
          <strong> Deine Hündin ist nun fruchtbar</strong>, da während des
          Östrus der Eisprung stattfindet, und lässt den Deckakt zu, wenn sie
          auf einen interessierten Rüden trifft.
          <p>
            <br />
            <strong>Achtung:</strong> Wenn deine Hündin dünnflüssiges und
            helleres Blut ausscheidet, ist das ein klares Anzeichen für die
            Deckfähigkeit deiner Hündin.
          </p>
        </p>
        <h2> Diöstrus (Nachbrunst)</h2>
        <p>
          Unabhängig davon, ob deine Hündin schwanger ist oder nicht, beginnt
          nun der Diöstrus und dauert in etwa <strong>63 Tage</strong> . Die
          Vulva ist nun nicht mehr geschwollen und der Ausfluss ist
          verschwunden. Falls eine Befruchtung der Eizellen stattgefunden hat,
          endet der Diöstrus mit der Geburt der Welpen.
        </p>
        <h2> Anöstrus (Ruhephase)</h2>
        <p>
          Die Zeit bis zur nächsten Läufigkeit bzw. bis zum Beginn des nächsten
          Proöstrus kann <strong>mehrer Wochen oder Monate</strong> andauern,
          durchschnittlich ca. 4 Monate, und wird als Anöstrus bezeichnet. In
          dieser Zyklusphase zeigt deine Hündin keine Anzeichen der Läufigkeit.
        </p>
      </Container>
      <Navbar />
    </>
  );
}

export default Season;

const Container = styled.div`
  font-family: "Raleway", sans-serif;
  display: grid;
  justify-content: center;
  grid-gap: 0.5rem;
  padding: 1.5rem;
  color: var(--secondary-one);

  input {
    font-family: "CaveatBrush";
  width: 12rem;
  border: 0;
  border-bottom: 1px solid var(--secondary-two);
  outline: 0;
  font-size: 1.9rem;
  background: transparent;
  color: var(--secondary-one);
  margin: auto;
  margin-top: 1rem;
  margin-bottom:1rem;
 

  &::placeholder {
    font-family: "CaveatBrush";
    font-size: 1.7rem;
    color: var(--secondary-one);
  }
  &::-webkit-calendar-picker-indicator {
    opacity: 0.6;
    width: 2rem;
  }
  }
  h2 {
    text-align: center;
  }
  p {
    line-height: 1.8rem;
    margin-bottom: 1.3rem;
    font-size: 1.1rem;
    font-weight: 300;
  }
`;
