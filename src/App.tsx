import AdminIndex from "./components/Bai06/AdminIndex"
import UserLayout from "./components/Bai07/UserLayout"
import Calculation from "./components/Calculation"
import ColorBox from "./components/ColorBox"
import FormatName from "./components/FormatName"
import ListCourse from "./components/ListCourse"
import UserInfo from "./components/UserInfo"


function App() {

  return (
    <div>
      {/* {Bài 1} */}
      <ListCourse></ListCourse>
      {/* {Bài 2} */}
      <Calculation></Calculation>
      {/* {Bài 3} */}
      <UserInfo></UserInfo>
      {/* {Bài 4} */}
      <div style={{ display: "flex" }}>
        <ColorBox color="red" />
        <ColorBox color="blue" />
        <ColorBox color="green" />
      </div>
      {/* {Bài 5} */}
      <FormatName></FormatName>
      {/* {Bài 6} */}
      <AdminIndex></AdminIndex>
      {/* {Bài 7} */}
      <UserLayout></UserLayout>
    </div>
  )
}

export default App
