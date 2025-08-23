import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
    return (
        <>
            <div className="relative flex justify-center items-center min-h-screen">
                {/* Fondo desenfocado */}
                <div
                    className="absolute inset-0 bg-[url('../assets/img/bg.png')] bg-cover blur-2xl -z-10 "
                    aria-hidden="true"
                />

                {/* Contenido sobre fondo */}
                <SignIn
                    afterSignInUrl="/dashboard"
                    afterSignUpUrl="/dashboard"
                    signUpUrl="/register"
                />
            </div>
        </>
    );
}
