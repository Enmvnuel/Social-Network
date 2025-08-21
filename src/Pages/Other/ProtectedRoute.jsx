import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { isLoaded, isSignedIn } = useUser();
    const navigate = useNavigate();

    // Redirige al usuario si no está logueado después de que Clerk haya cargado
    useEffect(() => {
        if (isLoaded && !isSignedIn) {
            navigate("/login");
        }
    }, [isLoaded, isSignedIn, navigate]);

    // Muestra un mensaje de carga mientras se verifica el estado
    if (!isLoaded) {
        return <div>Cargando...</div>;
    }

    // Si el usuario está logueado, renderiza los componentes hijos
    if (isSignedIn) {
        return children || <Outlet />;
    }

    // Retorna null para evitar que se renderice algo antes de la redirección
    return null;
};

export default ProtectedRoute;
