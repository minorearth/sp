import {getEvents} from '../model/api/api'
import {offset,fullDate} from './utils'

export const DataClean = (events) => {
    const res = {}
    res["value"] = []
    const data2 = events.value
    for (var event in data2) {
        var eventDateS = new Date(data2[event].DateStart);
        var eventDateE = new Date(data2[event].DateEnd);
        // data2[event].Id == '373' && console.log('3', eventDateS, eventDateE, data2[event].DateStart, data2[event].DateStart)
        eventDateS.setTime(eventDateS.getTime() - offset * 60 * 1000)
        eventDateE.setTime(eventDateE.getTime() - offset * 60 * 1000)
        res["value"] = [...res["value"], { ...data2[event], "DateStart": eventDateS, 'DateEnd': eventDateE, "fullDate": fullDate(eventDateS, data2[event].Time) }]
    }
    return res
}


export const getCleanEvents =  async () => {
    const result = await getEvents()
    return DataClean(result)
}