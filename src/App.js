// import Sidebar from './components/SideBar';
// import ContentContainer from './components/ContentContainer';
// import ChannelBar from './components/ChannelBar';
import Footer from "./components/Footer";
import TopNavigation from "./components/TopNavigation";
import { Outlet } from 'react-router-dom';
import { useEffect } from "react";


function App() {
  useEffect(() => {
    document.title = '問卷調查分析平台'
  });
  return (
    <div className="flex flex-col">
      <TopNavigation />
      <Outlet />
      <Footer />
    </div>
  );
}



export default App;
