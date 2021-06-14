import React, { useState } from "react";
import moment from "moment";

const styles = {
  backgroundColor: "gray",
  color: "red"
};

const TableHead = () => (
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">First Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Email</th>
      <th scope="col">Room id</th>
      <th scope="col">Check in date</th>
      <th scope="col">Check out date</th>
      <th scope="col">Number of nights</th>
    </tr>
  </thead>
);

const SearchResults = ({ bookings }) => {
  const [hightlight, setHighlight] = useState(false);

  const hightlightRow = () => setHighlight(!hightlight);

  return (
    <table className="table table-striped">
      <TableHead />
      {Object.keys(bookings).map((item, key) => {
        let date1 = moment(bookings[item].checkInDate);
        let date2 = moment(bookings[item].checkOutDate);

        return (
          <tbody className="tbody" key={key}>
            <tr style={hightlight ? styles : null} onClick={hightlightRow}>
              <td>{bookings[item].title}</td>
              <td>{bookings[item].firstName}</td>
              <td>{bookings[item].surname}</td>
              <td>{bookings[item].email}</td>
              <td>{bookings[item].roomId}</td>
              <td>{bookings[item].checkInDate}</td>
              <td>{bookings[item].checkOutDate}</td>
              <td>
                {bookings[item].title +
                  " " +
                  bookings[item].firstName +
                  " " +
                  bookings[item].surname +
                  " has a booking for " +
                  date2.diff(date1, "days") +
                  " nights"}
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default SearchResults;
