import { BsLightningChargeFill, BsPlus } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-100 text-gray-900 shadow-lg dark:bg-gray-900 dark:text-white">
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<FaPoo size="32" />} />
      <SideBarIcon icon={<BsPlus size="20" />} />
      <SideBarIcon icon={<BsLightningChargeFill size="20" />} />
      <Divider />
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />

export default Sidebar;