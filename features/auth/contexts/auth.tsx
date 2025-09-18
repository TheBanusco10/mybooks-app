import { supabase } from "@/features/shared/libs/supabase";
import { Session } from "@supabase/supabase-js";
import React, { createContext, useEffect, useState } from "react";

// Define the shape of the auth context
interface AuthContextType {
  session: Session | null;
  logOut: () => void;
}

// Create the context
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState<Session | null>(null);

  const logOut = () => {
    supabase.auth.signOut();
  };

  useEffect(() => {
    // Get the initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for changes
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    // Cleanup subscription on unmount
    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session, logOut }}>{children}</AuthContext.Provider>
  );
};
