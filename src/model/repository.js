import {HideTask,GetHiddenTask} from './localdata'

export const HideTaskR = async (Id) => {
    return await HideTask(Id)
}

export const GetHiddenTaskR = async () => {
    return await GetHiddenTask()
}
