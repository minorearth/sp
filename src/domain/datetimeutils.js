// export const RightNow = new Date('2022-08-31T22:00:00.000Z')
export const offset = new Date().getTimezoneOffset()
export const RightNow = new Date()



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


