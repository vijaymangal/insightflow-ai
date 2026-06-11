import { AuthBranding } from "@/features/auth/auth-branding";
import { LoginForm } from "@/features/auth/login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      <AuthBranding />
      <div className="flex flex-1 items-center justify-center p-6 lg:p-12">
        <LoginForm />
      </div>
    </div>
  );
}
