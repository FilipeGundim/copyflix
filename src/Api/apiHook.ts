import axios from "axios";
import { useState, useEffect } from "react";
import { API_KEY, baseUrl } from "./utils";

interface IApiParams {
  _url?: string;
  filters?: string;
  dep?: string | number | Object;
}

export default function useApi<TData extends unknown>({
  _url,
  filters,
  dep,
}: IApiParams) {
  const [data, setData] = useState<TData>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!_url) {
      return;
    }
    let url = `${baseUrl}/${_url}?api_key=${API_KEY}`;
    if (filters) {
      url += filters;
    }
    try {
      setIsLoading(true);
      axios.get(url).then(({ data }) => {
        setData(data);
        setIsLoading(false);
      });
    } catch (error) {
      console.log("error fetching resource");
      setIsError(true);
    }

    return () => setData(undefined);
  }, [_url, dep, filters]);

  return { data, isError, isLoading };
}
