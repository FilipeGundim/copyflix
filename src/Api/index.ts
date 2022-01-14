import axios from "axios";
import { baseUrl } from "./urls";
import { API_KEY } from "./utils";

export const getData = async (url: string, filter?: string) => {
  const _url = `${baseUrl}/${url}?api_key=${API_KEY}${filter ? filter : ""}`;

  const res = await axios.get(_url);
  return res.data;
};
