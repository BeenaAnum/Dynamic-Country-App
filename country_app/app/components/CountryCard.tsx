import React from "react";
interface CountryCardProps {
  name: string;
  population: number;
  capital: string;
}

const CountryCard = ({ name, population, capital }: CountryCardProps) => {
  return (
    <div>
      <h1>Country Details</h1>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Population:</strong> {population}</p>
      <p><strong>Capital:</strong> {capital}</p>
    </div>
  );
};

export default CountryCard;




