"use client";
import Logo from "@/app/assets/svgs/Logo";
import { Button } from "../ui/button";
import { Heart, LogOut, ShoppingBag } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Logout from "@/services/AuthService/LogoutAction";
import { useUser } from "@/context/Context";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/constant";

export default function Navbar() {
  const { user, setIsLoading } = useUser();
  const pathName = usePathname();
  const router = useRouter();
  const handleLogout = () => {
    Logout();
    setIsLoading(true);
    if (protectedRoutes.some((route) => pathName.match(route))) {
      router.push("/");
    }
  };
  return (
    <header className="border-b w-full">
      <div className="container flex justify-between items-center mx-auto h-16 px-3">
        <h1 className="text-2xl font-black flex items-center">
          <Logo />
          Next Mart
        </h1>
        <div className="max-w-md  flex-grow">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full max-w-6xl border border-gray-300 rounded-full py-2 px-5"
          />
        </div>
        <nav className="flex gap-2">
          <Button variant="outline" className="rounded-full p-0 size-10">
            <Heart />
          </Button>
          <Button variant="outline" className="rounded-full p-0 size-10">
            <Link href={"/cart"}>
              <ShoppingBag />
            </Link>
          </Button>
          {user ? (
            <div className="flex gap-3">
              <Link href="/create-shop">
                <Button variant="outline" color="" className="rounded-full">
                  Create a shop
                </Button>
              </Link>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>User</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                    <DropdownMenuItem>My shop</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="bg-orange-500"
                    >
                      <LogOut />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ) : (
            <Link href={"/login"}>
              <Button variant="outline" color="" className="rounded-full">
                Log in
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
