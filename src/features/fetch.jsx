import { useQuery } from "@tanstack/react-query";
import { instanse } from "../lib/axios";

const useGT = () => {
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      return (await instanse.get("/gempa")).data.data;
    },
    queryKey: ["fetch.GT"],
  });

  return {
    data,
    isLoading,
  };
};

export const useGD = () => {
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      return (await instanse.get("/gempa-dirasakan")).data.data;
    },
    queryKey: ["fetch.GD"],
  });

  return {
    data,
    isLoading,
  };
};

export default useGT;
