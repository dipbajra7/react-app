import { UseProps, UseProps2, UseProps3 } from "./StateManagement";
import { EventHandlingWithEventDisplayUsingFunction } from "./EventHandling"
import { Alert } from "./Alert"
import { Button } from "./Button"
import { Counter, TextUpdater, UseReducerHook, DisplayBackendData, Test } from "./ReactHooks"
import { CounterWithRedux } from "./redux/CounterWithRedux";


export default function App() {
  let months = ['Jan', 'Feb']
  let items = ['backpack', 'knife', 'lighter']
  let cities = ['LA', 'SFO', 'CLT']
  const onSelectItem = (month: String) => console.log(month)

  const onClickButton = () => console.log("button clicked")
  return (
    <>
      <div>
        <Alert>
          <div>This is an alert</div>
          <h1> this is also an alert</h1>
          This is also another alert
        </Alert>
        <EventHandlingWithEventDisplayUsingFunction />
        <UseProps months={cities} heading={"Cities"} />
        <UseProps2 months={items} heading={"Camping Gear"} />
        <UseProps3 months={months} heading={"Months"} onSelectItem={onSelectItem} />
        <Button onClickButton={onClickButton}>My Button</Button>
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <TextUpdater />
      </div>
      <div>
        <UseReducerHook />
      </div>

      {/* <div><DisplayBackendData/></div> */}
      <div><Test /></div>
      <div><CounterWithRedux /></div>
    </>
  );
}