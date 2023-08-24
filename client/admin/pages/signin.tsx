import Head from "next/head";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import { setCookie } from "nookies";
import type { NextPage } from "next";
import toast from "@/utils/toast";

const LoginPage: NextPage = () => {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const data = {
        email: formData.get("email"),
        password: formData.get("password"),
      };

      const res = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const { jwt } = await res.json();

      if (res.status === 200) {
        setCookie(null, "token", jwt, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });

        await router.push("/");
      }
    } catch (err) {
      toast.error("Invalid Credentials");
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 h-screen w-72 items-center justify-center mx-auto"
      >
        <div className="w-full">
          <label
            className="text-kz-orange text-left font-semibold text-xl md:text-2xl"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="bg-transparent border-b-2 w-full"
            type="email"
            name="email"
            placeholder="ariyaan@srmkzilla.net"
          />
        </div>
        <div className="w-full">
          <label
            className="text-kz-orange text-left font-semibold text-xl md:text-2xl"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="bg-transparent border-b-2 w-full"
            type="password"
            name="password"
            placeholder="ariyaaniscutebutsheiscuter"
          />
        </div>
        <button type="submit" className="btn text-white bg-kz-orange">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginPage;
