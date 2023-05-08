import { useDispatch, useSelector } from 'react-redux';
import { setName,setidentity, setaccess } from '../../redux/userdataSlice'
import { setClassName } from '../../redux/filterSlice'
import { setParallels } from "../../redux/filterSlice"



export const useViewModel = (parralel) => {
    const name = useSelector(state => state.userdata.name)
    const className = useSelector(state => state.filter.className)

    const setNameD = useDispatch()
    const setUserName = (name) => {
        setNameD(setName(name))
    }
  
    const setClassD = useDispatch()
    const setClass = (name) => {
        setClassD(setClassName(name))
    }

    const setidentityD = useDispatch()
    const setaccessD = useDispatch()
    const DropAuth = () => {
      setidentityD(setidentity(false))
      setaccessD(setaccess(false))
    }


    const isEnabled = useSelector(state => state.filter.parallels[parralel])
    
    const setParallelD = useDispatch()
    const setParallel = (parralel)=>{
        setParallelD(setParallels({ [parralel]: !isEnabled }))
    }
 
  
    return {
        setUserName,
        setClass,
        name,
        className,
        DropAuth,
        isEnabled,
        setParallel
    }
}
