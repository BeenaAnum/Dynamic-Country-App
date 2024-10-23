import React from "react"

// import CountryData from "../components/CountryData";
import CountryData from "../components/CountryCard";

interface CountryProps {
  name: string;
  population: number;
  capital: string;
}

export default function Country({ name, population, capital } : CountryProps) {
  const countries = ['australia','uk','sa','pakistan','india'];

  return (

    <div  className="container"> 
      <h1 className="flex justify-center items-center text-center text-2xl md:text-4xl font-bold text-black m-2">Here is Country List</h1>
      <h1 className="flex justify-center items-center font-bold md:text-4xl"> <CountryList/></h1>
  

    </div>
    );
}
//   return (
//     <div>
//       {countries.map((country, index) => (
//         <CountryList
//           key={index}
//           name={country.name}
//           population={country.population}
//           capital={country.capital}
//         />
//       ))}
//     </div>
//   );
// }

// export default function Home() {

//   const name = "Pakistan"
//   const population = 4210000
//   const capital =  "Islamabad"
  
//   return (
//    <CountryList name={name} population={ population} capital={capital} />
//   );
// }


// import CountryList from "../components/CountryList"; // Fix the typo in the import

// export default function Home() {
//   interface Country {
//     name: string;    // Change 'name' to 'string'
//     population: number;
//     capital: string;
//   }
  
//   const countries: Country[] = [
//     { name: "United States", population: 331002651, capital: "Washington, D.C." },
//     { name: "Canada", population: 37742154, capital: "Ottawa" },
//     { name: "United Kingdom", population: 67886011, capital: "London" },
//     { name: "Germany", population: 83783942, capital: "Berlin" },
//     { name: "Japan", population: 126476461, capital: "Tokyo" },
//     { name: "Australia", population: 25499884, capital: "Canberra" },
//     { name: "Brazil", population: 212559417, capital: "Brasília" },

//   ];
  
//   return (
//     <CountryList countries={countries} />  {/* Pass the countries array as a prop */}
//   );
// }
