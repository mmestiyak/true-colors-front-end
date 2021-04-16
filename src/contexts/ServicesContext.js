import React, { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";
const ServicesContext = createContext();
export const useServices = () => useContext(ServicesContext);
export const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState();
  const [servicesUpdated, setServicesUpdated] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:8888/services");
        setServices(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [servicesUpdated]);

  const value = {
    services,
    setServicesUpdated,
  };
  return (
    <ServicesContext.Provider value={value}>
      {children}
    </ServicesContext.Provider>
  );
};
