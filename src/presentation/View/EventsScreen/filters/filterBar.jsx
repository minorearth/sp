import React from 'react'
import { ScrollView, StyleSheet,View } from 'react-native';
import { FilterBtn } from './filterBtn'
import { useViewModel } from './ViewModel';
import { ClassSwitch } from './classwitch';

export const FilterBar = () => {
    const vm = useViewModel()
    return (
        <View style={styles.filter}>
            <ScrollView horizontal>
                <FilterBtn label='Сегодня' onPeriodFilterPressed={vm.onPeriodFilterPressed} filterState={vm.PeriodFilterState} />
                <FilterBtn label='Завтра' onPeriodFilterPressed={vm.onPeriodFilterPressed} filterState={vm.PeriodFilterState} />
                <FilterBtn label='Неделя' onPeriodFilterPressed={vm.onPeriodFilterPressed} filterState={vm.PeriodFilterState} />
                <FilterBtn label='Месяц' onPeriodFilterPressed={vm.onPeriodFilterPressed} filterState={vm.PeriodFilterState} />
                <FilterBtn label='Все' onPeriodFilterPressed={vm.onPeriodFilterPressed} filterState={vm.PeriodFilterState} />
                <FilterBtn label='Прошедшие' onPeriodFilterPressed={vm.onPeriodFilterPressed} filterState={vm.PeriodFilterState} />
            </ScrollView >
            <ClassSwitch classSwitchEnabled={vm.classSwitchEnabled} onClassSwitchPress={vm.onClassSwitchPress} />
        </View>
    )


}

const styles = StyleSheet.create({

    filter: {
        backgroundColor: '#bee8ff',
    },

})
