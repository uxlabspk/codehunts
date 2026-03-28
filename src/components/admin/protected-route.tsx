import { Navigate, useLocation } from "react-router";
import type { ReactNode } from "react";
import { useAdminAuth } from "@/contexts/admin-auth-context";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
    const { isAuthenticated, isLoading } = useAdminAuth();
    const location = useLocation();

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-black text-white">
                Loading admin session...
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" state={{ from: location.pathname }} replace />;
    }

    return <>{children}</>;
}