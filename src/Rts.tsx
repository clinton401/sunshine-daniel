import {type FC} from "react";
import {  Routes, Route } from "react-router";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import Gifts from "./pages/gifts";
import Invitation from "./pages/invitation";
import Location from "./pages/location";
import Story from "./pages/story";
import NotFound from "./pages/not-found";
import {useLocation} from "react-router";
import { AnimatePresence } from "motion/react";

export const Rts: FC = () => {
    const location = useLocation();
    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/invitation" element={<Invitation />} />
          <Route path="/gift" element={<Gifts />} />
          <Route path="/story" element={<Story />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/location" element={<Location />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </AnimatePresence>
    );
}