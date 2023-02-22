import Column from "../column/column";
import { useAppSelector } from '../../hooks/reduxTsHook';
import './columnsContainer.css'

const ColumnsContainer:React.FC = () => {

    const calcs = useAppSelector(state => state.calc.calcs)

    return(
        <div className="columns-container">
            {calcs.map((calc) => <Column key={calc.name} column={calc}/>)}
        </div>
    )
}

export default ColumnsContainer;