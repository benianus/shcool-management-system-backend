import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Link, useNavigate } from "react-router";
import "lucide-react";
import { Loader2 } from "lucide-react";
import { axiosClient } from "@/api/axios";
import { useUserContext } from "@/contexts/UserContext";
import { LoginApi } from "@/api/loginApi";
import { saveTokenOnLocalStorage } from "@/helpers";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z
    .string()
    .min(3, {
      message: "Password must be min 3 characters",
    })
    .max(8, {
      message: "Password must be max 8 characters",
    }),
});

export default function Login() {
  const navigate = useNavigate();
  const userContext = useUserContext();
  // ...
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "beniane39@gmail.com",
      password: "12345678",
    },
  });
  const {
    setError,
    formState: { isSubmitting, errors },
  } = form;
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      await LoginApi.getCsrf();
      const response = await LoginApi.login(values);
      if (response.status === 204) {
        saveTokenOnLocalStorage('token', 'test');
        navigate("/dashboard");
        userContext.setAuthenticated(true);
      }
    } catch (error) {
      console.log(error);
      const errors = error.response.data.errors;
      for (const key in errors) {
        setError(key, {
          type: "server",
          message: errors[key][0],
        });
      }
    }
  }
  if (userContext.authenticated) {
    navigate("/dashboard");
  } else {
    return (
      <>
        <div className="bg-white h-dvh flex flex-col justify-center items-center border-2">
          <h1 className="text-3xl font-bold pb-4">Welcome Back</h1>
          <h3 className="text-lg font-light text-gray-400 pb-6">
            Login to continue to dashboard
          </h3>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 bg-gray-50 w-lg p-4 border-4 rounded-2xl"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="enter your email, please"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {errors.email?.message}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="enter your email, please"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {errors.password?.message}
              <p className="text-right text-blue-500 hover:underline py-0">
                <Link to={""}>Forgot password?</Link>
              </p>
              <Button type="submit" className="w-full">
                {isSubmitting && <Loader2 className="animate-spin" />}Log in
              </Button>
            </form>
          </Form>
          <h3 className="pt-4 font-normal text-gray-400">
            Don't have an account?{" "}
            <span className="text-blue-500 hover:underline">
              <Link to={"/register"}>Sing Up</Link>
            </span>
          </h3>
        </div>
      </>
    );
  }
}


