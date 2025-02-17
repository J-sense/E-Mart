import Login from "@/components/modules/auth/login/LoginUser";

const page = () => {
  return (
    <div className="h-screen flex w-screen justify-center items-center p-3 md:p-0 bg-gradient-to-b from-transparent to-orange-100">
      <Login />
    </div>
  );
};

export default page;
