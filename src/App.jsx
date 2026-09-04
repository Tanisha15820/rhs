import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Pages/HomePage";
import Urology from "./Components/Products/Urology";
import ENT from "./Components/Products/ENT";
import Blogs from "./Pages/Blogs";
import MachinePage from "./Pages/MachinePage";
import ContactPage from "./Pages/ContactPage";
import SmartXide from "./Pages/SmartXide";
import SmartXideTouch from "./Pages/SmartXideTouch";
import Gastro from "./Components/Products/Gastro";
import LithoEvo from "./Pages/LithoEvo";
import Litho35Watt from "./Pages/Litho35Watt";
import Avicenna from "./Pages/Avicenna";
import Multimed from "./Pages/Multimed";
import Vibrolith from "./Pages/Vibrolith";
import VibrolithPlus from "./Pages/VibrolithPlus";
import VibrolithOrtho from "./Pages/VibrolithOrtho";

// Admin Imports
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import ProtectedRoute from "./Components/Admin/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Website Routes (with standard Layout / Navbar / Footer) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/urology" element={<Urology />} />
          <Route path="/ent" element={<ENT />} />
          <Route path="/gastro" element={<Gastro />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/machine" element={<MachinePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/smartxide" element={<SmartXide />} />
          <Route path="/smartxide-touch" element={<SmartXideTouch />} />
          <Route path="/litho35watt" element={<Litho35Watt />} />
          <Route path="/lithoevo35watt" element={<LithoEvo />} />
          <Route path="/litho-evo" element={<LithoEvo />} />
          <Route path="/avicenna" element={<Avicenna />} />
          <Route path="/multimed" element={<Multimed />} />
          <Route path="/vibrolith" element={<Vibrolith />} />
          <Route path="/vibrolith-plus" element={<VibrolithPlus />} />
          <Route path="/vibrolith-ortho" element={<VibrolithOrtho />} />
        </Route>

        {/* Admin Public Route */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/admin"
            element={<Navigate to="/admin/dashboard" replace />}
          />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
