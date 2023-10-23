import { useCountdown } from "../../Hooks/useCountdown";
import styled from "styled-components";

const Countdown = () => {
  const targetDate = "November 19, 2023 14:00:00";
  const [days, hours, minutes, seconds, countDown] = useCountdown(targetDate);
  return (
    <div>
      {countDown >= 1000 ? (
        <Contador>
          <Element>
            <Num>{days}</Num>
            <Text>Días</Text>
          </Element>
          <Puntos>:</Puntos>
          <Element>
            <Num>{hours}</Num>
            <Text>Hrs.</Text>
          </Element>
          <Puntos>:</Puntos>
          <Element>
            <Num>{minutes}</Num>
            <Text>Min.</Text>
          </Element>
          <Puntos>:</Puntos>
          <Element>
            <Num>{seconds}</Num>
            <Text>Seg.</Text>
          </Element>
        </Contador>
      ) : (
        <End>
          <Mensaje>Felicidades </Mensaje>
          <Mensaje>La espera terminó</Mensaje>
        </End>
      )}
    </div>
  );
};

export default Countdown;

const Contador = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  color: #232373;
  padding-top:20px;
`;

const Element = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: cursive;
  font-weight: bold;
  align-content: center;
  width: 100px;
  margin:10px;

  @media (max-width: 550px) {
    width: 80px;

  }

  @media (max-width: 425px) {
    width: 70px;
    margin:0px;
  }
`;

const Num = styled.p`
  font-size: 50px;
  margin: 0;

  @media (max-width: 550px) {
    font-size: 35px;
  }

  @media (max-width: 425px) {
    font-size: 30px;
  }
`;

const Text = styled.p`
  font-size: 30px;
  margin: 0;

  @media (max-width: 550px) {
    font-size: 25px;
  }

  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

const Puntos = styled.p`
  font-size: 50px;
  margin: 0;

  @media (max-width: 550px) {
    font-size: 40px;
  }

  @media (max-width: 425px) {
    font-size: 30px;
  }
`;

const End = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top:15px;
`;

const Mensaje = styled.h2`
  margin: 0;
`;