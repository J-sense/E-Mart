"use client";

import UserProvider from "@/context/Context";

function Providers({ children }: { children: React.ReactNode }) {
  return <UserProvider>{children}</UserProvider>;
}

export default Providers;
