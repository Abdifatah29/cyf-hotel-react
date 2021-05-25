import React from "react";

const checkDifference = (a, b) => {
  let dt1 = new Date(a),
    dt2 = new Date(b);
  return Math.abs(dt2.getDate() - dt1.getDate());
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

const SearchResults = ({ bookings }) => (
  <table className="table table-striped">
    <TableHead />
    {Object.keys(bookings).map((item, key) => (
      <tbody key={key}>
        <tr>
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
              checkDifference(
                bookings[item].checkOutDate,
                bookings[item].checkInDate
              ) +
              " nights"}
          </td>
        </tr>
      </tbody>
    ))}
  </table>
);

export default SearchResults;
