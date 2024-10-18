export default function ListGroup() {
  return (
    <>
      <h1> test</h1>
      <ul className="list-group">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    </>
  );
}

export function DynamicListGroup() {
  const cities = ["New York", "Los Angeles", "Charlotte"];
  return (
    <>
      <h1> test</h1>
      <ul className="list-group">
        {cities.map((city) => (
          <li key={city} className="list-group-item">
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export function ConditionalDynamicListGroup() {
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
      <h1> List</h1>
      <ul className="list-group">
        {cities.map((city) => (
          <li key={city} className="list-group-item">
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export function EventHandling() {
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
