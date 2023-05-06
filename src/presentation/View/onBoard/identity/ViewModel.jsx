import { useState,useEffect } from "react"
import { useDispatch,useSelector } from "react-redux";
import { setperson, setidentity, setaccess } from "../../../redux/userdataSlice";

export const useViewModel=()=>{
        useEffect(() => {
            setidentityD(setidentity(false))
        }, [])
        
        const identityPassed = useSelector(state => state.userdata.identityPassed)
        const setpersonD = useDispatch()
        const setidentityD = useDispatch()
        const setaccessD = useDispatch()
        const setUserIdentity = (person) => {
            if (person == 'Ученик') {
                setpersonD(setperson('Ученик'))
                setidentityD(setidentity(true))
                setaccessD(setaccess(true))
            } else {
                setpersonD(setperson('Учитель'))
                setidentityD(setidentity(true))
            }
        }

        return {
            identityPassed,
            setUserIdentity
        }





}