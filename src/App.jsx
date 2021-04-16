import React from "react";
import "./styles/app.scss";
import { Route, Switch } from "react-router";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard/Dashboard";
import { ServicesProvider } from "./contexts/ServicesContext";
const App = () => {
  return (
    <>
      <AuthProvider>
        <ServicesProvider>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/home">
              <Navbar />
              <HeroSection />
              <About />
              <Services />
              <Testimonials />
            </Route>
            <Route path="/login">
              <Navbar />
              <Login />
            </Route>
          </Switch>
        </ServicesProvider>
      </AuthProvider>
    </>
  );
};

export default App;
