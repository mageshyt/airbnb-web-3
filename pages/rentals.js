import { useRouter } from 'next/router'
import React from 'react'

const rentals = () => {
  const router = useRouter()
  const { location, startDate, endDate, noOfGuests } = router.query
  console.log(location, startDate, endDate, noOfGuests)
  return <div>rentals</div>
}

export default rentals
