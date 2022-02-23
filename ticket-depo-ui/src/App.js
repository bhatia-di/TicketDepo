import React from "react";
import Header from "./components/Header";
import About from "./routes/about/About";
import TicketViewerPage from "./routes/tickets/TicketViewerPage";
import Home from "./routes/home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import TicketCreatorPage from "./routes/profile/TicketCreatorPage";


export default function App() {
  return <React.Fragment>
  <Header/>
  <Routes>
          <Route path="/about" element={<Home />} />
          <Route path="/dashboard" element={<TicketViewerPage />} />
          <Route path="/you" element={<TicketCreatorPage />} />
          <Route path="/" element={<Home />} />

      </Routes>

  </React.Fragment>;
}