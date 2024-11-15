import { useMutation } from "@tanstack/react-query"
import { searchItem } from "../services/Search"

export const useSearchItems = ()=>{
    return useMutation({
      mutationKey: ["SEARCH_ITEMS"],
      mutationFn: async (search: string) => await searchItem(search),
    });
}