"use client"
import React, { useState } from 'react';
import Button from '../Button/Button';
import './CodeGenerator.css';
const uniqueCodes = [
  "CODE001",
  "CODE002",
  "CODE003",
  "CODE004",
  "CODE005",
  "CODE006",
  "CODE007",
  "CODE008",
  "CODE009",
  "CODE010",
  "CODE011",
  "CODE012",
  "CODE013",
  "CODE014",
  "CODE015",
  "CODE016",
  "CODE017",
  "CODE018",
  "CODE019",
  "CODE020",
  "CODE021",
  "CODE022",
  "CODE023",
  "CODE024",
  "CODE025",
  "CODE026",
   // Add the rest of the unique codes below (it is going to be around 300)
];

const CodeGenerator = () => {
  const [availableCodes, setAvailableCodes] = useState(uniqueCodes);
  const [randomUniqueCode, setRandomUniqueCode] = useState("");

  const getRandomUniqueCode = () => {
    if (availableCodes.length === 0) {
      setRandomUniqueCode("No more unique codes available");
    } else {
      const randomIndex = Math.floor(Math.random() * availableCodes.length);
      const selectedCode = availableCodes[randomIndex];
      const updatedCodes = [...availableCodes.slice(0, randomIndex), ...availableCodes.slice(randomIndex + 1)];
      setAvailableCodes(updatedCodes);
      setRandomUniqueCode(selectedCode);
    }
  };

  console.log(availableCodes);
  console.log(randomUniqueCode);

  return (
    <div className="codeGenerator">
      <h1>{randomUniqueCode}</h1>
      <Button onClick={getRandomUniqueCode} label={"¡GENERAR!"} />
    </div>
  );
};

export default CodeGenerator;
