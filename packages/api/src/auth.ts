import { z } from "zod";
import { f } from ".";

//register business
export const createBusinessRegisterSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, "Password is too short"),
    confirmPassword: z.string().min(8, "Password is too short"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords doent match",
    path: ["confirmPassword", "password"],
  });

export type createBusinessRegisterInput = z.infer<
  typeof createBusinessRegisterSchema
>;

export const createBusiness = async ({
  ...values
}: z.infer<typeof createBusinessRegisterSchema>) => {
  const data = (await f("POST", "register", { ...values })) as {
    status: string;
    message: string;
    data: { token: string; userId: string; email: string };
  };
  console.log(data);
  return data;
};

//login
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password is too short"),
});
export const login = async ({ ...values }: z.infer<typeof loginSchema>) => {
  const data = await f("POST", "login", { ...values });
  return data;
};

//logout
export const logOut = async () => {
  const data = await f("POST", "logout");
  return data;
};

export const verifyOtpSchema = z.object({
  userId: z.string(),
  otp: z
    .string()
    .min(6, "This otp is too short")
    .max(6, "otp can only be 6 numbers"),
});

//verify otp
export const verifyOtp = async ({
  ...values
}: z.infer<typeof verifyOtpSchema>) => {
  const data = await f("POST", "verifyotp", { ...values });
  return data;
};

//send otp
export const sendOTPSchema = z.object({
  userId: z.string(),
  email: z.string().email(),
});
export const sendOTP = async ({ ...values }: z.infer<typeof sendOTPSchema>) => {
  const data = await f("POST", "resendotp", { ...values });
  console.log(data);
  return data;
};

//reset-password
export const resetPasswordEmailSchema = z.object({
  email: z.string().email(),
});

export const resetPasswordEmail = async ({
  email,
}: z.infer<typeof resetPasswordEmailSchema>) => {
  const data = await f("POST", "reset-password", { email });
  return data;
};

//verify-reset-password
export const resetpasswordSchema = z.object({
  userId: z.string(),
  password: z.string().min(8, "Password is too short "),
  confirmPassword: z.string().min(8, "Password is too short "),
});

export const resetPassword = async ({
  ...values
}: z.infer<typeof resetpasswordSchema>) => {
  const data = await f("POST", "verify-reset-password", { ...values });
  return data;
};
//login status?
export const loginStatus = async () => {
  const data = await f("GET", "loginstatus");
  return data;
};
//get user
export const getMe = async () => {
  const data = (await f("GET", "getuser")) as {
    user: {
      _id: string;
      email: string;
      verified: boolean;
      employees: [];
      role: "company" | "employee";
      createdAt: string;
      updatedAt: string;
      __v: number;
      companyProfile: {
        _id: string;
        companyName: string;
        cacNumber: string;
        companyPhoneNumber: string;
        companyEmail: string;
        state: string;
        companyAddress: string;
        CAC_status: string;
        dateVerified: string;
        __v: 0;
      };
    };
  };
  return data;
};
