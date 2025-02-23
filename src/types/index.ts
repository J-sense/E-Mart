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
export interface TCategory {
  _id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  parent: string | null;
  children: TCategory[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
}
export interface IBrand {
  _id: string;
  name: string;
  logo: string;
  isActive: boolean;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface ICategory {
  _id: string;
  name: string;
  description: string;
  parent: string | null;
  isActive: boolean;
  createdBy: string;
  icon: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  children: ICategory[];
}
export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  weight: number;
  category: {
    _id: string;
    name: string;
  };
  imageUrls: string[];
  isActive: boolean;
  shop: {
    _id: string;
    shopName: string;
  };
  brand: {
    _id: string;
    name: string;
  };
  averageRating: number;
  ratingCount: number;
  availableColors: string[];
  specification: Specification;
  keyFeatures: string[];
  slug: string;
  createdAt: string;
  updatedAt: string;
  offerPrice: number;
}
type Specification = {
  processor: string;
  ram: string;
  storage: string;
  display: string;
};
