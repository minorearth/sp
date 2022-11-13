const SintNow= '2022-08-31'
export const ISOdateParse = (IsoDate) => {
    var now = new Date(IsoDate);
    const timecur = now.toISOString().substring(0, 10)
    return timecur
    // return now>SintNow?timecur:'no'
 
}

export const filterAll =(events,filter)=> {

    if (filter=='Сегодня'){
        console.log(filter)
        return filterByToday(events)
        
    }
    return events

}


const filterByToday = (events) => {
    if (events==undefined){
        return {}
    }
    const res = {}
    res["value"] =[]
    // const data3 = {"value":[{ "DateStart": '2022-09-29T21:00:00Z' }, { "DateStart": '2022-09-29T21:00:00Z' }]}
    const data3 = events
    const data2=data3.value
    for (var event in data2) {
        var eventDate = new Date(data2[event].DateStart);
        
        if ( eventDate.toISOString().substring(0, 10)== SintNow) {
            res["value"] = [...res["value"],data2[event]]
        }
    }
    // console.log(events.value.slice(0,1))
    // console.log(res.value.slice(0,1))
    return res


}
filterByToday()
