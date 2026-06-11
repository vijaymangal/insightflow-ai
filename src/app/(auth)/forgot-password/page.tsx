import { AuthBranding } from "@/features/auth/auth-branding";
import { ForgotPasswordForm } from "@/features/auth/forgot-password-form";

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen">
      <AuthBranding />
      <div className="flex flex-1 items-center justify-center p-6 lg:p-12">
        <ForgotPasswordForm />
      </div>
    </div>
  );
}
