import {JobPosition} from './JobPosition';
import {useDispatch, useSelector} from "react-redux";
import {selectAllPositions, selectVisiblePositions} from "../store/positions/positionSelector";
import {addFilter} from "../store/filters/filterActions";
import {selectFilters} from "../store/filters/filterSelector";

const JobList = () => {

    const dispatch = useDispatch()
    const currentFilters = useSelector(selectFilters)
    const positions = useSelector((state => selectVisiblePositions(state, currentFilters))) //Если в селекторах есть что-то кроме стейта
    const handleAddFilter = filter => {
        dispatch(addFilter(filter))
    }

    return (
        <div className='job-list'>
            {positions.map(item => (
                <JobPosition key={item.id}
                             handleAddFilter = {handleAddFilter}
                             {...item}
                />
            ))}
        </div>
    )
}

export {JobList};