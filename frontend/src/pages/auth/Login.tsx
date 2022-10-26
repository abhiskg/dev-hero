import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AuthContext } from "../../context/AuthContext";
import { sendEmailVerification, User } from "firebase/auth";
import GoogleLogin from "../../components/login/GoogleLogin";
import GithubLogin from "../../components/login/GithubLogin";

const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please Enter your Email" })
    .email({ message: "Invalid Email" }),
  password: z
    .string()
    .min(8, { message: "Password Should be minimum 8 char long" }),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

const Login = () => {
  const [emailVerified, setEmailVerified] = useState(true);
  const [unVerifiedUser, setUnVerifiedUser] = useState<null | User>(null);
  const authContext = useContext(AuthContext);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
    const { email, password } = data;

    authContext
      ?.signIn(email, password)
      .then(({ user }) => {
        if (!user.emailVerified) {
          toast.error("Please verify your email to login");
          setUnVerifiedUser(user);
          setEmailVerified(false);
        } else {
          toast.success("Login successful");
        }
        reset();
      })
      .catch((err: any) => {
        if (err.message == "Firebase: Error (auth/user-not-found).") {
          toast.error("User not found, please register first");
        } else {
          toast.error("Something went wrong, try again later");
        }
      });
  };

  const handleResendVerificationEmail = () => {
    if (unVerifiedUser) {
      sendEmailVerification(unVerifiedUser).then(() => {
        toast.success("Email Resend! Verify Now");
        setEmailVerified(true);
      });
    }
  };

  return (
    <div>
      <div className="mx-auto w-full max-w-md rounded-md p-4 shadow dark:bg-gray-900 dark:text-gray-100 sm:p-8">
        <h2 className="mb-3 text-center text-3xl font-semibold">
          Login to your account
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="ng-untouched ng-pristine ng-valid space-y-8"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                {...register("email")}
                id="email"
                placeholder="leroy@jenkins.com"
                className="input-form"
              />
              {errors.email?.message && (
                <p className="error-message">{errors.email?.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                {...register("password")}
                id="password"
                placeholder="*****"
                className="input-form"
              />
              {errors.password?.message && (
                <p className="error-message">{errors.password?.message}</p>
              )}
            </div>
            {!emailVerified && (
              <p className="text-sm">
                did't get verification email?{" "}
                <span onClick={handleResendVerificationEmail}>resend</span>
              </p>
            )}
          </div>
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
        <div className="my-4 flex w-full items-center">
          <hr className="w-full dark:text-gray-400" />
          <p className="w-full px-3 dark:text-gray-400">or login with</p>
          <hr className="w-full dark:text-gray-400" />
        </div>

        <div className="my-6 flex gap-3">
          <GoogleLogin />
          <GithubLogin />
        </div>

        <p className="text-center text-sm dark:text-gray-400">
          Dont have account?
          <Link
            to="/register"
            rel="noopener noreferrer"
            className="hover:underline focus:underline"
          >
            Create here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
