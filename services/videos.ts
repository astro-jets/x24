"use server";
import axios from "axios";

const axiosInstance = axios.create();

export const fetchPodcastVideos = async (endpoint: string) => {
  try {
    const res = await axiosInstance.get(endpoint);
    console.log("Axios => ", res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
