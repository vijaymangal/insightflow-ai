"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
    await new Promise((r) => setTimeout(r, 800));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-sm text-center"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
          <CheckCircle2 className="h-6 w-6 text-success" />
        </div>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">Check your email</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We sent a password reset link to <strong className="text-foreground">{email}</strong>
        </p>
        <Button variant="outline" className="mt-6" asChild>
          <Link href="/login">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to sign in
          </Link>
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-sm"
    >
      <Link
        href="/login"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to sign in
      </Link>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold tracking-tight">Reset your password</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Enter your email and we&apos;ll send you a reset link
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send reset link"}
        </Button>
      </form>
    </motion.div>
  );
}
