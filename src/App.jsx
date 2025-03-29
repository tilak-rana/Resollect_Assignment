import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Portfolio from "./components/Portfolio";
import Filters from "./components/Filters";
import NotificationSystem from "./components/Notifications";
import UploadDocument from "./components/UploadDocument";
import Notices from "./components/Notices";
import Auction from "./components/Auction";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/filters" element={<Filters />} />
          <Route path="/notifications" element={<NotificationSystem />} />
          <Route path="/upload" element={<UploadDocument />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/auction" element={<Auction />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
