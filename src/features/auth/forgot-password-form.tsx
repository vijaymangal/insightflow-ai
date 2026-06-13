"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 400));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-sm">
        <CheckCircle2 className="h-8 w-8 text-muted-foreground" strokeWidth={1.25} />
        <h2 className="mt-4 text-xl font-semibold tracking-tight">Check your inbox</h2>
        <p className="mt-1.5 text-[13px] text-muted-foreground">
          If {email} has an account, we sent reset instructions.
        </p>
        <Button variant="outline" className="mt-6" asChild>
          <Link href="/login">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to sign in
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm">
      <Link href="/login" className="inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        Sign in
      </Link>

      <div className="mt-6">
        <h2 className="text-xl font-semibold tracking-tight">Reset password</h2>
        <p className="mt-1.5 text-[13px] text-muted-foreground">
          Enter your email and we&apos;ll send a reset link.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Sending…" : "Send link"}
        </Button>
      </form>
    </div>
  );
}
