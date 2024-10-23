import CountryData from '../components/CountryData';

export default function Country() {
  // const countries = ['canada', 'france', 'brazil', 'japan', 'nigeria','australia','uk','sa','pakistan','india'];

  return (
    <div  className="container"> 
      <h1 className="flex justify-center items-center text-center text-2xl md:text-4xl font-bold text-black m-2">Here is Country List</h1>

      <h1 className="flex justify-center items-center font-bold md:text-4xl"> <CountryData/></h1>
      
    </div>
  );
}