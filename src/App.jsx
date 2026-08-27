import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Pages/HomePage";
import Urology from "./Components/Products/Urology";
import ENT from "./Components/Products/ENT";
import Blogs from "./Pages/Blogs";
import MachinePage from "./Pages/MachinePage";
import ContactPage from "./Pages/ContactPage";
import SmartXide from "./Pages/SmartXide";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/urology" element={<Urology />} />
          <Route path="/ent" element={<ENT />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/machine" element={<MachinePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/smartxide" element={<SmartXide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
