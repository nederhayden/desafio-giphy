import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import './App.scss'

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
