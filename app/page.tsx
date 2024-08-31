"use client";

import GirlLaptop from "@/src/Icons/GirlLaptop";
import { useLoginUser } from "@/src/modules/users/use-querys/useLoginUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  const router = useRouter();

  const mutation = useLoginUser({
    onSuccess: () => {
      router.push("/home");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email && password)
      mutation.mutate({
        email,
        password,
      });
  };

  return (
    <div className="flex min-h-full items-center justify-center">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="w-full p-8 md:w-1/2">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-4xl font-bold text-gray-800">Sign In</h2>
            <p className="text-gray-600">Welcome back !!!</p>
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring"
                placeholder="login@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full rounded-lg border px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-pink-500 px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-pink-600"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "..." : "LOGIN"}
            </button>
          </form>
          <div className="mt-6 text-center">
            <Link
              href="/sign-up"
              className="text-sm text-pink-500 hover:underline"
            >
              Don’t have an account yet? Sign up for free
            </Link>
          </div>
        </div>

        <div className="relative hidden w-1/2 items-center justify-center bg-blue-100 md:flex">
          <GirlLaptop />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
