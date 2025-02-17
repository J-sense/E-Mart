export type IUser = {
  userId: string;
  name: string;
  email: string;
  role: "user" | "admin"; // Adjust roles if needed
  isActive: boolean;
  hasShop: boolean;
  iat: number; // Issued At timestamp
  exp: number; // Expiration timestamp
};
