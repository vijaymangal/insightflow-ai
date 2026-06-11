"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Github, Sparkles } from "lucide-react";
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
    await new Promise((r) => setTimeout(r, 800));
    login(email || "alex@insightflow.ai");
    router.push("/dashboard");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="flex w-full max-w-sm flex-col"
    >
      <div className="mb-8 lg:hidden">
        <Link href="/" className="inline-flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-semibold">InsightFlow AI</span>
        </Link>
      </div>

      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Welcome back</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Sign in to your account to continue
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
            <Link href="/forgot-password" className="text-xs text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="•••••••••"
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
          <Label htmlFor="remember" className="text-sm font-normal text-muted-foreground">
            Remember me for 30 days
          </Label>
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign in"}
        </Button>
      </form>

      <div className="relative my-6">
        <Separator />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground">
          or continue with
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" type="button">
          <Chrome className="mr-2 h-4 w-4" />
          Google
        </Button>
        <Button variant="outline" type="button">
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-medium text-primary hover:underline">
          Create account
        </Link>
      </p>
    </motion.div>
  );
}

function Chrome(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l7.947 13.789C11.221 18.707 11.592 19 12 19s.779-.293 1.421-.71l7.947-13.789C19.169 1.757 15.789 0 12 0zm-1.053 16.172L3.337 5.006C5.115 2.246 8.417.5 12 .5c3.583 0 6.883 1.746 8.663 4.506l-7.716 11.166z" />
    </svg>
  );
}
