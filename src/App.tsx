import { HashRouter, Routes, Route } from "react-router-dom";
import { Overview } from "./pages/Overview";
import { WeekDetail } from "./pages/WeekDetail";
import { Week1 } from "./pages/Week1";
import { Week3 } from "./pages/Week3";
import { Week4 } from "./pages/Week4";
import { Week5 } from "./pages/Week5";
import { Week6 } from "./pages/Week6";
import { Week7 } from "./pages/Week7";
import { Week8 } from "./pages/Week8";
import { Week9 } from "./pages/Week9";
import { Week10 } from "./pages/Week10";
import { Week11 } from "./pages/Week11";
import { Week12 } from "./pages/Week12";
import { Week13 } from "./pages/Week13";
import { Week14 } from "./pages/Week14";
import { Week15 } from "./pages/Week15";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/week/1" element={<Week1 />} />
        <Route path="/week/2" element={<WeekDetail />} />
        <Route path="/week/3" element={<Week3 />} />
        <Route path="/week/4" element={<Week4 />} />
        <Route path="/week/5" element={<Week5 />} />
        <Route path="/week/6" element={<Week6 />} />
        <Route path="/week/7" element={<Week7 />} />
        <Route path="/week/8" element={<Week8 />} />
        <Route path="/week/9" element={<Week9 />} />
        <Route path="/week/10" element={<Week10 />} />
        <Route path="/week/11" element={<Week11 />} />
        <Route path="/week/12" element={<Week12 />} />
        <Route path="/week/13" element={<Week13 />} />
        <Route path="/week/14" element={<Week14 />} />
        <Route path="/week/15" element={<Week15 />} />
      </Routes>
    </HashRouter>
  );
}