"use server";

import { cookies } from "next/headers";

export const createShop = async (data: FormData) => {
  const token = (await cookies()).get("accessToken")?.value;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/shop`, {
      method: "POST",
      headers: {
        Authorization: token ? token : "",
      },
      body: data,
    });
    return res.json();
  } catch (error) {
    return error;
  }
};
