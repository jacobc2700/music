import './styles/navigation.css';

const NavigationBar = () => {
  return (
    <nav class='navigation'>
      <h1 className='navigation_title'>Music App</h1>
      <ul className='navigation_links'>
        <li class='nav-item'>
          <a href='#'>Curriculum</a>
        </li>
        <li class='nav-item'>
          <a href='#'>Forum</a>
        </li>
        <li class='nav-item'>
          <a href='#'>News</a>
        </li>
        <li class='nav-item'>
          <a href='#'>Sign in</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
