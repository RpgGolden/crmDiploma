import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authorization from "./pages/Authorization/Authorization";
import HomePage from "./pages/HomePage/HomePage";
import TableRegistrar from "./components/TableRegistrar/TableRegistrar";
import OutpatientCard from "./components/OutpatientCard/OutpatientCard";
import PatientRegistr from "./components/PatientRegistr/PatientRegistr";
import Registrar from "./pages/Registrar/Registrar";
import Client from "./pages/Client/Client";
import RegisterClient from "./components/RegisterClient/RegisterClient";
import AuthorizationClient from "./components/AuthorizationClient/AuthorizationClient";
import HomeClientPage from "./components/HomeClientPage/HomeClientPage";
import ViewMyAppointment from "./components/ViewMyAppointment/ViewMyAppointment";
import AccounClient from "./components/AccounClient/AccounClient";
import MakeAppointment from "./components/MakeAppointment/MakeAppointment";

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Routes>
          <Route path="/" element={<Authorization />}></Route>
          <Route path="Registrar/*" element={<Registrar />}>
            <Route path="*" element={<TableRegistrar />}></Route>
            <Route path="PatientRegistr" element={<PatientRegistr />}></Route>
            <Route path="OutpatientCard" element={<OutpatientCard />}></Route>
          </Route>
          <Route path="/RegisterClient" element={<RegisterClient/>}></Route>
          <Route path="/AuthorizationClient" element={<AuthorizationClient/>}></Route>
          <Route path="Client/*" element={<Client />}>
            <Route path="*" element={<HomeClientPage />}></Route>
            <Route path="ViewMyAppointment" element={<ViewMyAppointment />}></Route>
            <Route path="MakeAppointment" element={<MakeAppointment />}></Route>
            <Route path="AccounClient" element={<AccounClient />}></Route>
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
