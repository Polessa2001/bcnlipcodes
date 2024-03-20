"use client"
import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './CodeGenerator.css';

const CodeGenerator = () => {
  const [availableCodes, setAvailableCodes] = useState([]);
  const [randomUniqueCode, setRandomUniqueCode] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/checkdb');
        const dataobject = await response.json();
        const data = dataobject[0]
        console.log(data)
        if (data && data.uniqueCodes) {
          setAvailableCodes(data.uniqueCodes);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const getRandomUniqueCode = () => {
    console.log(availableCodes)
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

  return (
    <div className="codeGenerator">
      <h1>{randomUniqueCode}</h1>
      <Button onClick={getRandomUniqueCode} label={"¡GENERAR!"} />
    </div>
  );
};

export default CodeGenerator;
