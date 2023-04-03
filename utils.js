// export const RightNow = new Date('2022-08-31T22:00:00.000Z')
export const RightNow = new Date()
const offset = new Date().getTimezoneOffset()
RightNow.setTime(RightNow.getTime() - offset * 60 * 1000)
const TodayS = new Date(RightNow.toDateString())
TodayS.setTime(TodayS.getTime() - offset * 60 * 1000)
const TodayE = new Date(TodayS.toDateString())
TodayE.setTime(TodayE.getTime() + 24 * 60 * 60 * 1000 - offset * 60 * 1000)


export const getDateString = (dateMills) => {
    const DateString = new Date(dateMills)
     return `${DateString.toLocaleDateString()} ${DateString.toLocaleTimeString()}`
 }

export const ISOdateParse = (IsoDate) => {
    var now = new Date(IsoDate);
    const timecur = now.toISOString().substring(0, 10)
    return timecur
}


export const Period = (IsoDateStart, IsoDateEnd) => {
    var now = new Date(IsoDateStart);
    const timecurS = now.toISOString().substring(0, 10)
    var now = new Date(IsoDateEnd);
    const timecurE = now.toISOString().substring(0, 10)
    if (timecurE != '1970-01-01') {
        return `c  ${timecurS} по  ${timecurE}`
    }
    else {
        return timecurS
    }


}

export const FormatParallel = (data) => {
    const feed = data == null ? ' для всех' : String(data)
    return 'Параллели: ' + feed
}


export const FormatClass = (data) => {
    // const feed=data==null?' для всех':String(data)
    // return 'Параллели: '+ feed
    // console.log(data)
    const feed = data.length == 0 ? 'Не указаны' : String(data.map(item => item.Title))
    return 'Классы: ' + feed
}


export const filterAll = (events, filter, access,HiddenItems,hide) => {
    var DateStart = new Date()
    var DateEnd = new Date()
    // console.log(filter.value)
    if (filter.value == 'Сегодня') {
        DateStart.setTime(TodayS.getTime())
        DateEnd.setTime(TodayE.getTime())
        // console.log('1',DateStart,DateEnd)
 
    }
    else if (filter.value == 'Завтра') {
        DateStart.setTime(TodayE.getTime())
        DateEnd.setTime(TodayE.getTime() + 86400000)
    } else if (filter.value == 'Неделя') {
        DateStart.setTime(TodayS.getTime())
        DateEnd.setTime(TodayS.getTime() + 604800000)
    }
    else if (filter.value == 'Месяц') {
        DateStart.setTime(TodayS.getTime())
        DateEnd.setTime(TodayS.getTime() + 26298000000)
    }
    else if (filter.value == 'Прошедшие') {
        DateStart.setTime(TodayS.getTime() - 262980000000)
        DateEnd.setTime(TodayS.getTime())
    } else if (filter.value == 'Все') {
        DateStart.setTime(TodayS.getTime() - 262980000000)
        DateEnd.setTime(TodayS.getTime() + 262980000000)
    }
    // console.log('2',DateStart,DateEnd)
    return filterByToday(events, DateStart, DateEnd, filter, access,HiddenItems,hide)



    // return events

}

const Checkclass = (className, ClassList) => {
    for (var index in ClassList) {
        if (ClassList[index].Title == className) {
            return true
        }
    }
    return false
}

const CheckParallel = (parallelsfilter, parallels) => {
    if (parallels != null) {
        if (parallels[0] != 'Все') {
            const flt = Object.keys(parallelsfilter).filter(h => parallelsfilter[h] == true)
            // console.log(parallels, flt, parallels.filter(item => flt.includes(item)).length > 0)
            return parallels.filter(item => flt.includes(item)).length > 0
        }
        else {
            // console.log(parallels, true)
            return true
        }
    }
    else {
        // console.log(parallels, false)
        return false
    }

}
const CheckAcceess = (visibility, access) => {

    // console.log(!visibility.includes('Учащиеся') && access == 'Учитель' ? true : false)
    if (visibility == null) {
        return false
    } else if (!visibility.includes('Учащиеся') && access == 'Учитель') {
        return true
    } else if (visibility.includes('Учащиеся')) {
        return true
    } else return false


}
const fullDate = (day, time) => {
    if (time == null) {
        return 'null'
    }
    const ret = new Date(day)
    const [hour, minutes] = time.split(':').map(x => Number(x))
    ret.setTime(day.getTime() + (hour * 60 + minutes) * 60 * 1000)
    return ret



}

export const getSecOffset = (end) => {
    const st = new Date()
    const en = new Date(end)
    // return Math.round((en,st,en-st+offset*60*1000)/1000)
    return 300

}


export const DataClean = (events) => {
    // console.log(HiddenItems)
    if (events == undefined) {
        return {}
    }
    const res = {}
    res["value"] = []
    const data3 = events
    const data2 = data3.value
    for (var event in data2) {
        var eventDateS = new Date(data2[event].DateStart);
        var eventDateE = new Date(data2[event].DateEnd);
        if (data2[event].Id=='373'){
            // console.log('3',eventDateS,eventDateE,data2[event].DateStart,data2[event].DateStart)

        }
      
        eventDateS.setTime(eventDateS.getTime() - offset * 60 * 1000)
        eventDateE.setTime(eventDateE.getTime() - offset * 60 * 1000)
        if (data2[event].Id=='373'){
            // console.log('3',eventDateS,eventDateE)

        }
        
        // res["value"] = [...res["value"], { ...data2[event], "hidden": HiddenItems[data2[event].Id] == undefined ? false : true, "DateStart": eventDateS, 'DateEnd': eventDateE, "fullDate": fullDate(eventDateS, data2[event].Time) }]
        res["value"] = [...res["value"], { ...data2[event], "DateStart": eventDateS, 'DateEnd': eventDateE, "fullDate": fullDate(eventDateS, data2[event].Time) }]
    }

    return res


}


const filterByToday = (events, DateStart, DateEnd, filter, access,HiddenItems,hide) => {

    if (events == undefined) {
        return {}
    }

    const res = {}
    res["value"] = []
    const data3 = events
    const data2 = data3.value


    // console.log( DateStart, DateEnd, filter, access,HiddenItems)
    for (var event in data2) {
   

        var eventDateS = new Date(data2[event].DateStart);

        var eventDateE = new Date(data2[event].DateEnd);
        // const hidden = data2[event].hidden
        
        // eventDateS.setTime(eventDateS.getTime()-offset*60*1000)
        // eventDateE.setTime(eventDateE.getTime()-offset*60*1000)
        const EventAccess = CheckAcceess(data2[event].Visibility, access)
        // console.log(hide,hide?hiddenI:!hiddenI)
        const ParallelEval = CheckParallel(filter.parallels, data2[event].Parallel)
       //Вот тут
        const hiddenI=HiddenItems[data2[event].Id]==undefined?false:true
       

        var classEval = filter.myClass ? Checkclass(filter.className, data2[event].Class) : true
        if (data2[event].Id=='373'){
            // console.log(classEval,ParallelEval,EventAccess,DateStart, DateEnd,eventDateS,data2[event])
            
            
            }
        if (
            (
                (eventDateS.getTime() >= DateStart.getTime()
                    && eventDateS.getTime() < DateEnd.getTime())
                ||
                (eventDateE.getTime() >= DateStart.getTime()
                    && eventDateE.getTime() < DateEnd.getTime())
            )

            && classEval && ParallelEval && EventAccess && (hide?hiddenI:!hiddenI)) {
            res["value"] = [...res["value"], { ...data2[event] }]

        }
    }

    return res


}
filterByToday()
