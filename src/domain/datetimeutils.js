// export const RightNow = new Date('2022-08-31T22:00:00.000Z')
export const offset = new Date().getTimezoneOffset()
export const RightNow = new Date()
RightNow.setTime(RightNow.getTime() - offset * 60 * 1000)
export const TodayS = new Date(RightNow.toDateString())
TodayS.setTime(TodayS.getTime() - offset * 60 * 1000)
export const TodayE = new Date(TodayS.toDateString())
TodayE.setTime(TodayE.getTime() + 24 * 60 * 60 * 1000 - offset * 60 * 1000)

export const getDateString = (dateMills) => {
    const DateString = new Date(dateMills)
    return `${DateString.toLocaleDateString()} ${DateString.toLocaleTimeString()}`
}


export const NotificationDateTime = (eventDateTime) => {
    const notificationOffset = 15

    if (eventDateTime != 'null') {
        const shdate = new Date(eventDateTime)
        if (shdate > RightNow) {
            shdate.setTime(shdate.getTime() - 180 * 60 * 1000 - notificationOffset * 60 * 1000)
            return shdate
        } else return undefined
    }
    else return undefined
}


