import Fishtable from "./Fishtable";
import fishData from "./data";
import { useState } from "react";
import Panier from "./Panier";
import { Routes , Route } from "react-router";
const App = () => {
  const [data, setdata] = useState(fishData);



  return (
  
<Routes>

<Route  path="/panier"  element={<Fishtable   manar={data}  />} />
<Route path="/"  element={<Panier/>}  />



</Routes>

  );
};

export default App;
