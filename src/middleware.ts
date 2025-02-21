import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService/LoginAction";
type role = keyof typeof roleBasedPrivateRoutes;
const roleBasedPrivateRoutes = {
  user: [/^\/user/, /^\/create-shop/],
  admin: [/^\/admin/],
};
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
  if (userinfo && roleBasedPrivateRoutes[userinfo?.role as role]) {
    const routes = roleBasedPrivateRoutes[userinfo?.role as role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
};
export const config = {
  matcher: [
    "/login",
    "/create-shop",
    "/admin",
    "/admin/:page",
    "/user",
    "/user/:page",
  ],
};
