import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Alert } from './Alert';
import { EventHandlingWithEventDisplayUsingFunction } from './EventHandling';
import { UseProps, UseProps2, UseProps3 } from './StateManagement';
import { Counter, TextUpdater, UseReducerHook } from './ReactHooks';
import CounterWithRedux from './redux/CounterWithRedux';


function App() {

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
        <Button onClick={onClickButton}>My Button</Button>
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
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <div>
        <CounterWithRedux />
      </div>
    </>
  );
}

export default App;
