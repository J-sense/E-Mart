"use client";
import NMImageUploader from "@/components/ui/core/NMImageUploader";
import { useUser } from "@/context/Context";

const HomePage = () => {
  const user = useUser();
  console.log(user);
  return (
    <div>
      <h1>Welcome To NextMart Home Page</h1>
      <NMImageUploader />
    </div>
  );
};

export default HomePage;
