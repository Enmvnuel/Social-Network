import { Routes, Route } from "react-router-dom";
import { SignedIn, SignIn } from "@clerk/clerk-react";

import Home from "./pages_temp/Home.jsx";
import Dashboard from "./pages_temp/Dashboard.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import SignInPage from "./pages_temp/SignInPage.jsx";
import SignUpPage from "./pages_temp/SignUpPage.jsx";
import Privacy from "./pages_temp/Privacy.jsx";
import Terms from "./pages_temp/Terms.jsx";

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
                <Route path="/legal/privacy" element={<Privacy />} />
                <Route path="/legal/terms" element={<Terms />} />
            </Routes>
        </>
    );
}

export default App;
