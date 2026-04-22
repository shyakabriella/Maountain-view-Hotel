import { Route, Routes } from "react-router-dom";

import Layouts from "../components/Layouts";
import Home from "../pages/Home";
import Venues from "../pages/venue/Venues";
import GroupeService from "../pages/groupeservice/GroupeService";
import Package from "../pages/package/Package";
import RoomBlock from "../pages/RoomBlock/RoomBlock";
import Garelly from "../pages/Garelly/Garelly";
import Pool from "../pages/pool/Pool";
import Career from "../pages/career/Career";
import Services from "../pages/services/Services";
import Spa from "../pages/spa/Spa";
import StunningCityMountainView from "../pages/stunning-city-mountain-view/StunningCityMountainView";
import Conference from "@/pages/conference/Conference";

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
        <Route path="pool" element={<Pool />} />
        <Route path="career" element={<Career />} />
        <Route path="services" element={<Services />} />
        <Route path="spa" element={<Spa />} />
        <Route path="conference" element={<Conference />} />
        <Route
          path="stunning-city-mountain-view"
          element={<StunningCityMountainView />}
        />
      </Route>
    </Routes>
  );
}
