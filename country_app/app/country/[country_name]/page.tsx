import Link from "next/link";
import React from "react";

const countryData: any= {
 
  pakistan:{ name: "Pakistan", population: 24100000, capital: "Islamabad" },
  canada: { name: 'Canada', population: '38 million', capital: 'Ottawa' },
  france: { name: 'France', population: '67 million', capital: 'Paris' },
  brazil: { name: 'Brazil', population: '212 million', capital: 'Brasilia' },
  india:{ name: "India", population: 1380004385, capital: "New Delhi" },
  japan: { name: 'Japan', population: '126 million', capital: 'Tokyo' },
  nigeria: { name: 'Nigeria', population: '206 million', capital: 'Abuja' },
 australia : { name: "Australia", population: 25499884, capital: "Canberra" },
 uk: { name: "United Kingdom", population: 67886011, capital: "London" },
 sa:{ name: "South Africa", population: 59308690, capital: "Pretoria" },
}


export default function CountryDetails({ params }:{params :{country_name:string}}) {
  const { country_name } = params;

  const country = countryData[country_name.toLowerCase()];

  if (!country) {
    // Handle if country not found
    return (
    <div><h1 className="flex justify-center items-center font-bold md:text-4xl m-2"><b>Country not found</b></h1>
     <div className="flex justify-center items-center">
      <button className="bg-black border-yellow-300 border-2 p-1 m-5 rounded-md ">
      <Link className="hover:text-red-500 font-bold md:text-4xl" href="/country">Back to Country List</Link></button>
     </div>
    </div>
  );
  }

  return (
    <div className="contianer md:text-4xl">
      <h1 className="flex justify-center items-center font-bold">Country: {country.name}</h1>
      <p className="flex justify-center items-center font-bold">Population: {country.population}</p>
      <p className="flex justify-center items-center font-bold">Capital: {country.capital}</p>
     <div className="flex justify-center items-center md:text-4xl font-bold">
      <button className="bg-black border-yellow-300 font-bold md:text-4xl border-2 p-1 m-2 rounded-md">
      <Link className="hover:text-red-500 font-bold md:text-4xl" href="/country">Back to Country List</Link></button>
     </div>
    </div>
  );
}