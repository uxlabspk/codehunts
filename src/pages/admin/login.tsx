import { useState, type FormEvent } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";
import { Lock, Mail } from "lucide-react";
import { useAdminAuth } from "@/contexts/admin-auth-context";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AdminLoginPage() {
    const { isAuthenticated, login } = useAdminAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    if (isAuthenticated) {
        return <Navigate to="/admin" replace />;
    }

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);
        setIsSubmitting(true);

        try {
            await login(email, password);
            const state = location.state as { from?: string } | null;
            navigate(state?.from ?? "/admin", { replace: true });
        } catch (requestError) {
            setError(requestError instanceof Error ? requestError.message : "Unable to login");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0f172a] px-4 py-12 text-white">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(251,191,36,0.2),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.15),transparent_45%)]" />

            <Card className="relative z-10 w-full max-w-md border-white/15 bg-[#0b1220]/80 backdrop-blur-xl">
                <CardHeader>
                    <CardTitle className="text-2xl text-white">Admin Panel Login</CardTitle>
                    <CardDescription className="text-slate-300">
                        Sign in with an admin account to manage projects, team, and company stats.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4" onSubmit={onSubmit}>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-slate-200">
                                Email
                            </Label>
                            <div className="relative">
                                <Mail className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    placeholder="admin@codehuntspk.com"
                                    className="border-white/15 bg-white/5 pl-10 text-white placeholder:text-slate-400"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-slate-200">
                                Password
                            </Label>
                            <div className="relative">
                                <Lock className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    placeholder="Enter password"
                                    className="border-white/15 bg-white/5 pl-10 text-white placeholder:text-slate-400"
                                    required
                                />
                            </div>
                        </div>

                        {error ? (
                            <div className="rounded-md border border-red-400/40 bg-red-500/10 p-2 text-sm text-red-200">
                                {error}
                            </div>
                        ) : null}

                        <Button type="submit" className="h-10 w-full" disabled={isSubmitting}>
                            {isSubmitting ? "Signing in..." : "Sign in"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </main>
    );
}