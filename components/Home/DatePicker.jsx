import React, { useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
const DatePickerComponent = ({ selectionRange, setEndDate, setStartDate }) => {
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }
  return (
    <div>
      <DateRangePicker
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={['#fd5b61']}
        onChange={handleSelect}
      />
    </div>
  )
}

export default DatePickerComponent
