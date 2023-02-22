import { useAppDispatch } from '../../hooks/reduxTsHook';
import { changeStorageValue,changeTransferValue } from '../../store/calcSlice';
import './btnTest.css'

const BtnTest:React.FC = () => {

    const dispatch = useAppDispatch();

    return(
        <div className="buttons-container">
            <button className='btn-test' onClick={() => {
                dispatch(changeStorageValue(50));
                dispatch(changeTransferValue(50));
            }}>Test a</button>
            <button className='btn-test' onClick={() => {
                dispatch(changeStorageValue(100));
                dispatch(changeTransferValue(200));
            }}>Test b</button>
            <button className='btn-test' onClick={() => {
                dispatch(changeStorageValue(300));
                dispatch(changeTransferValue(300));
            }}>Test c</button>
            <button className='btn-test' onClick={() => {
                dispatch(changeStorageValue(1000));
                dispatch(changeTransferValue(1000));
            }}>Test d</button>
        </div>
    )
}

export default BtnTest;