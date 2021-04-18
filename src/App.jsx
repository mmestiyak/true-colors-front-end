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
import Footer from "./components/Footer";
import PrivateRoute from "./PrivateRoute";
import Stats from "./components/Stats";
const App = () => {
  return (
    <>
      <AuthProvider>
        <ServicesProvider>
          <Switch>
            <Route exact path="/">
              <HeroSection />
              <About />
              <Stats />

              <Services />
              <Testimonials />
            </Route>
            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Navbar />
              <Login />
            </Route>
          </Switch>

          <Footer />
        </ServicesProvider>
      </AuthProvider>
    </>
  );
};

export default App;
