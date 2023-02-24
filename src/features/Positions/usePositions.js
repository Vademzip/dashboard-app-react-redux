import { selectVisiblePositions} from "./position-slice";
import {selectFilters} from "../Filter/filter-slice";
import {useSelector} from "react-redux";

export const usePositions = () => {
    const currentFilters = useSelector(selectFilters)
    return  useSelector((state => selectVisiblePositions(state, currentFilters))) //Если в селекторах есть что-то кроме стейта

}