import {Badge} from 'UI/Badge';
import {Card} from 'UI/Card';
import {Stack} from 'UI/Stack';
import {useDispatch, useSelector} from "react-redux";
import {clearFilter, removeFilter} from "./filter-slice";
import {selectFilters} from "./filter-slice";


const FilterPanel = () => {
    const selectedFilters = useSelector(selectFilters)
    const dispatch = useDispatch()
    if (!selectedFilters.length)
        return null

    return (
        <Card className="filter-panel">
            <div className="filter-panel-wrapper">
                <Stack>
                    {selectedFilters.map(filter => (
                        <Badge variant="clearable"
                                key = {filter}
                                onClear={() => dispatch(removeFilter(filter))}
                        >{filter}</Badge>
                    ))}
                </Stack>

                <button className='link'
                        onClick={() => dispatch(clearFilter())}
                >Clear</button>
            </div>
        </Card>
    )
}

export {FilterPanel};