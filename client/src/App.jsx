import { Router, RouterProvider } from 'react-router-dom';
import './App.css';
import './custom.css';
import { router } from './routes';
function App() {
  return (
    <>
      <div className='px-[4%] md:px-[10%] .pb-2'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
