import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <SignIn
                    afterSignInUrl="/dashboard"
                    afterSignUpUrl="/dashboard"
                    signUpUrl="/register"
                />
            </div>
        </>
    );
}
