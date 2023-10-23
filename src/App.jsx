import Countdown from "./components/Countdown"
import styled from "styled-components";
import Mensaje from "./components/Mensaje";

const App = () => {
  return (
    <Container>
      <Countdown />
      <Mensaje/>
    </Container>
  )
}

export default App

const Container = styled.div`
  background-image: url('https://res.cloudinary.com/dnrcmjyu1/image/upload/v1698037600/Invitame%20ya/Invitaci%C3%B3n_baby_shower_ilustrada_azul_lma8v0.png');
  
  /* Configura la propiedad background-size para controlar cómo se ajusta la imagen de fondo */
  background-size: cover; /* Puede ser "cover", "contain" u otros valores */
  
  /* Configura la posición de la imagen de fondo */
  background-position: center center; /* Puedes ajustar la posición según tus necesidades */
  
  /* Añade otras propiedades de fondo si lo necesitas */
  background-repeat: no-repeat; /* Evita la repetición de la imagen */
  
  /* Establece un alto y ancho para el div para que la imagen de fondo sea visible */
  height: 100vh;
`