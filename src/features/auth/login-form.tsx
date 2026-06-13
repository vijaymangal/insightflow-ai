"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useAuthStore } from "@/store";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuthStore();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 400));
    login(email || "jordan@insightflow.io");
    router.push("/dashboard");
  };

  return (
    <div className="flex w-full max-w-sm flex-col">
      <div className="mb-8 lg:hidden">
        <Link href="/" className="text-[15px] font-semibold">
          InsightFlow
        </Link>
      </div>

      <div>
        <h2 className="text-xl font-semibold tracking-tight">Sign in</h2>
        <p className="mt-1.5 text-[13px] text-muted-foreground">
          Use your work email to access the workspace.
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
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="/forgot-password" className="text-[12px] text-muted-foreground hover:text-foreground">
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="remember"
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked === true)}
          />
          <Label htmlFor="remember" className="text-[13px] font-normal text-muted-foreground">
            Remember this device
          </Label>
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Signing in…" : "Continue"}
        </Button>
      </form>

      <div className="relative my-6">
        <Separator />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-[11px] text-muted-foreground">
          or
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" type="button" disabled>
          Google
        </Button>
        <Button variant="outline" type="button" disabled>
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </div>

      <p className="mt-8 text-center text-[13px] text-muted-foreground">
        No account?{" "}
        <Link href="/register" className="text-foreground underline-offset-4 hover:underline">
          Request access
        </Link>
      </p>
    </div>
  );
}
