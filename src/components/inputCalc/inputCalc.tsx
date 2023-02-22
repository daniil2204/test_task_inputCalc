import { useAppSelector,useAppDispatch } from '../../hooks/reduxTsHook';
import { changeStorageValue,changeTransferValue } from '../../store/calcSlice';

import './inputCalc.css'

const InputCalc:React.FC = () => {

    const inputStorageValue = useAppSelector(state => state.calc.storageValue);
    const inputTransferValue = useAppSelector(state => state.calc.transferValue);


    const dispatch = useAppDispatch();

    const inputStorageHandler = (value:number) => {
        dispatch(changeStorageValue(value));
    }

    const inputTransferHandler = (value:number) => {
        dispatch(changeTransferValue(value));
    }

    return(
        <>
            <div className='container'>
                <div className='container-block'>
                    <p>Storage:{inputStorageValue}GB</p>
                    <input
                        className='container-input' 
                        type='range' 
                        value={inputStorageValue} 
                        min='0' 
                        max='1000' 
                        onChange={(e) => inputStorageHandler(+e.target.value)}
                    />
                </div>
                <div className='container-block'>
                    <p>Transfer:{inputTransferValue}GB</p>
                    <input 
                        className='container-input'
                        type='range' 
                        value={inputTransferValue} 
                        min='0' 
                        max='1000' 
                        onChange={(e) => inputTransferHandler(+e.target.value)}
                    />
                </div>
            </div>
        </>
    )
}

export default InputCalc;