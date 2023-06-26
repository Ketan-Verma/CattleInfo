import React from "react";
import NavBar from "../components/NavBar";
import CattleCard from "../components/CattleCard";
import { useState } from "react";
const Home = () => {
  const [selectedSerialNumber, setSelectedSerialNumber] = useState([]);
  const handleSerialNumberSelection = (serialNumber) => {
    setSelectedSerialNumber(serialNumber);
    // console.log(selectedSerialNumber);
    // serialNumber={selectedSerialNumber}
  };

  return (
    <>
      <NavBar onSelectSerialNumber={handleSerialNumberSelection} />
      <CattleCard data={selectedSerialNumber} />
    </>
  );
};

export default Home;
