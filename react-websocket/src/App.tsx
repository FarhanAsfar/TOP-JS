import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null)
  const [messages, setMessages] = useState("");
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');

    socket.onopen = () => {
      console.log('Connected');
      setSocket(socket);
    }

    socket.onmessage = (message) => {
      console.log('Received message: ', message.data);
      setMessages(message.data);
    }
  }, [])

  if(!socket){
    return <div>
      Connecting to the server ... 
    </div>
  }
  
  return (
    <>
      {messages}
    </>
  )
}

export default App
