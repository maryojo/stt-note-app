import Wrapper from './components/wrapper';
import Dictaphone from './components/Dictaphone'
import logo from './images/logo_notted.png'

function App() {
  return (
    <div className="App bg-gray-100">
    <Wrapper>
      <div className='w-3/4 mb-5 mt-7 md:mt-0 md:mb-10 flex flex-col items-center'>
        <img src={logo} className="w-24 md:w-32" alt=""/>
      </div>
      <div className=' flex flex-col md:flex-row w-full items-center md:items-start md:w-3/4 space-y-5 md:space-y-0 md:space-x-4'>
        <div className=' w-4/5 md:w-2/4 bg-white  shadow-sm md:shadow-md rounded-md'>
          <Dictaphone/>
        </div>
        <div className='flex flex-row w-4/5 md:w-2/4 m-0'>
          <div className='bg-white w-full h-20 rounded-md p-3 shadow-sm md:shadow-md'>here</div>
        </div>
      </div>
    </Wrapper>
    </div>
  );
}

export default App;
