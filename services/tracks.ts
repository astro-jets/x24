"use server";
import { axiosInstance } from "@/app/api/tracks";

export const fetchTracks = async () => {
  try {
    const res = await axiosInstance.get("/tracks/");
    console.log("Axios => ", res.data.tracks);
    return res.data.tracks;
  } catch (e) {
    console.log(e);
  }
};
