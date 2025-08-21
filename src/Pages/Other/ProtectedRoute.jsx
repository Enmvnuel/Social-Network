import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { isLoaded, isSignedIn } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoaded && !isSignedIn) {
            navigate("/login");
        }
    }, [isLoaded, isSignedIn, navigate]);

    if (!isLoaded) {
        return <div>Cargando...</div>;
    }

    if (isSignedIn) {
        return children || <Outlet />;
    }

    return null;
};

export default ProtectedRoute;
