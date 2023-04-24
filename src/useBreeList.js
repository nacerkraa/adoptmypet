import { useQuery } from "@tanstack/react-query";
import fetchbreedList from "./fetchbreedList";


export default function useBreedList(animal){
    const results = useQuery(["breeds", animal], fetchbreedList);
    return [results?.data?.breeds ?? [], results.status];
}