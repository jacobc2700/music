import NavigationBar from './NavigationBar';
import Landing from './components/Landing';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  console.log(API_KEY);
  const title = 'Welcome to Music by Humboo';

  return (
    <div className='App'>
      <div className='content'>
        {/* <Home /> */}
        <NavigationBar />
        <Landing />
      </div>
    </div>
  );
}

export default App;
