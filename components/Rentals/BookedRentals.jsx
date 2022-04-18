import React, { useEffect } from 'react'
import { useState } from 'react'
import { Modal } from 'web3uikit'
import { useMoralis } from 'react-moralis'
import { Card } from 'web3uikit'
const BookedRentals = ({ visible, setVisible }) => {
  const { Moralis, account } = useMoralis()
  const [BookedRental, setBookedRental] = useState()

  useEffect(() => {
    const fetchBookedRental = async () => {
        try{

      const Booked = Moralis?.Object.extend('newBookings') //newBookings is the name of the class in moralis db
      const query = new Moralis?.Query(Booked) //query is the object of the class
      // ! going to get the data from the db to the current user
      query.equalTo('booker', account)
        const results = await query?.find()
         setBookedRental(results)
        }
        catch(err){
            console.log(err)
        }
    }
    fetchBookedRental()
  }, [visible])
  //   console.log('Booked 💥', BookedRental)
  return (
    <div className="overflow-x-scroll">
      <Modal
        title="Your Booking"
        isVisible={visible}
        onCloseButtonPressed={() => setVisible(false)}
        hasFooter={false}
      >
        <div className="flex justify-center gap-4 overflow-x-scroll ">
          {BookedRental &&
            BookedRental.map((item, index) => {
              return (
                <div className=" w-[200px]" key={index}>
                  <Card
                    title={item.attributes.city.slice(25)}
                    description={` ${item.attributes.datesBooked[0]} `}
                  >
                    <img className="h-[90px]" src={item?.attributes?.img} />
                  </Card>
                </div>
              )
            })}
        </div>
      </Modal>
    </div>
  )
}

export default BookedRentals
