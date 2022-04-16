import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { FaUserAlt } from 'react-icons/fa'
const DatePickerComponent = ({ search }) => {
  //* set date on selection
  const [startDate, setStartDate] = useState(new Date())

  const [endDate, setEndDate] = useState(new Date())
  //* get no of guests
  const [noOfGuests, setNoOfGuests] = useState(1)
  //! selectionRange

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }
  const router = useRouter()
  const search_url = () => {
    router.push({
      pathname: '/rentals',
      query: {
        location: search,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    })
  }
  const resetInput = () => {
    setSearch('')
  }
  return (
    <div>
      <DateRangePicker
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={['#fd5b61']}
        onChange={handleSelect}
      />
      <div className="item-center mb-4 flex border-b bg-white p-2">
        <h2 className="flex-grow text-2xl font-semibold">Number of Gusts</h2>
        <FaUserAlt className="h-6" />
        <input
          value={noOfGuests}
          onChange={(e) => setNoOfGuests(e.target.value)}
          type="number"
          min={1}
          className="mb-1 w-12 pl-3 text-lg font-bold text-red-400 outline-none"
        />
      </div>
      {/* for button */}
      <div className="flex bg-white p-4">
        <button onClick={resetInput} className="flex-grow text-gray-600">
          Cancel
        </button>
        <button onClick={search_url} className="flex-grow text-red-400">
          Search
        </button>
      </div>
    </div>
  )
}

export default DatePickerComponent
