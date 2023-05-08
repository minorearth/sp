import { getEvents } from '../model/api'
import { offset, fullDate} from './utils'
import { GetHiddenTaskR } from '../model/repository'
import { HideTaskR } from '../model/repository'


export const FormatParallel = (data) => {
  const feed = data == null ? ' для всех' : String(data)
  return 'Параллели: ' + feed
}


export const FormatClass = (data) => {
  const feed = data.length == 0 ? 'Не указаны' : String(data.map(item => item.Title))
  return 'Классы: ' + feed
}



export const Period = (DateStart,DateEnd,startTime,EndTime) => {
  var now = new Date(DateStart);
  const timecurS = now.toISOString().substring(0, 10)
  var now = new Date(DateEnd);
  const timecurE = now.toISOString().substring(0, 10)
  if (timecurE != '1970-01-01') {
      return `c  ${startTime == null ? '' : startTime}  ${timecurS}  по ${EndTime == null ? '' : EndTime} ${timecurE}`
  }
  else {
      return `${startTime == null ? '' : startTime}  ${timecurS}`
  }


}

const DataClean = async (events) => {
  const hiddenTasks = await GetHiddenTaskR()
  // const res = {}
  // res["value"] = []
  res = []
  const data2 = events.value
  for (var event in data2) {
    var eventDateS = new Date(data2[event].DateStart);
    var eventDateE = new Date(data2[event].DateEnd);
    // data2[event].Id == '190' && console.log('3', eventDateS, eventDateE, data2[event].DateStart, data2[event].DateStart)
    eventDateS.setTime(eventDateS.getTime() - offset * 60 * 1000)
    eventDateE.setTime(eventDateE.getTime() - offset * 60 * 1000)
    // if (data2[event].Id=='350'){console.log(hiddenTasks[data2[event].Id],event)}

    res = [...res, { ...data2[event], 
      "DateStart": eventDateS, 
      'DateEnd': eventDateE, 
      "fullDate": fullDate(eventDateS, data2[event].Time) ,
      "hidden": hiddenTasks[data2[event].Id]!=undefined?hiddenTasks[data2[event].Id]:false,
      "Period": Period(data2[event].DateStart,data2[event].DateEnd,data2[event].Time,data2[event].EndTime),
      "Parallels": FormatParallel(data2[event].Parallel),
      "Classes": FormatClass(data2[event].Class),
      "showToKids": data2[event].Visibility!=null&&data2[event].Visibility.includes('Учащиеся')?true:false,

    }]
  }
  return res
}

export const getCleanEvents = async () => {
  const result = await getEvents()
  return await DataClean(result)
}

const HideInEvents = (id,events) => {
  let item2={...events.filter(item=>item.Id==id)[0], 'hidden': true}
  return [...events.filter(item=>item.Id!=id), item2]
 
}


export const HideTask = async (id,events) => {
  await HideTaskR(id)
  return HideInEvents(id,events)
}