import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

const App = () => {

  const [tasks] = useState([
        
    {
        id: 1,
        text: "Selçukla Toplantı",
        day: "14 Mart saat 19.00",
        reminder: true,
    },

    {
        id:2,
        text: "Final Sınavım",
        day: "29 Aralık saat 13.00",
        reminder: true,
    },

    {
         id: 3,
         text: "Bakkal Alışverişi",
         day: "15 Mart saat 13.00",
         reminder: false,
    },
])


const deleteTask= (id) => {
  console.log("delete", id)
}

  return(
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete=
      {deleteTask} />
    </div>
  )

}

export default App