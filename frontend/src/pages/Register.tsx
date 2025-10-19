"use client";

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
import { Link, Navigate, useNavigate } from "react-router";
import { Loader2 } from "lucide-react";
import { axiosClient } from "@/api/axios";
import { useUserContext } from "@/contexts/UserContext";
import { RegisterApi } from "@/api/registerApi";

const formSchema = z
  .object({
    name: z
      .string()
      .min(3, {
        message: "Name must be at least 3 characters",
      })
      .max(255),
    email: z.email().min(2, {
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
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Password do not match",
    path: ["password_confirmation"],
  });

export default function Register() {
  const userContext = useUserContext();
  const navigate = useNavigate();
  // ...
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Mohamed BENIANE",
      email: "beniane39@gmail.com",
      password: "12345678",
      password_confirmation: "12345678",
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
      // console.log(values);
      await RegisterApi.getCsrf();
      const response = await RegisterApi.register(values);
      // console.log(response);
      if (response.status === 204) {
        navigate("/dashboard");
        localStorage.setItem("token", "authenticated");
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
    Navigate({
      to: "/dashboard",
    });
  } else {
    return (
      <>
        <div className="bg-white h-dvh flex flex-col justify-center items-center border-2">
          <h1 className="text-3xl font-bold pb-4">Create an account</h1>
          <h3 className="text-lg font-light text-gray-400 pb-6">
            Join to manage you School
          </h3>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 bg-gray-50 w-lg p-4 border-4 rounded-2xl"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="enter your name, please"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {errors.name?.message}
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
                        placeholder="enter your password, please"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {errors.password?.message}
              <FormField
                control={form.control}
                name="password_confirmation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="confirm your password, please"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {errors.password_confirmation?.message}
              <Button type="submit" className="w-full">
                {isSubmitting && <Loader2 className="animate-spin" />}Sing Up
              </Button>
            </form>
          </Form>
          <h3 className="pt-4 font-normal text-gray-400">
            Already have an account?{" "}
            <span className="text-blue-500 hover:underline">
              <Link to={"/login"}>Sing In</Link>
            </span>
          </h3>
        </div>
      </>
    );
  }
}
