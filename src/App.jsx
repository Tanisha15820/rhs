import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Pages/HomePage";
import Urology from "./Components/Products/Urology";
import SurgicalLaser from "./Components/Products/SurgicalLaser";
import ENT from "./Components/Products/ENT";
import Blogs from "./Pages/Blogs";
import MachinePage from "./Pages/MachinePage";
import ContactPage from "./Pages/ContactPage";
import SmartXide from "./Pages/SmartXide";
import SmartXideTouch from "./Pages/SmartXideTouch";
import Gastro from "./Components/Products/Gastro";
import GastroLaser from "./Components/Products/GastroLaser";
import LithoEvo from "./Pages/LithoEvo";
import Litho35Watt from "./Pages/Litho35Watt";
import Avicenna from "./Pages/Avicenna";
import Multimed from "./Pages/Multimed";
import Vibrolith from "./Pages/Vibrolith";
import VibrolithPlus from "./Pages/VibrolithPlus";
import VibrolithOrtho from "./Pages/VibrolithOrtho";
import Cystoscopy from "./Pages/Cystoscopy";
import Morcescope from "./Pages/Morcescope";
import CyberBlade from "./Pages/CyberBlade";
import RaykeenMorcellator from "./Pages/RaykeenMorcellator";
import ProductEnquiry from "./Pages/ProductEnquiry";
import ENTLaser from "./Components/Products/ENTLaser";
import Elmed from "./Components/Products/Elmed";
import RZ from "./Components/Products/RZ";
import Morcellator from "./Components/Products/Morcellator";
import Melody from "./Pages/Melody";
import Symphony from "./Pages/Symphony";
import Harmony from "./Pages/Harmony";
import DanflowWave from "./Pages/DanflowWave";
import DanflowCord from "./Pages/DanflowCord";
import BladderScanner from "./Pages/BladderScanner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Website Routes (with standard Layout / Navbar / Footer) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/urology" element={<Urology />} />
          <Route path="/urology-surgical-laser" element={<SurgicalLaser />} />
          <Route path="/ent" element={<ENT />} />
          <Route path="/ent-laser" element={<ENTLaser />} />
          <Route path="/elmed" element={<Elmed />} />
          <Route path="/rz" element={<RZ />} />
          <Route path="/morcellator" element={<Morcellator />} />

          <Route path="/gastro" element={<Gastro />} />
          <Route path="/gastro-laser" element={<GastroLaser />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/machine" element={<MachinePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product-enquiry" element={<ProductEnquiry />} />
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
          <Route path="/cystoscopy" element={<Cystoscopy />} />
          <Route path="/morcescope" element={<Morcescope />} />
          <Route path="/cyber-blade" element={<CyberBlade />} />
          <Route path="/bro-morcellatore-cyberblade" element={<CyberBlade />} />
          <Route path="/raykeen-morcellator" element={<RaykeenMorcellator />} />
          <Route path="/raykeen-morcellatore" element={<RaykeenMorcellator />} />
          <Route path="/melody" element={<Melody />} />
          <Route path="/symphony" element={<Symphony />} />
          <Route path="/harmony" element={<Harmony />} />
          <Route path="/danflow-wave" element={<DanflowWave />} />
          <Route path="/danflow-cord" element={<DanflowCord />} />
          <Route path="/bladder-scanner" element={<BladderScanner />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
