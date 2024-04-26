import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authorization from "./pages/Authorization/Authorization";
import HomePage from "./pages/HomePage/HomePage";
import TableRegistrar from "./components/TableRegistrar/TableRegistrar";
import OutpatientCard from "./components/OutpatientCard/OutpatientCard";
import PatientRegistr from "./components/PatientRegistr/PatientRegistr";
import Registrar from "./pages/Registrar/Registrar";
import Client from "./pages/Client/Client";
import EditPatient from "./components/EditPatient/EditPatient";
import { useState } from "react";
import MakeAppointment from "./components/MakeAppointment/MakeAppointment";

function App() {
  const [selctClient, setSelectClient] = useState("");

  return (
    <BrowserRouter>
      <main className="App">
        <Routes>
          <Route path="/" element={<Authorization />}></Route>
          <Route path="Registrar/*" element={<Registrar />}>
            <Route
              path="*"
              element={
                <TableRegistrar
                  selctClient={selctClient}
                  setSelectClient={setSelectClient}
                />
              }
            ></Route>
            <Route
              path="PatientRegistr"
              element={
                <PatientRegistr
                  selctClient={selctClient}
                  setSelectClient={setSelectClient}
                />
              }
            ></Route>
            <Route
              path="OutpatientCard"
              element={
                <OutpatientCard
                  selctClient={selctClient}
                  setSelectClient={setSelectClient}
                />
              }
            ></Route>
            <Route
              path="EditPatient"
              element={
                <EditPatient
                  selctClient={selctClient}
                  setSelectClient={setSelectClient}
                />
              }
            ></Route>
            <Route
              path="MakeAppointment"
              element={
                <MakeAppointment
                  selctClient={selctClient}
                  setSelectClient={setSelectClient}
                />
              }
            ></Route>
          </Route>
          <Route path="Client/*" element={<Client />}>
            <Route path="*" element={<TableRegistrar />}></Route>
            {/* <Route path="PatientRegistr" element={<PatientRegistr />}></Route> */}
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
