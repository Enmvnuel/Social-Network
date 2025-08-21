import { Routes, Route } from "react-router-dom";
import { SignedIn, SignIn } from "@clerk/clerk-react";

import Home from "./Pages/Home.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import ProtectedRoute from "./Pages/Other/ProtectedRoute.jsx";
import SignInPage from "./Pages/LandingPage/SignInPage.jsx";
import SignUpPage from "./Pages/LandingPage/SignUpPage.jsx";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route path="/login" element={<SignInPage />} />
                <Route path="/register" element={<SignUpPage />} />
            </Routes>
        </>
    );
}

export default App;
