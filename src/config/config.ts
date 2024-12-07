import axiosInstance from "../services/api";
import Cookie from "js-cookie";

export const getConfig = async (api: string) => {
  try {
    const token = Cookie.get("token");
    const response = await axiosInstance.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log(response.data); // Log the response to see what is returned
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postConfig = async (api: string, postData: any) => {
  try {
    const token = Cookie.get("token");
    const response = await axiosInstance.post(api, postData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log(response.data); // Log the response to see what is returned
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteConfig = async (api: string) => {
  try {
    const token = Cookie.get("token");
    const response = await axiosInstance.delete(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log(response.data); // Log the response to see what is returned
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Settings [emial patch]
export const patchEmailConfig = async (api, patchData) => {
  try {
    const emailVerifyToken = Cookie.get("emailVerifyToken");
    console.log("Sending request with token: ", emailVerifyToken); // Log token for debugging
    const response = await axiosInstance.patch(api, patchData, {
      headers: {
        Authorization: `Bearer ${emailVerifyToken}`,
      },
    });
    console.log("Response from server: ", response.data); // Log the successful response
    return response.data;
  } catch (error: any) {
    console.error("Request failed: ", error.response || error); // Log the error response
    throw new Error(
      error.response?.data?.message || error.message || "Request failed",
    );
  }
};
