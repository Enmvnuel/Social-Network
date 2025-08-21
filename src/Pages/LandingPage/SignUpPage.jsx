// SignUpPage.jsx
import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <SignUp
                // Redirige al dashboard después de registrarse
                afterSignUpUrl="/dashboard"
                // Redirige a tu página de inicio de sesión si el usuario ya tiene cuenta
                afterSignInUrl="/dashboard"
                signInUrl="/login"
            />
        </div>
    );
}
