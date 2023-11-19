import React from 'react'
import {ScrollView, Text, View, StyleSheet} from 'react-native'

const SelectableNumbers = ({
  isSelected,
  selectedLineNumber,
  selectedNumber,
  onSelectNumber,
}) => {
  const numbers1To40 = [
    {lineNo: 1, numbers: [1, 2, 3, 4, 5]},
    {lineNo: 2, numbers: [5, 6, 7, 8]},
    {lineNo: 3, numbers: [9, 10, 11, 12, 13]},
    {lineNo: 4, numbers: [14, 15, 16, 17]},
    {lineNo: 5, numbers: [18, 19, 20, 21, 22]},
    {lineNo: 6, numbers: [23, 24, 25, 26]},
    {lineNo: 7, numbers: [27, 28, 29, 30, 31]},
    {lineNo: 8, numbers: [32, 33, 34, 35]},
    {lineNo: 9, numbers: [36, 37, 38, 39, 40]},
  ]

  const _handlePress = (number, lineNo) => {
    onSelectNumber(number, lineNo)
  }

  return (
    <ScrollView>
      <View style={styles.rowWrapper}>
        {numbers1To40.map((row, rowIndex) => {
          return (
            <View key={rowIndex} style={styles.row}>
              {row?.numbers.map((number, index) => {
                return (
                  <Text
                    style={createIndividualNumberStyles(
                      isSelected,
                      selectedLineNumber,
                      selectedNumber,
                      number,
                      row,
                    )}
                    key={index}
                    onPress={() => _handlePress(number, row.lineNo)}>
                    {number}
                  </Text>
                )
              })}
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
}

const createIndividualNumberStyles = (
  isSelected,
  selectedLineNumber,
  selectedNumber,
  number,
  row,
) => {
  return {
    padding: 32,
    margin: number <= 5 && row.lineNo === 1 ? 4 : 0,
    fontWeight:
      isSelected &&
      selectedLineNumber === row.lineNo &&
      selectedNumber === number
        ? 'bold'
        : 'normal',
    fontSize:
      isSelected &&
      selectedLineNumber === row.lineNo &&
      selectedNumber === number
        ? 25
        : 16,
  }
}

export default SelectableNumbers

const styles = StyleSheet.create({
  rowWrapper: {
    marginHorizontal: 30,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
})
