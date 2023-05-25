import { TodayS, TodayE} from './datetimeutils'

//
export const getFilterDateSUnix = (filter) => {
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

export const getFilterDateEUnix = (filter) => {
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


const getFilterPeriodUnix = (filter) => {
    const filterDateSUnix = getFilterDateSUnix(filter.value)
    const filterDateEUnix = getFilterDateEUnix(filter.value)
    return {
        filterDateSUnix,
        filterDateEUnix,
    }
}

export const filterAll = (events, filter, access, showHidden) => {
    return events.filter(event => isVisible(event, filter, access, showHidden))
}

const checkMyClassInEventClasses = (className, ClassList) => {
    for (var index in ClassList) {
        if (ClassList[index].Title == className) {
            return true
        }
    }
    return false
}

const checkParallesFilterInEventParallels = (parallelsFilter, eventParallels) => {
    if (eventParallels != null) {
        if (eventParallels[0] != 'Все') {
            const flt = Object.keys(parallelsFilter).filter(h => parallelsFilter[h] == true)
            return eventParallels.filter(item => flt.includes(item)).length > 0
        }
        else {
            return true
        }
    }
    else {
        return false
    }

}
const getEventAccess = (showToKids, access) => {
    if (!showToKids && access == 'Учитель') {
        return true
    } else if (showToKids) {
        return true
    } else return false
}



export const extractMyClassParallel = (className) => {
    return className != '' ? className.split('').filter(letter => '1234567890'.includes(letter)).join('') : undefined
}


const getParallelsAndClassfilter = (filterParallels, eventParallels, myClassName, classesInEvent, myClassToggle) => {
    if (myClassToggle) {
        const myClassInEventClasses = checkMyClassInEventClasses(myClassName, classesInEvent)
        const myClassParallel = extractMyClassParallel(myClassName) //move to filterstate
        const myParallelInEventParallels = myClassParallel != undefined ? checkParallesFilterInEventParallels({ [myClassParallel]: true }, eventParallels) : false
        return (myParallelInEventParallels || myClassInEventClasses)
    } else {
        return checkParallesFilterInEventParallels(filterParallels, eventParallels)
    }
}

export const isVisible = (event, filter, access, showHidden) => {
    console.log(event)
    const eventIsHidden = event.hidden
    if (showHidden && eventIsHidden) {
        return true
    } else if ((showHidden && !eventIsHidden) || !showHidden && eventIsHidden) {
        return false
    }
    const { filterDateSUnix, filterDateEUnix } = getFilterPeriodUnix(filter)
    const eventDateSUnix=event.DateStart
    const eventDateEUnix = event.DateEnd
    const eventAccess = getEventAccess(event.showToKids, access)
    const parallelsAndClassfilter = getParallelsAndClassfilter(filter.parallels, event.Parallel, filter.className, event.Class, filter.myClassToggle)
    return (
        (
            (eventDateSUnix >= filterDateSUnix && eventDateSUnix < filterDateEUnix)
            ||
            (eventDateEUnix >= filterDateSUnix && eventDateEUnix < filterDateEUnix)
        )
        && parallelsAndClassfilter && eventAccess)
}




