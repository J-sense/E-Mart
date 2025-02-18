/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const loginUser = async (loginData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const result = await res.json();
    console.log(result);
    if (result?.success) {
      (await cookies()).set("accessToken", result?.data.accessToken);
    }
    return result;
  } catch (error: any) {
    return error.message;
  }
};
export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  let decoded = null;
  if (accessToken) {
    decoded = await jwtDecode(accessToken);
    return decoded;
  } else {
    return null;
  }
};
