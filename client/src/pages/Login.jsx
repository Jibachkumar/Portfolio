import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full px-40 grid grid-cols-1 lg:grid-cols-2 gap-20 px-10">
        {/* LEFT LOGIN FORM */}
        <div className="flex flex-col justify-center max-w-md">
          <h1 className="text-3xl font-semibold font-serif text-gray-900">
            Log in to your Jibachh
          </h1>
          <p className="mt-2 text-gray-500 font-serif">
            Good to have you back!
          </p>

          {/* FORM */}
          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-md bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="flex-1 rounded-md bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="rounded-md bg-gray-100 px-4 py-3 font-serif text-sm text-gray-600 hover:bg-gray-200">
                login
              </button>
            </div>
            <Link
              to={"/login"}
              className="text-sm text-blue-500 hover:underline"
            >
              Reset Password
            </Link>
          </div>

          {/* OR */}
          <div className="my-6 text-md font-semibold text-gray-950">OR</div>

          {/* GOOGLE LOGIN */}
          <button className="flex items-center justify-center gap-3 rounded-md bg-blue-500 py-3 text-white font-medium hover:bg-blue-600 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="h-5 w-5"
            />
            Sign in with Google
          </button>

          <p className="mt-6 text-sm text-gray-500">or sign up</p>

          <Link to={"/home"}>
            <button
              aria-label="Accessibility options"
              title="Accessibility options"
              className="fixed bottom-20 left-28 text-black/50 font-serif hover:bg-slate-200 p-2 rounded-md cursor-pointer"
            >
              <i className="fa-solid fa-arrow-right-to-bracket "></i>
              <span className="ml-2">Skip</span>
            </button>
          </Link>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className="lg:flex items-center justify-center">
          {/* Cards */}
          <div className="relative w-[420px] h-[520px]">
            {/* Twitter */}
            <div
              className="absolute top-4 left-10 w-28 h-44 bg-sky-400 rounded-2xl flex items-center justify-center shadow-lg float-twitter"
              style={{ "--rot": "-12deg", animationDelay: "0.4s" }}
            >
              <i className="fa-brands fa-twitter text-white text-3xl" />
            </div>

            {/* YouTube */}
            <div
              style={{ "--rot": "20deg", animationDelay: "0.4s" }}
              className="float-youtube absolute top-12 left-44 w-24 h-24 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <i className="fa-brands fa-youtube text-white text-3xl" />
            </div>

            {/* Gumroad */}
            <div
              className="rotate-gumroad absolute top-6 right-6 w-24 h-24 bg-pink-300 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ "--rot": "14deg", animationDelay: "0.4s" }}
            >
              <span className="font-bold text-xl">G</span>
            </div>

            {/* Dribbble */}
            <div
              className="rotate-dribbble absolute top-36 left-36 w-52 h-28 bg-pink-200 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ "--rot": "-8deg", animationDelay: "0.4s" }}
            >
              <i className="fa-brands fa-dribbble text-pink-600 text-3xl" />
            </div>

            {/* Orange large card */}
            <div className="rotate-bookmark absolute bottom-20 left-8 w-60 h-44 bg-orange-500 rounded-2xl rotate-[6deg] flex items-center justify-center shadow-xl">
              <i className="fa-solid fa-bookmark text-white text-4xl" />
            </div>

            {/* GitHub */}
            <div
              className="rotate-github absolute bottom-36 right-14 w-20 h-20 bg-black rounded-2xl  flex items-center justify-center shadow-lg"
              style={{ "--rot": "-8deg", animationDelay: "0.4s" }}
            >
              <i className="fa-brands fa-github text-white text-2xl" />
            </div>

            {/* Trash */}
            <div className="rotate-trash absolute bottom-16 right-20 w-20 h-20 bg-yellow-400 rounded-2xl rotate-[8deg] flex items-center justify-center shadow-lg">
              <i className="fa-solid fa-trash text-black text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
