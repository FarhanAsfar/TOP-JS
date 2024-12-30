import { RevenueCard } from "./components/RevenueCard"


function App() {

  return (
    <>
      <div className="grid grid-cols-5 p-5">
        <RevenueCard title={"Amount Pending"} amount={"32342.23"} orderCount={34}/>
      </div>
    </>
  )
}

export default App
