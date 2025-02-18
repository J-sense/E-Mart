"use server";
import { cookies } from "next/headers";

const Logout = async () => {
  (await cookies()).delete("accessToken");
};
export default Logout;
