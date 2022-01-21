import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SecuredPage from "./pages/SecuredPage";
import keycloak from "./Keycloak";
import {ReactKeycloakProvider} from "@react-keycloak/web";
import PrivateRoute from "./helpers/PrivateRoute";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div>
            <ReactKeycloakProvider authClient={keycloak}>
                <Navbar />
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route path="/secured" element={
                            <PrivateRoute>
                                <SecuredPage />
                            </PrivateRoute>
                        } />
                    </Routes>
                </BrowserRouter>
            </ReactKeycloakProvider>
        </div>
    );
};

export default App;
