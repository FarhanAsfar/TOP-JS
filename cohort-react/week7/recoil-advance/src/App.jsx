import { RecoilRoot, useRecoilValue } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atoms"

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


  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  
  return (
    <>
      <button>Home</button>

      <button>My Network ({networkNotificationCount >= 100 ? '99+' : networkNotificationCount})</button>
      
      <button>Jobs ({jobsNotificationCount})</button>
      <button>Message ({messageNotificationCount})</button>
      <button>Notification ({notificationCount})</button>

      <button>Me {totalNotificationCount}</button>
    </>
  )
}

export default App
