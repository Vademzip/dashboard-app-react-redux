import {JobPosition} from './JobPosition';
import {useDispatch} from "react-redux";
import {addFilter} from "../Filter/filter-slice"
import {usePositions} from "./usePositions";
import {useFetchPositions} from "./useFetchPositions";

const JobList = () => {
    useFetchPositions()
    const positions = usePositions()
    const dispatch = useDispatch()
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