import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../../context/AuthContext";
import { sendEmailVerification, User } from "firebase/auth";
import GoogleLogin from "../../components/login/GoogleLogin";
import GithubLogin from "../../components/login/GithubLogin";
import SpinLoader from "../../components/loaders/SpinLoader";

const RegisterSchema = z.object({
  name: z.string().min(1, { message: "Please Enter your name" }),
  profilePic: z.string().url({ message: "Invalid url" }),
  email: z.string().email({ message: "Invalid Email" }),
  password: z
    .string()
    .min(8, { message: "Password Should be minimum 8 char long" }),
});

type RegisterSchemaType = z.infer<typeof RegisterSchema>;

const Register = () => {
  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterSchemaType> = (data) => {
    setLoading(true);
    const { name, email, password, profilePic } = data;
    authContext
      ?.createAccount(email, password)
      .then(({ user }) => {
        if (user) {
          handleUpdateUserInfo(name, profilePic, user);
        }
      })
      .catch((err: any) => {
        if (err.message == "Firebase: Error (auth/email-already-in-use).") {
          setLoading(false);
          toast.error("Email already registered, try Login!");
        } else {
          setLoading(false);
          toast.error("Register unsuccessful, try again!");
          console.log(err.message);
        }
      });
  };

  const handleUpdateUserInfo = (
    name: string,
    profilePic: string,
    user: User
  ) => {
    authContext?.updateUser(name, profilePic, user).then(() => {
      sendEmailVerification(user).then(() => {
        toast.success("Congratulation! Check your email & verify to login!");
        setLoading(false);
        reset();
      });
    });
  };

  return (
    <div>
      <div className="mx-auto w-full max-w-md rounded-md bg-white p-4 shadow dark:bg-gray-900 dark:text-gray-100 sm:p-8">
        <h2 className="mb-5 text-center text-3xl font-semibold">Register</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="ng-untouched ng-pristine ng-valid space-y-8"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                disabled={loading}
                placeholder="Enter your full name"
                className="input-form"
              />
              {errors.name?.message && (
                <p className="error-message">{errors.name?.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="profilePic" className="block text-sm">
                Profile Picture
              </label>
              <input
                type="profilePic"
                {...register("profilePic")}
                id="profilePic"
                disabled={loading}
                placeholder="Enter the picture link"
                className="input-form"
              />
              {errors.profilePic?.message && (
                <p className="error-message">{errors.profilePic?.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                {...register("email")}
                id="email"
                disabled={loading}
                placeholder="leroy@jenkins.com"
                className="input-form"
              />
              {errors.email?.message && (
                <p className="error-message">{errors.email?.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                {...register("password")}
                disabled={loading}
                id="password"
                placeholder="*****"
                className="input-form"
              />
              {errors.password?.message && (
                <p className="error-message">{errors.password?.message}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className={`auth-button grid place-items-center ${
              loading && "cursor-not-allowed"
            }`}
          >
            {loading ? <SpinLoader /> : "Register"}
          </button>
        </form>
        <div className="my-4 flex w-full items-center">
          <hr className="w-full dark:text-gray-400" />
          <p className="w-full px-3 text-center dark:text-gray-400">
            or login with
          </p>
          <hr className="w-full dark:text-gray-400" />
        </div>

        <div className="my-6 flex gap-3">
          <GoogleLogin />
          <GithubLogin />
        </div>

        <p className="text-center text-sm dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            rel="noopener noreferrer"
            className="text-violet-400 hover:underline focus:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
