import React from "react";

export function EventHandlingForOnClick() {
  let cities = ["New York", "Los Angeles", "Charlotte"];
  if (cities.length === 0) {
    return (
      <>
        <h1>list is empty</h1>
      </>
    );
  }
  return (
    <>
      <h1> test</h1>
      <ul className="list-group">
        {cities.map(
          (
            city,
            index /*when using map, we can optionally include index as well */
          ) => (
            <li
              key={city}
              className="list-group-item"
              onClick={() => console.log("clicked", city, " at index ", index)}
            >
              {city}
            </li>
          )
        )}
      </ul>
    </>
  );
}

export function EventHandlingWithEventDisplay() {
  let cities = ["New York", "Los Angeles", "Charlotte"];
  return (
    <>
      <h1> test</h1>
      <ul className="list-group">
        {cities.map(
          (
            city,
            index /*when using map, we can optionally include index as well */
          ) => (
            <li
              key={city}
              className="list-group-item"
              onClick={(event) => console.log(event, city, " at index ", index)} // gives a lot of details about the event
            >
              {city}
            </li>
          )
        )}
      </ul>
    </>
  );
}

export function EventHandlingWithEventDisplayUsingFunction() {
  let cities = ["New York", "Los Angeles", "Charlotte"];

  return (
    <>
      <h1> test</h1>
      <ul className="list-group">
        {cities.map(
          (
            city,
            index /*when using map, we can optionally include index as well */
          ) => (
            <li
              key={city}
              className="list-group-item"
              onClick={(event) => handleClick(city, index, event)} // gives a lot of details about the event
            >
              {city}
            </li>
          )
        )}
      </ul>
    </>
  );
}

function handleClick(city: React.Key, index: number, event: React.MouseEvent) {
  console.log(event, city, " at index ", index);
}
