import { HTTP_METHODS } from "../constants/constants";

export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface ErrorResponse {
  message: string;
}

export const getToken = () => localStorage.getItem("accessToken");
const getRefreshToken = () => localStorage.getItem("refreshToken");

export const fetchData = async (
  endpoint: string,
  method: string = HTTP_METHODS.GET,
  body: any = null,
) => {
  try {
    const url = `${BASE_URL}/${endpoint}`;

    const headers: Record<string, string> = {
      Authorization: `Bearer ${getToken()}`,
    };

    if (!(body instanceof FormData)) {
      headers["Content-Type"] = "application/json";
    }

    const options: RequestInit = {
      method,
      headers,
      credentials: "include",
    };

    // Set body, stringifying if it's not FormData
    if (body) {
      options.body = body instanceof FormData ? body : JSON.stringify(body);
    }

    let response = await fetch(url, options);

    // Handle 401 Unauthorized and refresh token
    if (response.status === 401) {
      const refreshTokenResponse = await fetch(
        `${BASE_URL}/api/auth/refresh-token`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refreshToken: getRefreshToken(),
          }),
        },
      );

      if (refreshTokenResponse.status === 200) {
        const data = await refreshTokenResponse.json();
        localStorage.setItem("accessToken", data.accessToken);

        // Retry the original request with a refreshed token
        const refreshedOptions: RequestInit = {
          ...options,
          headers: {
            ...headers,
            Authorization: `Bearer ${data.accessToken}`,
          },
        };
        response = await fetch(url, refreshedOptions);
      } else {
        // If refreshing the token fails, clear tokens and exit
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("name");
        return;
      }
    }

    return response?.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong",
    );
  }
};

// auth
export const fetchAuth = async (
  endpoint: string,
  method: string = HTTP_METHODS.GET,
  body: any = null,
) => {
  try {
    const url = `${BASE_URL}/${endpoint}`;

    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    return response?.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong",
    );
  }
};
