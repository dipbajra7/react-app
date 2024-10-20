import { useState } from "react";

export function DropDownList() {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1)
  //useState above returns an array which we are destructuring into two elements selectedIndex and setSelectedIndex
  //useState is a react hook
  return (
    <>
      <h1>Months</h1>
      <ul className="list-group">
        {months.map((month, index) =>
        (<li key={month} className={index === selectedIndex ? "list-group-item active" : "list-group-item"}
          onClick={() => setSelectedIndex(index)}>{month}</li>
        ))}
      </ul>
    </>
  );
}

interface Props {
  months: string[]
  heading: string
}

export function UseProps(props: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  return (
    <>
      <h1> {props.heading} </h1>
      <ul className="list-group">
        {props.months.map((month, index) =>
          <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={index}
            onClick={() => setSelectedIndex(index)}>{month}
          </li>)}
      </ul>
    </>
  )
}

//better way to do the above function:

export function UseProps2({ months, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  return (
    <>
      <h1> {heading} </h1>
      <ul className="list-group">
        {months.map((month, index) =>
          <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={index}
            onClick={() => setSelectedIndex(index)}>{month}
          </li>)}
      </ul>
    </>
  )
}




interface Props3 {
  months: string[]
  heading: string
  onSelectItem: (month: string) => void
}
export function UseProps3({ months, heading, onSelectItem }: Props3) {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  return (
    <>
      <h1> {heading} </h1>
      <ul className="list-group">
        {months.map((month, index) =>
          <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(month)
            }}>{month}
          </li>)}
      </ul>
    </>
  )
}