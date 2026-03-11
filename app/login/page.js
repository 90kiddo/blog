export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-sm mx-4">

        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 px-8 py-10">

          
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
              Sign in
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Enter your credentials to continue
            </p>
          </div>

          
          <form className="space-y-5">

           
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-600"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-300 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>

            
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-600"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-blue-500 hover:text-blue-600 transition"
                >
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                required
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-300 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>

            
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 active:scale-[.99] text-white text-sm font-semibold rounded-xl py-2.5 transition-all duration-150 shadow-sm hover:shadow-md"
            >
              Sign In
            </button>

          </form>

         
          <p className="text-center text-xs text-slate-400 mt-6">
            Don&apos;t have an account?{" "}
            <a href="/register" className="text-blue-500 hover:text-blue-600 font-medium transition">
              Sign up
            </a>
          </p>

        </div>
      </div>
    </main>
  );
}