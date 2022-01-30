import React from "react";
import './App.css'
import Dash from "./components/dashboard/dash";

// import Nav from "./components/navbar/navbar";
import Card from "./components/card/card"
import Cards from "./components/cards/Cards";
import Page from "./components/pagination/pagination";
import Nav from './components/bootnav/nav'
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <Dash />
      <Cards />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
