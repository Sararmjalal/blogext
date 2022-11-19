import StateProvider from "./stateProvider"

const DashboardLayout = ({ children }) => {
  


  return (
    <StateProvider>
      <div style={{height: "20px", background: "red"}}></div>
      <main>{children}</main>
    </StateProvider>
  )
}

export default DashboardLayout