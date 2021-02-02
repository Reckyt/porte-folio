import React from "react";

import { Home } from "./routes";
import { Header, Footer } from "./composant";

import ApiProjects from "./API/Projects";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <Home ApiProjects={ApiProjects} />
      <Footer />
    </div>
  );
}

export default App;
