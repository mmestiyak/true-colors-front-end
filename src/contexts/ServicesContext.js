import React, { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";
const ServicesContext = createContext();
export const useServices = () => useContext(ServicesContext);
export const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState();
  const [setServicesUpdated] = useState(true);
  const [selectedServiceId, setSelectedServiceId] = useState();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:8888/services");
        setServices(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [services]);

  const value = {
    services,
    selectedServiceId,
    setSelectedServiceId,
    setServicesUpdated,
  };
  return (
    <ServicesContext.Provider value={value}>
      {children}
    </ServicesContext.Provider>
  );
};
