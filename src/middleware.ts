import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService/LoginAction";

export const middleware = async (request: NextRequest) => {
  const authRoutes = ["/login", "/register"];
  const { pathname } = request.nextUrl;
  const userinfo = await getCurrentUser();
  if (!userinfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `http://localhost:3000/login?redictPath=${pathname}`,
          request.url
        )
      );
    }
  }
};
export const config = {
  matcher: ["/login", "/create-shop"],
};
