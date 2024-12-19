import {
  LOGIN,
  LOGOUT,
  RESET_PASSWORD,
  SEND_FORGOT_PASSWORD_LINK,
  VERIFY_FORGOT_PASSWORD_TOKEN,
} from "../../constants/apiEndpoints";
import { HTTP_METHODS } from "../../constants/constants";
import { BASE_URL, fetchAuth, fetchData } from "../api";
import axios, { AxiosResponse } from "axios";

interface LoginResponse {
  accessToken: string;
  tenantId: string;
  refreshToken: string;
  firstName: string;
  lastName: string;
  emailId: string;
}

interface LoginPayload {
  username: string;
  password: string;
  isAdmin: boolean;
}

// login
export const userLogin = async (data: any) => {
  const res = fetchAuth(LOGIN, HTTP_METHODS.POST, data);
  return res;
};

// logout
export const userLogout = async () => {
  const res = fetchData(LOGOUT, HTTP_METHODS.POST);
  return res;
};

// get forgot password link in email
export const sendForgotPasswordLink = async (data: any) => {
  const res = fetchAuth(SEND_FORGOT_PASSWORD_LINK, HTTP_METHODS.POST, data);
  return res;
};

// verify forgot password link
export const verifyForgotPasswordLink = async (data: any) => {
  const res = fetchAuth(
    `${VERIFY_FORGOT_PASSWORD_TOKEN}?token=${data}`,
    HTTP_METHODS.POST,
  );
  return res;
};

// reset password
export const resetPassword = async (data: any) => {
  const res = fetchAuth(RESET_PASSWORD, HTTP_METHODS.POST, data);
  return res;
};

// Login new approach
export const LOGIN_USER = async (
  user: LoginPayload,
): Promise<AxiosResponse<LoginResponse>> => {
  try {
    const response: AxiosResponse<LoginResponse> = await axios.post(
      `${BASE_URL}/api/auth/login`,
      user,
    );

    const data = response.data;
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("tenantId", data.tenantId);
    localStorage.setItem("refreshToken", data.refreshToken);
    localStorage.setItem("firstName", btoa(data.firstName));
    localStorage.setItem("lastName", btoa(data.lastName));
    localStorage.setItem("email", btoa(data.emailId));

    return response;
  } catch (error: any) {
    throw error;
  }
};
