import { RevenueCard } from "./components/RevenueCard"


function App() {

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-cyan-800">earth</div>
        <div className="bg-green-400">venuus</div>
        <div className="bg-blue-300">mercury</div> 
      </div>

      <RevenueCard />
    </>
  )
}

export default App
