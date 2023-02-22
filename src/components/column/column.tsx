import { useState,useMemo,useEffect } from 'react';
import { useAppSelector } from '../../hooks/reduxTsHook';
import { Calc } from '../../store/calcSlice';
import './column.css'

interface ColumnProps{
    column:Calc
}

interface ObjLoop {
    [index: string]: number;
}


const Column:React.FC<ColumnProps> = ({column}) => {

    const inputStorageValue = useAppSelector(state => state.calc.storageValue);
    const inputTransferValue = useAppSelector(state => state.calc.transferValue);
    const [activeSelect,setActiveSelect] = useState(typeof column.storagePrice === 'object' ? Object.keys(column.storagePrice)[0] : '');
    const [clientWidth,setClientWidth] = useState(document.documentElement.clientWidth);
  
    const setWidth = () => setClientWidth(document.documentElement.clientWidth);

    useEffect(() => {
        window.addEventListener("resize", setWidth);
        return () => {
        window.removeEventListener("resize", setWidth);
        };
    },[])


    const priceValue = useMemo(() => {
        let price = 0;
        if (typeof column.storagePrice === 'object') {
            price = column.free ? 
                ((column.free < inputStorageValue ? inputStorageValue - column.free : 0) * column.storagePrice[activeSelect]) + ((column.free < inputTransferValue ? inputTransferValue - column.free : 0) * column.transferPrice)
                : 
                (inputStorageValue * column.storagePrice[activeSelect]) + (inputTransferValue * column.transferPrice)
        }else{
            price = column.free ? 
                (column.free < inputStorageValue ? inputStorageValue * column.storagePrice : 0) + (column.free < inputTransferValue ? inputTransferValue * column.transferPrice : 0)
                :
                (inputStorageValue * column.storagePrice) + (inputTransferValue * column.transferPrice)
        }
        if (column.max && column.max < price) {
            price = column.max;
        }
        return price;
    },[inputStorageValue,inputTransferValue,activeSelect])

    const sizeColumn = useMemo(() => {
        const size = Math.floor(priceValue)
        if (clientWidth > 750) {
            return {
                width:`${size*6}px`
            }
        }
        return {
            height:`${size*3}px`
        }
    },[priceValue,clientWidth])

    const btnCreate = (obj:ObjLoop) => {
        let keys:Array<string> = [];
        for (let key in obj) {
            keys.push(key);
        }
        return keys.map(key => <button 
                                    key={key} 
                                    className='column-btn'
                                    onClick={() => setActiveSelect(key)}>{key}</button>)
    }


    return(
        <div className='column'>
            <div>
                <p>{column.name}</p>
            </div>
            <div>
                <div className='column-line' style={sizeColumn}></div>
            </div>
            {typeof column.storagePrice === 'object' ?
            btnCreate(column.storagePrice)
            :
            null}
            <p className='column-price'>Price-{column.min && priceValue < column.min? column.min.toFixed(2) : priceValue.toFixed(2)}$</p>
        </div>
    )
}
export default Column;