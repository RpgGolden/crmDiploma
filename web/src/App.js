import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authorization from "./pages/Authorization/Authorization";
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
import EditPatient from "./components/EditPatient/EditPatient";
import { useState } from "react";
import MakeAppointment from "./components/MakeAppointment/MakeAppointment";

function App() {
  // const [selctClient, setSelectClient] = useState("");

  // const [tableData, setTableData] = useState([]);
  // const [clientData, setClientData] = useState({});

  // useEffect(() => {
  //   GetAllUsers(accessToken).then((response) => {
  //     console.log(response.data);
  //     setTableData(response.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   setClientData([...tableData].find((item) => item.id === selctClient));
  // }, [selctClient]);

  return (
    // <DataContext.Provider
    //   value={{
    //     userData,
    //     setUserData,
    //   }}
    // >
      <BrowserRouter>
        <main className="App">
          <Routes>
            <Route path="Authorization" element={<Authorization />}></Route>
            <Route path="Registrar/*" element={<Registrar />}>
              <Route
                path="*"
                element={
                  <TableRegistrar/>
                }
              ></Route>
              <Route
                path="PatientRegistr"
                element={
                  <PatientRegistr/>
                }
              ></Route>
              <Route
                path="OutpatientCard"
                element={
                  <OutpatientCard/>
                }
              ></Route>
              <Route
                path="EditPatient"
                element={
                  <EditPatient/>
                }
              ></Route>
              <Route
                path="MakeAppointment"
                element={
                  <MakeAppointment/>
                }
              ></Route>
            </Route>
            <Route path="/" element={<AuthorizationClient />}></Route>
            <Route path="/RegisterClient" element={<RegisterClient />}></Route>
            <Route path="Client/*" element={<Client />}>
              <Route path="*" element={<HomeClientPage />}></Route>
              <Route
                path="ViewMyAppointment"
                element={<ViewMyAppointment />}
              ></Route>
              <Route
                path="MakeAppointment"
                element={<MakeAppointment />}
              ></Route>
              <Route path="AccounClient" element={<AccounClient />}></Route>
              <Route path="EditPatient" element={<EditPatient />}></Route>
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    // </DataContext.Provider>
  );
}

export default App;
