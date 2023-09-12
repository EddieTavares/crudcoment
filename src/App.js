import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./css/estilos.css"

import Header from "./componentes/Header";
import Nav from "./componentes/Nav";
import Aside from "./componentes/Aside";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Comentarios from "./paginas/comentarios";
import Footer from "./componentes/Footer";

function App() {
    return (
        <BrowserRouter>
            <div id="container">
              <Header />
              <Nav />
              <Aside />

              <Routes>
                  <Route exact path="/" element={<Home/>} />
                  <Route exact path="/sobre" element={<Sobre/>} />
                  <Route exact path="/comentarios" element={<Comentarios/>} />
              </Routes>
              
              <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;