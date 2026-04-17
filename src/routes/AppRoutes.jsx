import { Route, Routes } from "react-router-dom";

import Layouts from "../components/Layouts";
import Home from "../pages/Home";
import Venues from "../pages/venue/Venues";
import GroupeService from "../pages/groupeservice/GroupeService";
import Package from "../pages/package/Package";
import RoomBlock from "../pages/RoomBlock/RoomBlock";
import Garelly from "../pages/Garelly/Garelly";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="rooms" element={<Venues />} />
        <Route path="restaurant" element={<GroupeService />} />
        <Route path="about" element={<Package />} />
        <Route path="blog" element={<RoomBlock />} />
        <Route path="contact" element={<Garelly />} />
      </Route>
    </Routes>
  );
}
