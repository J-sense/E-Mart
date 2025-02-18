"use client";
import Logo from "@/app/assets/svgs/Logo";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { LoginValidationSchema } from "@/components/modules/auth/login/loginValidation";
import { toast } from "sonner";
import { loginUser } from "@/services/AuthService/LoginAction";

const Login = () => {
  const form = useForm({
    resolver: zodResolver(LoginValidationSchema),
  });
  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      console.log(res);
      if (res?.success) {
        toast(res.message);
      } else {
        toast(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-md w-full p-5">
      <div className="flex items-center space-x-4 ">
        <Logo />
        <div>
          <h1 className="text-xl font-semibold">Register</h1>
          <p className="font-extralight text-sm text-gray-600">
            Join us today and start your journey!
          </p>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full mt-3">
            {isSubmitting ? "Logging" : "Log in"}
          </Button>
        </form>
        <p className="text-sm text-gray-600 text-center my-3">
          Do not have an account ?{" "}
          <Link href="/login" className="text-primary">
            Register
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
