import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from "./atoms"

function App() {
  return (
    <RecoilRoot>
      <MainApp></MainApp>
    </RecoilRoot>
  )
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const messageNotificationCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);

  const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom);

  return (
    <>
      <button>Home</button>

      <button>My Network ({networkNotificationCount >= 100 ? '99+' : networkNotificationCount})</button>
      
      <button>Jobs ({jobsNotificationCount})</button>
      <button>Message ({messageNotificationCount})</button>
      <button>Notification ({notificationCount})</button>

      <button onClick={() => {
        setMessagingAtomCount(count => count+1);
      }}>Me</button>
    </>
  )
}

export default App
