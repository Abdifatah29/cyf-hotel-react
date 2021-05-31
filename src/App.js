import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

import Bookings from "./Bookings";
import "./App.css";

const touristCards = [
  {
    name: "Glasgow",
    info:
      "Glasgow is a port city on the River Clyde in Scotland's western Lowlands. It's famed for its Victorian and art nouveau architecture.",
    image:
      "https://s19623.pcdn.co/wp-content/uploads/2015/10/A-weekend-in-Glasgow-48-hour-itinerary.jpg",
    link: "peoplemakeglasgow.com"
  },
  {
    name: "London",
    info:
      "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.",
    image:
      "https://www.cityam.com/wp-content/uploads/2020/02/London_Tower_Bridge_City.jpg",
    link: "visitlondon.com"
  },
  {
    name: "Manchester",
    info: "I mean, Come on! We all know that Manchester is Red #GGMU *)",
    image:
      "https://www.centreforcities.org/wp-content/uploads/2014/08/Manchester_x1650-1630x899.jpg",
    link: "visitmanchester.com"
  }
];

const address = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards cities={touristCards} />
      <Bookings />
      <Restaurant />
      <Footer address={address} />
    </div>
  );
};

export default App;
