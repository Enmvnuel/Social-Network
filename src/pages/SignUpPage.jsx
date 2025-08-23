// SignUpPage.jsx
import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
    return (
        <div className="relative flex justify-center items-center min-h-screen">
            <div
                className="absolute inset-0 bg-[url('../assets/img/bg.png')] bg-cover blur-2xl -z-10"
                aria-hidden="true"
            />

            <SignUp
                afterSignUpUrl="/dashboard"
                afterSignInUrl="/dashboard"
                signInUrl="/login"
            />
        </div>
    );
}
