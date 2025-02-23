"use server";

import { cookies } from "next/headers";

export const createBrands = async (data: FormData) => {
  const token = (await cookies()).get("accessToken")?.value;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/brand`, {
      method: "POST",
      headers: {
        Authorization: token ? token : "",
        // ⚠️ Don't set 'Content-Type' here, it breaks FormData
      },
      body: data, // Ensure correct format
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to create brand");
    }

    return await res.json();
  } catch (error) {
    console.error("Error creating brand:", error);
  }
};
export const getAllBrands = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/brand`, {
      next: {
        tags: ["category"],
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
