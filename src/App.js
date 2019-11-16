import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/WelcomePage.js";
import { Route } from 'react-router-dom';


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/CharacterList" component={CharacterList} />
      <Route path="/Search" component={SearchForm} />
    </main>
  );
}