const SintNow= new Date('2022-08-31T21:00:00.000Z')

export const ISOdateParse = (IsoDate) => {
    var now = new Date(IsoDate);
    const timecur = now.toISOString().substring(0, 10)
    return timecur
    // return now>SintNow?timecur:'no'
 
}

export const filterAll =(events,filter)=> {

    if (filter=='Сегодня'){
        return filterByToday(events,SintNow,SintNow)
        
    }  
    else 
    if (filter=='Завтра'){
        const DateStart = new Date()
        DateStart.setTime(SintNow.getTime()+86400000)
        const DateEnd = new Date()
        DateEnd.setTime(SintNow.getTime()+86400000)
        return filterByToday(events,DateStart,DateEnd)
        
    }    else 
    if (filter=='Неделя'){
        const DateStart = new Date()
        DateStart.setTime(SintNow.getTime())
        const DateEnd = new Date()
        DateEnd.setTime(SintNow.getTime()+604800000)
        return filterByToday(events,DateStart,DateEnd)
        
    } 
    else   if (filter=='Неделя'){
        const DateStart = new Date()
        DateStart.setTime(SintNow.getTime())
        const DateEnd = new Date()
        DateEnd.setTime(SintNow.getTime()+26298000000)
        return filterByToday(events,DateStart,DateEnd)
        
    }    
    else   if (filter=='Прошедшие'){
        const DateStart = new Date()
        DateStart.setTime(SintNow.getTime()-262980000000)
        const DateEnd = new Date()
        DateEnd.setTime(SintNow.getTime()-86400000)
        return filterByToday(events,DateStart,DateEnd)
        
    }    else   if (filter=='Все'){
        const DateStart = new Date()
        DateStart.setTime(SintNow.getTime()-262980000000)
        const DateEnd = new Date()
        DateEnd.setTime(SintNow.getTime()+262980000000)
        return filterByToday(events,DateStart,DateEnd)
        
    }

    
    return events

}


const filterByToday = (events,DateStart,DateEnd) => {
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
        
        // if ( eventDate.toISOString().substring(0, 10)== SintNow) {
            // console.log(eventDate.toDateString(),SintNow,eventDate.toDateString()===SintNow.toDateString())
        if ( eventDate.getTime()>=DateStart.getTime() && eventDate.getTime()<=DateEnd.getTime()) {
            res["value"] = [...res["value"],data2[event]]
        }
    }
    // console.log(events.value.slice(0,1))
    // console.log(res.value.slice(0,1))
    return res


}
filterByToday()
