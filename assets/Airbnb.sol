// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract airbnb {
    address public owner;
    uint256 private counter;

    //! rent info
    struct rentInfo{
        string name;
        string city;
        string long;
        string lat;
        string img;
        string Description;
        uint256 maxGuests;
        uint256 pricePerDay;
        uint256 id; // increamet using counter
        address renter; // person wallet address who booked room
        string [] datesBooked;
    }
    // when ever new rent created we need to emit it

    event rentCreated(
        string name,
        string city,
        string lat,
        string long,
       string Description,
        string imgUrl,
        uint256 maxGuests,
        uint256 pricePerDay,
        string[] datesBooked,
        uint256 id,
        address renter
    );
    event newDatesBooked(
        string[] datesBooked,
        uint256 id,
        address booker,
        string city,
        string img
    );
    mapping(uint256 => rentInfo) rentals;
    uint256[] public rentalsIds;
    function addRentals(
        string memory name,
        string memory city,
        string memory lat,
        string memory long,
        string memory Description,
        string memory img,
        uint256 maxGuests,
        uint256 pricePerDay,
        string[] memory datesBooked
    )public {
        require(msg.sender == owner, "Only owner of smart contract can put up rentals");
        rentInfo storage newRental = rentals[counter];
        newRental.name = name;
        newRental.city = city;
        newRental.lat = lat;
        newRental.long = long;
        newRental.Description = Description;
        newRental.img = img;
        newRental.maxGuests = maxGuests;
        newRental.pricePerDay = pricePerDay;
        newRental.datesBooked = datesBooked;
        newRental.id = counter;
        newRental.renter = owner;
        rentalsIds.push(counter); // push the new bookinh 
        emit rentCreated(
                name, 
                city, 
                lat, 
                long, 
                Description, 
                img, 
                maxGuests, 
                pricePerDay, 
                datesBooked, 
                counter, 
                owner);
        counter++;
    }
    //! checking booking is a private functuion only used by smart contract
    function checkBookings(uint256 id, string[] memory newBookings) private view returns(bool){
        // loop thorught loops booking array
        for (uint i = 0; i < newBookings.length; i++) {
            for (uint j = 0; j < rentals[id].datesBooked.length; j++) {
                // in sol we can't compare two thing so we need to hash it using kaccak256
                if (keccak256(abi.encodePacked(rentals[id].datesBooked[j])) == keccak256(abi.encodePacked(newBookings[i]))) {
                    return false;
                }
            }
        }
        return true;
    }
        function addDatesBooked(uint256 id, string[] memory newBookings) public payable  {
        
        require(id < counter, "No such Rental");
            // we are going to check the booking is done or not
        require(checkBookings(id, newBookings), "Already Booked For Requested Date");
        require(msg.value == (rentals[id].pricePerDay * 1 ether * newBookings.length) , "Please submit the asking price in order to complete the purchase");
    
        for (uint i = 0; i < newBookings.length; i++) {
            rentals[id].datesBooked.push(newBookings[i]);
        }

        payable(owner).transfer(msg.value); // transfer the msg to owner
        emit newDatesBooked(newBookings, id, msg.sender, rentals[id].city,  rentals[id].img);
        
        }
        function getRental(uint256 id) public view returns (string memory, uint256, string[] memory){
        require(id < counter, "No such Rental");

        rentInfo storage s = rentals[id];
        return (s.name,s.pricePerDay,s.datesBooked);
        }

}