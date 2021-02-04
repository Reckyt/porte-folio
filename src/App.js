import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home, About, Project } from "./routes";
import { Header, Footer, Contact } from "./composant";

import ApiProjects from "./API/Projects";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className='App'>
        <Header open={open} setOpen={setOpen} />
        <Contact open={open} setOpen={setOpen} />
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Home ApiProjects={ApiProjects} open={open} setOpen={setOpen} />
            )}
          />
          <Route
            path='/about'
            render={() => <About open={open} setOpen={setOpen} />}
          />
          <Route path='/project/:id' render={() => <Project />} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
