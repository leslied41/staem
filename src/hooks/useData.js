import { useState, useEffect, useCallback } from "react";
import { supabase } from "../SubaDB";

const useData = (page = 1, sortTerm, searchTerm) => {
  const [error, setErrror] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = !searchTerm
        ? await supabase
            .from("steam")
            .select("*")
            .range(0, page * 10 - 1)
            .order(sortTerm ? sortTerm : "id", { ascending: false })
        : await supabase
            .from("steam")
            .select("*")
            .range(0, page * 10 - 1)
            .order(sortTerm ? sortTerm : "id", { ascending: false })
            .match({ title: searchTerm });

      setData(data);
    } catch (err) {
      setErrror(err);
    } finally {
      setIsLoading(false);
    }
  }, [page, sortTerm, searchTerm]);

  useEffect(() => {
    getData();
  }, [page, getData, sortTerm, searchTerm]);

  return { data, error, isLoading };
};
export default useData;
