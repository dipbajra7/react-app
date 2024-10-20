import { UseProps, UseProps2, UseProps3 } from "./StateManagement";
import { EventHandlingWithEventDisplayUsingFunction } from "./EventHandling"
import { Alert } from "./Alert"

export default function App() {
  let months = ['Jan', 'Feb']
  let items = ['backpack', 'knife', 'lighter']
  let cities = ['LA', 'SFO', 'CLT']
  const onSelectItem = (month: String) => console.log(month)
  return (
    <div>
      <Alert>
        <div>This is an alert</div>
        <h1> this is also an alert</h1>
      </Alert>
      <EventHandlingWithEventDisplayUsingFunction />
      <UseProps months={cities} heading={"Cities"} />
      <UseProps2 months={items} heading={"Camping Gear"} />
      <UseProps3 months={months} heading={"Months"} onSelectItem={onSelectItem} />
    </div>
  );
}

//export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
