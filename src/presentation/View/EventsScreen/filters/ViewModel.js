
import { useDispatch, useSelector } from 'react-redux';
import { setfilter,toggleMyclass } from '../../../redux/filterSlice';

export const useViewModel = () => {

    const PeriodFilterState = useSelector(state => state.filter.period)
    const setFilterD = useDispatch()
    const onPeriodFilterPressed = (label) => {
        setFilterD(setfilter(label))
    }


    const toggleSwitchD=useDispatch()
    const classSwitchEnabled=useSelector(state=>state.filter.myClassToggle)

    const onClassSwitchPress = (isEnabled)=>{
        toggleSwitchD(toggleMyclass(!isEnabled))
    }
               

    return {
        PeriodFilterState,
        onPeriodFilterPressed,
        classSwitchEnabled,
        onClassSwitchPress
    }

}
