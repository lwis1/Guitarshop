import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./components/screens/HomeScreen";


function App() {
  return (
    <>
    <Header></Header>
    <main className='py-3'>
      <Container>
        <HomeScreen />
      </Container>
    </main>
    <Footer></Footer>
    </>
  );
}

export default App;
