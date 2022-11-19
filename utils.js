const SintNow = new Date('2022-08-31T21:00:00.000Z')

export const ISOdateParse = (IsoDate) => {
    var now = new Date(IsoDate);
    const timecur = now.toISOString().substring(0, 10)
    return timecur
}

export const FormatParallel = (data) => {
    const feed=data==null?' для всех':String(data)
    return 'Параллели: '+ feed
}


export const FormatClass = (data) => {
    // const feed=data==null?' для всех':String(data)
    // return 'Параллели: '+ feed
    console.log(data)
    const feed=data.length==0?'Не указаны':String(data.map(item=>item.Title))
    return 'Классы: '+feed
}


export const filterAll = (events, filter) => {
    if (filter.value == 'Сегодня') {
        return filterByToday(events, SintNow, SintNow, filter)

    }
    else
        if (filter.value == 'Завтра') {
            const DateStart = new Date()
            DateStart.setTime(SintNow.getTime() + 86400000)
            const DateEnd = new Date()
            DateEnd.setTime(SintNow.getTime() + 86400000)
            return filterByToday(events, DateStart, DateEnd, filter)

        } else
            if (filter.value == 'Неделя') {
                const DateStart = new Date()
                DateStart.setTime(SintNow.getTime())
                const DateEnd = new Date()
                DateEnd.setTime(SintNow.getTime() + 604800000)
                return filterByToday(events, DateStart, DateEnd, filter)

            }
            else if (filter.value == 'Месяц') {
                const DateStart = new Date()
                DateStart.setTime(SintNow.getTime())
                const DateEnd = new Date()
                DateEnd.setTime(SintNow.getTime() + 26298000000)
                return filterByToday(events, DateStart, DateEnd, filter)

            }
            else if (filter.value == 'Прошедшие') {
                const DateStart = new Date()
                DateStart.setTime(SintNow.getTime() - 262980000000)
                const DateEnd = new Date()
                DateEnd.setTime(SintNow.getTime() - 86400000)
                return filterByToday(events, DateStart, DateEnd, filter)

            } else if (filter.value == 'Все') {
                const DateStart = new Date()
                DateStart.setTime(SintNow.getTime() - 262980000000)
                const DateEnd = new Date()
                DateEnd.setTime(SintNow.getTime() + 262980000000)
                return filterByToday(events, DateStart, DateEnd, filter)

            }


    return events

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

const filterByToday = (events, DateStart, DateEnd, filter) => {

    if (events == undefined) {
        return {}
    }
    // console.log(filter.myClass)
    const res = {}
    res["value"] = []
    const data3 = events
    const data2 = data3.value
    for (var event in data2) {
        var eventDate = new Date(data2[event].DateStart);
        // var classEval = true
        const ParallelEval = CheckParallel(filter.parallels, data2[event].Parallel)
        var classEval = filter.myClass ? Checkclass(filter.className, data2[event].Class) : true
        if (eventDate.getTime() >= DateStart.getTime()
            && eventDate.getTime() <= DateEnd.getTime()
            && classEval && ParallelEval) {
            res["value"] = [...res["value"], data2[event]]
        }
    }

    return res


}
filterByToday()
