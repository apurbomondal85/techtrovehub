
import React, { useState } from 'react'
import getProvider from '../../utiliz/getProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaAt, FaGoogle, FaLock } from 'react-icons/fa6';

const Login = () => {
  const { login, google } = getProvider();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onsubmit = e => {
    const email = e.email;
    const password = e.password;

    if (email && password) {
      login(email, password)
        .then(() => {
          reset();
          navigate(from)
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage)
        });
    }

  }

  const loginWithGoogle = () => {
    google()
      .then(() => {
        navigate(from)
      }).catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      });
  }


  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Login Now</h2>
        </div>

        <div className="relative max-w-md mx-auto mt-8 md:mt-16">
          <div className="overflow-hidden bg-white rounded-md shadow-md">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
              <form onSubmit={handleSubmit(onsubmit)}>
                <div className="space-y-5">
                  <div>
                    <label className="text-base font-medium text-gray-900"> Email address </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaAt />
                      </div>

                      <input
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="Enter email to get started"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900"> Password </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaLock />
                      </div>

                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        {...register("password", { required: true })}
                      />
                    </div>
                  </div>
                  <p className="text-red-500 my-3 text-sm">{error && error}</p>
                  <div>
                    <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-secondary border border-transparent rounded-md focus:outline-none">
                      Login
                    </button>
                  </div>
                  <div>
                    <span onClick={loginWithGoogle} className="inline-flex items-center justify-center gap-2 w-full px-4 py-4 text-base font-semibold text-dark transition-all duration-200 bg-transparent border border-primary rounded-md focus:outline-none cursor-pointer"><span className="text-blue-700 text-xl"><FaGoogle /></span>Login with Google</span>
                  </div>

                  <div className="text-center">
                    <p className="text-base text-gray-600">Already have an account? <Link to="/singup" title="" className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline">Create Account</Link></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login