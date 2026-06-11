import { AuthBranding } from "@/features/auth/auth-branding";
import { RegisterForm } from "@/features/auth/register-form";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen">
      <AuthBranding />
      <div className="flex flex-1 items-center justify-center p-6 lg:p-12">
        <RegisterForm />
      </div>
    </div>
  );
}
