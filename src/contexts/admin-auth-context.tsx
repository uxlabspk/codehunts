/* eslint-disable react-refresh/only-export-components */

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";
import { adminApi } from "@/services/admin-api";
import type { AdminUser } from "@/types/admin";

interface AdminAuthContextType {
    user: AdminUser | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);
const AUTH_STORAGE_KEY = "codehunts_admin_auth";

export function AdminAuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<AdminUser | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
        if (!raw) {
            setIsLoading(false);
            return;
        }

        try {
            const parsed = JSON.parse(raw) as { token: string; user: AdminUser };
            setToken(parsed.token);
            setUser(parsed.user);

            void adminApi
                .me(parsed.token)
                .then((currentUser) => {
                    setUser(currentUser);
                    window.localStorage.setItem(
                        AUTH_STORAGE_KEY,
                        JSON.stringify({ token: parsed.token, user: currentUser })
                    );
                })
                .catch(() => {
                    window.localStorage.removeItem(AUTH_STORAGE_KEY);
                    setToken(null);
                    setUser(null);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } catch {
            window.localStorage.removeItem(AUTH_STORAGE_KEY);
            setToken(null);
            setUser(null);
            setIsLoading(false);
        }
    }, []);

    const login = useCallback(async (email: string, password: string) => {
        const result = await adminApi.login(email, password);
        setToken(result.token);
        setUser(result.user);
        window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(result));
    }, []);

    const logout = useCallback(() => {
        window.localStorage.removeItem(AUTH_STORAGE_KEY);
        setToken(null);
        setUser(null);
    }, []);

    const value = useMemo<AdminAuthContextType>(
        () => ({
            user,
            token,
            isAuthenticated: Boolean(token && user),
            isLoading,
            login,
            logout,
        }),
        [isLoading, login, logout, token, user]
    );

    return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
}

export function useAdminAuth(): AdminAuthContextType {
    const context = useContext(AdminAuthContext);
    if (!context) {
        throw new Error("useAdminAuth must be used inside AdminAuthProvider");
    }

    return context;
}