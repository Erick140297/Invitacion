import styled from "styled-components";

const Mensaje = () => {

  const redirectToLocation = () => {
    const urlExterna = "https://maps.app.goo.gl/1GmxSZrAtUyAvV77A";
    window.location.href = urlExterna;
  };

  return (
    <Container>
      <Salmo>{`"Los hijos son una herencia del Señor, los frutos del vientre son una recompensa. Salmo 127:3"`}</Salmo>
      <Inv>Acompáñanos a recibir la llegada de nuestro bello hijo</Inv>
      <Name>Misael Salvador</Name>
      <div>
        <H2>
          Domingo 19 de Noviembre de 2023 a las 2:00 p.m.
        </H2>
        <Button onClick={redirectToLocation}>
          Ver ubicación
        </Button>
      </div>
    </Container>
  )
}

export default Mensaje

const Salmo = styled.p`
 color: #eac807;
 text-align:center;
 margin-top:70px;
 font-size:25px;
 font-weight: bold;
`
const Inv = styled.p`
 color: #232373;
 text-align:center;
 margin-top:20px;
 font-size:25px;
 font-weight: bold;
`

const Button = styled.button`
  background: #232373;
  padding:5px;
  border-radius:5px;
  font-size:20px;
  margin-top: 10px;
  color: white;
  font-weight: bold;
`
const Container = styled.div`
  padding:20px;
  text-align:center;
`

const Name = styled.h2`
  color: #dd772f;
  font-size:25px;
  font-family: cursive;
`
const H2 = styled.h2`
  margin-top:20px;
`