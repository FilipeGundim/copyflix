import axios from "axios";
import { baseUrl } from "./urls";

export const getData = async (url: string, filter?: string) => {
  const _url = `${baseUrl}/${url}?api_key=${
    process.env.REACT_APP_MOVIE_API_KEY
  }${filter || ""}`;

  const res = await axios.get(_url);
  return res.data;
};
