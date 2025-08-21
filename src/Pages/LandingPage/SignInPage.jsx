import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <SignIn
                    // Esto redirige a los usuarios después de iniciar sesión
                    afterSignInUrl="/dashboard"
                    // Esto redirige a los usuarios después de registrarse
                    afterSignUpUrl="/dashboard"
                    signUpUrl="/register"
                />
            </div>
        </>
    );
}
