import AsyncStorage from '@react-native-async-storage/async-storage';

export const HideTask = async (Id) => {
    const hiddenTasks = await AsyncStorage.getItem('@HiddenTasks')
    const hiddenTasksJ={...JSON.parse(hiddenTasks), [Id]: true}
    await AsyncStorage.setItem('@HiddenTasks', JSON.stringify(hiddenTasksJ))
}

export const GetHiddenTask = async () => {
    const hiddenTasks = await AsyncStorage.getItem('@HiddenTasks')||"{}"
    return JSON.parse(hiddenTasks)
}

