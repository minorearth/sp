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


export const Period = (item) => {
    var now = new Date(item.DateStart);
    const timecurS = now.toISOString().substring(0, 10)
    var now = new Date(item.DateEnd);
    const timecurE = now.toISOString().substring(0, 10)
    if (timecurE != '1970-01-01') {
        return `c  ${item.Time == null ? '' : item.Time}  ${timecurS}  по ${item.EndTime == null ? '' : item.EndTime} ${timecurE}`
    }
    else {
        return `${item.Time == null ? '' : item.Time}  ${timecurS}`
    }


}

export const FormatParallel = (data) => {
    const feed = data == null ? ' для всех' : String(data)
    return 'Параллели: ' + feed
}


export const FormatClass = (data) => {
    const feed = data.length == 0 ? 'Не указаны' : String(data.map(item => item.Title))
    return 'Классы: ' + feed
}


export const calcPeriodS = (TodayS, filter) => {
    if (filter == 'Неделя' || filter == 'Месяц' || filter == 'Сегодня') {
        return TodayS.getTime()
    }
    if (filter == 'Завтра') {
        return TodayS.getTime() + 86400000
    }
    else if (filter == 'Прошедшие' || filter == 'Все') {
        return TodayS.getTime() - 262980000000
    }
}

export const calcPeriodE = (TodayS, TodayE, filter) => {
    if (filter == 'Сегодня') {
        return TodayE.getTime()
    }
    else if (filter == 'Завтра') {
        return TodayE.getTime() + 86400000
    } else if (filter == 'Неделя') {
        return TodayS.getTime() + 604800000
    }
    else if (filter == 'Месяц') {
        return TodayS.getTime() + 26298000000
    }
    else if (filter == 'Прошедшие') {
        return TodayS.getTime()
    } else if (filter == 'Все') {
        return TodayS.getTime() + 262980000000
    }
}

export const filterAll = (events, filter, ClassParallel, access, HiddenItems, hide) => {
    var DateStart = new Date()
    var DateEnd = new Date()
    DateStart.setTime(calcPeriodS(TodayS, filter.value))
    DateEnd.setTime(calcPeriodE(TodayS, TodayE, filter.value))
    return { 'value': events.value.filter(item => isVisible(item, DateStart, DateEnd, filter, ClassParallel, access, HiddenItems, hide)) }


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
            return parallels.filter(item => flt.includes(item)).length > 0
        }
        else {
            return true
        }
    }
    else {
        return false
    }

}
const CheckAcceess = (visibility, access) => {

    if (visibility == null) {
        return false
    } else if (!visibility.includes('Учащиеся') && access == 'Учитель') {
        return true
    } else if (visibility.includes('Учащиеся')) {
        return true
    } else return false


}
// fullDate для создания нотификаций
const fullDate = (day, time) => {
    if (time == null || !time.includes(':')) {
        return 'null'
    }
    const ret = new Date(day)
    const [hour, minutes] = time.split(':').map(x => Number(x))
    ret.setTime(day.getTime() + (hour * 60 + minutes) * 60 * 1000)
    return ret
}

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

export const extractClassParallel = (className) => {

    return className != '' ? className.split('').filter(letter => '1234567890'.includes(letter)).join('') : undefined
}

const isVisible = (event, DateStart, DateEnd, filter, ClassParallel, access, HiddenItems, hide) => {

    hiddenI = HiddenItems[event.Id] == undefined ? false : true
    // console.log(hide, hiddenI)
    if (hide && hiddenI) {
        return true
    } else if (hide && !hiddenI) {
        return false
    } else if (!hide && hiddenI) {
        return false
    }
    // hiddenI : !hiddenI


    var eventDateS = new Date(event.DateStart);
    var eventDateE = new Date(event.DateEnd);
    const EventAccess = CheckAcceess(event.Visibility, access)
    const filtersCorrParallels = CheckParallel(filter.parallels, event.Parallel)
    //Вот тут

    var classInClasses = filter.myClassToggle && Checkclass(filter.className, event.Class)
    const MyParallelInPrarallels = ClassParallel != undefined ? CheckParallel({ [ClassParallel]: true }, event.Parallel) : false
    const superfilter = filter.myClassToggle ? MyParallelInPrarallels || classInClasses : filtersCorrParallels

    event.Id == '375' && console.log(superfilter, EventAccess, hiddenI, eventDateS, eventDateE, DateStart, DateEnd)

    return (
        (
            (eventDateS.getTime() >= DateStart.getTime()
                && eventDateS.getTime() < DateEnd.getTime())
            ||
            (eventDateE.getTime() >= DateStart.getTime()
                && eventDateE.getTime() < DateEnd.getTime())
        )
        && superfilter && EventAccess)



}




