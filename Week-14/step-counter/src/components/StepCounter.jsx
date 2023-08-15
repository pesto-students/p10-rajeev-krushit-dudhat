import { useDispatch, useSelector } from 'react-redux';
import { incSteps, resetSteps } from '../action/steps';


export default function StepCounter() {

  const { count } = useSelector((state) => state.steps);
  const dispatch = useDispatch();  

  const handleIncSteps = () => {
    dispatch(incSteps());
  };

  const handleResetSteps = () => {
    dispatch(resetSteps());
  };

  return (
    <div className="container m-auto w-1/6 border-black border-2 p-3 text-center mt-4">
      <h1 className='text-3xl m-4'> Step Counter </h1>
      <h1 className='text-xl'>{count} staps walked today!</h1>
      <div className='flex flex-col'>
        <button className='border-2 bg-blue-600 m-4 text-xl p-2' onClick={handleIncSteps}>Add Step</button>
        <button className='border-2 bg-blue-600 m-4 text-xl p-2 disabled:opacity-75' disabled={count === 0} onClick={handleResetSteps}>Reset Steps</button>
      </div>
    </div>
  );
}
