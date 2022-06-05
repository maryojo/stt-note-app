import Wrapper from './components/wrapper';
import Dictaphone from './components/Dictaphone'
import logo from './images/logo_notted.png'

function App() {
  return (
    <div className="App bg-gray-100">
    <Wrapper>
      <div className='w-3/4 mb-10 flex flex-col items-center'>
        <img src={logo} width={150} alt=""/>
      </div>
      <div className=' flex flex-row w-3/4 space-x-4'>
        <div className='w-2/4 bg-white shadow-md rounded-md'>
          <Dictaphone/>
        </div>
        <div className='flex flex-row w-2/4'>
          <div className='bg-white w-full h-20 rounded-md p-3 shadow-md'>here</div>
        </div>
      </div>
    </Wrapper>
    </div>
  );
}

export default App;
