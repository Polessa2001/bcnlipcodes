"use client"
import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './CodeGenerator.css';

const CodeGenerator = () => {
  const [randomUniqueCode, setRandomUniqueCode] = useState("");
  const getRandomUniqueCode = () => {
    async function fetchData() {
      try {
        const response = await fetch('/api/checkdb', {
          method: 'POST'
        });
        const data = await response.json();
        console.log(data)
        if (data._id) {
          setRandomUniqueCode(data._id);
        }
      } catch (error) {
        setRandomUniqueCode("Se acabaron los códigos");
        console.error('Error fetching data:', error);
      }
    }
    fetchData()
  }

  return (
    <div className="codeGenerator">
      <h1>{randomUniqueCode}</h1>
      <Button onClick={getRandomUniqueCode} label={"¡GENERAR!"} />
    </div>
  );
};

export default CodeGenerator;
