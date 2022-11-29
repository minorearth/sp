const SintNow = new Date('2022-08-31T21:00:00.000Z')

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


export const filterAll = (events, filter, access) => {
    var DateStart = new Date()
    var DateEnd = new Date()
    if (filter.value == 'Сегодня') {
        DateStart.setTime(SintNow.getTime())
        DateEnd.setTime(SintNow.getTime())
    }
    else if (filter.value == 'Завтра') {
        DateStart.setTime(SintNow.getTime() + 86400000)
        DateEnd.setTime(SintNow.getTime() + 86400000)
    } else if (filter.value == 'Неделя') {
        DateStart.setTime(SintNow.getTime())
        DateEnd.setTime(SintNow.getTime() + 604800000)
    }
    else if (filter.value == 'Месяц') {
        DateStart.setTime(SintNow.getTime())
        DateEnd.setTime(SintNow.getTime() + 26298000000)
    }
    else if (filter.value == 'Прошедшие') {
        DateStart.setTime(SintNow.getTime() - 262980000000)
        DateEnd.setTime(SintNow.getTime() - 86400000)
    } else if (filter.value == 'Все') {
        DateStart.setTime(SintNow.getTime() - 262980000000)
        DateEnd.setTime(SintNow.getTime() + 262980000000)
    }
    return filterByToday(events, DateStart, DateEnd, filter, access)



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
const filterByToday = (events, DateStart, DateEnd, filter, access) => {

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
        const EventAccess = CheckAcceess(data2[event].Visibility, access)
        // console.log(EventAccess, data2[event].Visibility, access)
        const ParallelEval = CheckParallel(filter.parallels, data2[event].Parallel)
        var classEval = filter.myClass ? Checkclass(filter.className, data2[event].Class) : true
        if (
            (
                (eventDateS.getTime() >= DateStart.getTime()
                    && eventDateS.getTime() <= DateEnd.getTime())
                ||
                (eventDateE.getTime() >= DateStart.getTime()
                    && eventDateE.getTime() <= DateEnd.getTime())
            )

            && classEval && ParallelEval && EventAccess) {
            res["value"] = [...res["value"], data2[event]]
        }
    }

    return res


}
filterByToday()
