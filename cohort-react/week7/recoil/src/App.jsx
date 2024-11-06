import { RecoilRoot, useRecoilValue,  useSetRecoilState } from 'recoil';
import { countAtom, evenSelector } from './store/atoms/count';


function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count(){
  // console.log('re-rendered')
  return (
    <div>
      <CountRenderer/>
      <Buttons  />
    </div>
  )
}

function CountRenderer(){
  const count = useRecoilValue(countAtom);
  // console.log(count);
  return (
    <div>
      {count}

      <IsEven />
    </div>
  )
}

function IsEven(){
  const count = useRecoilValue(evenSelector);

  return (
    <div>
      {(count % 2 == 0 ) ? "Even" : null}
    </div>
  )
}

function Buttons(){
  const setCount = useSetRecoilState(countAtom);

  return (
    <div>
      <button onClick={() => {
        setCount(count => count+1)
      }}>Increase</button>

      <button onClick={() => {
        setCount(count => count-1)
      }}>Decrease</button>
    </div>
  )
}

export default App
