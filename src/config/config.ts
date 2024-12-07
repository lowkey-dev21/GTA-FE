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
