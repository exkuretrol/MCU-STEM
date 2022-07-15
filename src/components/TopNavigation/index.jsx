import { NavLink } from 'react-router-dom';
import { FaSun, FaMoon, FaSearch, FaRegBell, FaUser, FaHashtag } from 'react-icons/fa';
import useDarkMode from "../../hooks/useDarkMode";

const navigation = [
  { name: 'STEM計畫成果內容', href: '/stemreport' },
  { name: '雲端策略平台', href: '/platform' },
  { name: '推廣教育', href: '/education' },
  { name: '歷屆競賽', href: '/contest' },
  { name: '關於我們', href: '/about' }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const TopNavigation = () => {
  return (
    <div className='top-navigation'>
      <div className='h-16 max-w-8xl mx-auto flex flex-row items-center justify-evently'>
        <SiteLogo />
        <Buttons navigation={navigation} />
        <Divider />
        <ThemeIcon />
      </div>
    </div>
  );
};

const Divider = () => <hr className='vert-divider'></hr>;

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size='24' className='top-navigation-icon' />
      ) : (
        <FaMoon size='24' className='top-navigation-icon' />
      )}
    </span>
  );
};


// const Search = () => (
//   <div className='search'>
//     <input className='search-input' type='text' placeholder='Search...' />
//     <FaSearch size='18' className='text-secondary my-auto' />
//   </div>
// );

// const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon' />;
// const UserCircle = () => <FaUser size='24' className='top-navigation-icon' />;
const SiteLogo = () => (
  <a className='flex flex-row' href='/'>
    <Logo />
    <Title />
  </a>
);

const Logo = () => <img className='top-navigation-logo' src='STEM_logo.png' />;
const Title = () => (
  <div className='title-text-wrapper'>
    <h5 className='title-text'>問卷調查分析平台</h5>
    <small className='title-sub-text'>問卷調查系統之雲端策略與統計模式化</small>
  </div>
);

const Buttons = ({ navigation }) => {
  return (
    <div className='space-x-4 ml-auto'>
      {navigation.map((item) => (
        // <Link to={item.href}>{item.name}</Link>
        <Button item={item} />
      ))}
    </div>
  );
}

const Button = ({ item }) => (
  <NavLink
    to={item.href}
    className={({ isActive }) => isActive ? 'nav-item-active' : 'nav-item'}
  >
    {item.name}
  </NavLink>
);

export default TopNavigation;