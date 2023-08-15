import { useDispatch, useSelector } from 'react-redux';
import { toggleLight } from '../action/rooms';


export default function Room() {

  const { isLightOn } = useSelector((state) => state.rooms);
  const dispatch = useDispatch();

  console.log('state check ', isLightOn);
  
  const lightedness = isLightOn ? "lit" : "dark";

  const flipLight = () => {
    dispatch(toggleLight());
  };

  return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={flipLight}>flip</button>
      </div>
  );
}
