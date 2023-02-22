import { createSlice,PayloadAction  } from '@reduxjs/toolkit';

export interface Calc{
    name:string;
    min?: number;
    max?:number;
    storagePrice:number | 
    {
        [key: string]: number,
    } | 
    {
        [key: string]: number,
    };
    transferPrice:number;
    free?:number
}

interface Calcs{
    calcs:Calc[];
    storageValue:number;
    transferValue:number;
}


const initialState:Calcs = {
    calcs:[
        {
            name:'backblaze',
            min:7,
            storagePrice:0.005,
            transferPrice:0.01,
        },
        {
            name:'bunny',
            max:10,
            storagePrice:
            {
                "HDD":0.01,
                "SDD":0.02,
            },
            transferPrice:0.01,
        },
        {
            name:'scaleway',
            storagePrice:{
                Multi:0.06,
                Single:0.03,
            },
            transferPrice:0.02,
            free:75,
        },
        {
            name:'vultr',
            min:5,
            storagePrice:0.01,
            transferPrice:0.01,
        }
    ],
    storageValue:0,
    transferValue:0,
}


const calcSlice = createSlice({
    name:'calcs',
    initialState,
    reducers:{
        changeStorageValue(state,action:PayloadAction<number>){
            state.storageValue = action.payload;
        },
        changeTransferValue(state,action:PayloadAction<number>){
            state.transferValue = action.payload;
        },
    }
})

export const {changeStorageValue,changeTransferValue} = calcSlice.actions;
export default calcSlice.reducer;