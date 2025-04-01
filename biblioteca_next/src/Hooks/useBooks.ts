import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchBooks = async (query: string) => {
  if (!query) return [];
  const { data } = await axios.get(`/api/books?q=${query}`);
  return data;
};

export const useBooks = (query: string) => {
  return useQuery({
    queryKey: ["books", query],
    queryFn: () => fetchBooks(query),
    enabled: !!query,
  });
};
