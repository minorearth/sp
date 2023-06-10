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

const getParallelsAndClassfilter = (filterParallels, eventParallels, myClassName,myClassParallel, classesInEvent, myClassToggle) => {
    if (myClassToggle) {
        const myClassInEventClasses = checkMyClassInEventClasses(myClassName, classesInEvent)
        const myParallelInEventParallels = myClassParallel != undefined ? checkParallesFilterInEventParallels({ [myClassParallel]: true }, eventParallels) : false
        return (myParallelInEventParallels || myClassInEventClasses)
    } else {
        return checkParallesFilterInEventParallels(filterParallels, eventParallels)

    }
}

export const isVisible = (event, filter, access, showHidden) => {
    const eventIsHidden = event.hidden
    if (showHidden && eventIsHidden) {
        return true
    } else if ((showHidden && !eventIsHidden) || !showHidden && eventIsHidden) {
        return false
    }
    const eventAccess = getEventAccess(event.showToKids, access)
    const parallelsAndClassfilter = getParallelsAndClassfilter(filter.parallels, event.Parallel,filter.myClassName, filter.MyClassParallel, event.Class, filter.myClassToggle)
    // if (event.id==388) {
    //     console.log(event.DateStart, event.DateEnd, filter.filterDateS,filter.filterDateE,eventAccess,parallelsAndClassfilter)
    //     console.log(filter.parallels, event.Parallel,filter.myClassName, filter.MyClassParallel, event.Class, filter.myClassToggle)
    // }
    
    return (
        (
            (event.DateStart >= filter.filterDateS && event.DateStart < filter.filterDateE)
            ||
            (event.DateEnd >= filter.filterDateS && event.DateEnd < filter.filterDateE)
        )
        && parallelsAndClassfilter && eventAccess)
}




