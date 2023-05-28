import { getEvents } from '../model/api'
import { offset } from './datetimeutils'
import { GetHiddenTaskR } from '../model/repository'
import { HideTaskR } from '../model/repository'


export const FormatParallel = (data) => {
  const feed = data == null ? ' для всех' : String(data)
  return 'Параллели: ' + feed
}


export const FormatClass = (data) => {
  const feed = data.length == 0 ? 'Не указаны' : String(data.map(item => item.Title))
  return `Классы: ${feed}`
}



export const Period = (DateStart, DateEnd, startTime, EndTime) => {
  var now = new Date(DateStart);
  now.setTime(now.getTime()+24*60*60000)
  const timecurS = now.toISOString().substring(0, 10)
  now = new Date(DateEnd);
  now.setTime(now.getTime()+24*60*60000)
  const timecurE = now.toISOString().substring(0, 10)
  if (timecurE != '1970-01-01') {
    return `c  ${startTime == null ? '' : startTime}  ${timecurS}  по ${EndTime == null ? '' : EndTime} ${timecurE}`
  }
  else {
    return `${startTime == null ? '' : startTime}  ${timecurS}`
  }
}


export const fullSDateTimeUNIX = (dateUNIX, time) => {
  if (time == null || !(time.includes(':')||time.includes('.'))) {
    return 'null'
  }
  const separator=time.includes(':')?':':'.'
  const [hour, minutes] = time.split(separator).map(x => Number(x))
  return dateUNIX + (hour * 60 + minutes) * 60000 -offset*60000
}


const DataClean = async (events) => {
  const hiddenTasks = await GetHiddenTaskR()
  let res = []
  const data2 = events.value
  for (let event of data2) {
    const eventDateS = new Date(event.DateStart);
    const eventDateE = new Date(event.DateEnd);

    res = [...res, {
      "id":event.Id,
      "Address": event.Address,
      "Class": event.Class,
      "Description":event.Description,
      "Description2":event.Description2,
      "EndTime":event.EndTime,
      "Mainman":event.MainMan.Title,
      "Parallel":event.Parallel,
      "Title":event.Title,
      "Visibility":event.Visibility,
      "DateStart": eventDateS.getTime()-offset*60000,
      'DateEnd': eventDateE.getTime()-offset*60000,
      "fullSDate": fullSDateTimeUNIX(eventDateS.getTime(), event.Time),
      "hidden": hiddenTasks[event.Id] != undefined ? hiddenTasks[event.Id] : false,
      "Period": Period(event.DateStart, event.DateEnd, event.Time, event.EndTime),
      "Parallels": FormatParallel(event.Parallel),
      "Classes": FormatClass(event.Class),
      "showToKids": event.Visibility != null && event.Visibility.includes('Учащиеся') ? true : false,

    }]
  }
  return res
}

export const getCleanEvents = async () => {
  const result = await getEvents()
  return await DataClean(result)
}

const HideInEvents = (id, events) => {
  let item2 = { ...events.filter(item => item.id == id)[0], 'hidden': true }
  return [...events.filter(item => item.id != id), item2]

}


export const HideTask = async (id, events) => {
  await HideTaskR(id)
  return HideInEvents(id, events)
}