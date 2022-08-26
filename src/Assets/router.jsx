import { Route, Routes } from "react-router-dom";
import { Cycling } from "./pages/cycling";
import { Aquatic } from "./pages/aquatics";
import { Armoury } from "./pages/armoury";
import { Feature } from "./pages/feature";
import { Equestriane } from "./pages/equestrian";
import { Extreme} from "./pages/extreme";
import { Golf} from "./pages/golf";
import { Gymnast } from "./pages/gymnast";
import { Lake } from "./pages/lake";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Feature />} />
      <Route path="/armoury" element={<Armoury />} />
      <Route path="/aquatic" element={<Aquatic />} />
      <Route path="/cycle" element={<Cycling />} />
      <Route path="/equestrian" element={<Equestriane />} />
      <Route path="/extreme" element={<Extreme />} />
      <Route path="/golf" element={<Golf />} />
      <Route path="/gymnast" element={<Gymnast />} />
      <Route path="/lake" element={<Lake />} />
    </Routes>
  );
};
