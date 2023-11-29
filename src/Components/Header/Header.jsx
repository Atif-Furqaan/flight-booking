import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import "./Header.css";

function Header() {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 3,
    room: 1,
  });

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} /> <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} /> <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} /> <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} /> <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} /> <span>Stays</span>
          </div>
        </div>
        <h1 className="headerTitle">
          A Lifetime of discounts? It's super awesome
        </h1>
        <p className="headerDesc">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free FlightDOMAIN account
        </p>
        <button className="headerBtn">Sign In / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you flying?"
              name=""
              id=""
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="headerSearchText"
            >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
            <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <button className="optionCounterButton">-</button>
                <span className="optionCounterNumber">1</span>
                <button className="optionCounterButton">+</button>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <button className="optionCounterButton">-</button>
                <span className="optionCounterNumber">0</span>
                <button className="optionCounterButton">+</button>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <button className="optionCounterButton">-</button>
                <span className="optionCounterNumber">1</span>
                <button className="optionCounterButton">+</button>
              </div>
            </div>
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
