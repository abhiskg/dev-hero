import { useContext } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../../context/AuthContext";
import { sendEmailVerification, User } from "firebase/auth";
import GoogleLogin from "../../components/login/GoogleLogin";
import GithubLogin from "../../components/login/GithubLogin";

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

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterSchemaType> = (data) => {
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
          toast.error("Email already registered, try Login!");
        } else {
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
        reset();
      });
    });
  };

  return (
    <div>
      <div className="mx-auto w-full max-w-md rounded-md p-4 shadow dark:bg-gray-900 dark:text-gray-100 sm:p-8">
        <h2 className="mb-3 text-center text-3xl font-semibold">
          Register Now
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="ng-untouched ng-pristine ng-valid space-y-8"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
                id="password"
                placeholder="*****"
                className="input-form"
              />
              {errors.password?.message && (
                <p className="error-message">{errors.password?.message}</p>
              )}
            </div>
          </div>
          <button type="submit" disabled={isSubmitting} className="auth-button">
            Register
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
          Already have an account?
          <Link
            to="/login"
            rel="noopener noreferrer"
            className="hover:underline focus:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
