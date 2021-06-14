import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  const [bookings, setBookings] = useState(FakeBookings);

  const handleSetBooking = () => {
    setBookings(bookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults
          // handleSetBooking = {handleSetBooking}
          bookings={bookings}
        />
      </div>
    </div>
  );
};

export default Bookings;
