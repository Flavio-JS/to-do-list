import GirlLaptop from "@/src/Icons/GirlLaptop";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="flex min-h-full items-center justify-center">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
        {/* Form Section */}
        <div className="w-full p-8 md:w-1/2">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-4xl font-bold text-gray-800">Sign Up</h2>
            <p className="text-gray-600">Create your account</p>
          </div>
          <form>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-lg border px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring"
                placeholder="John Doe"
              />
            </div>
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
                placeholder="example@gmail.com"
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
              />
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="password"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full rounded-lg border px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-pink-500 px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-pink-600"
            >
              SIGN UP
            </button>
          </form>
          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-pink-500 hover:underline">
              Already have an account? Log in
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative hidden w-1/2 items-center justify-center bg-blue-100 md:flex">
          <GirlLaptop />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
