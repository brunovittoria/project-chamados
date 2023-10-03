import Header from '../../components/Header'
import Title from '../../components/Title'
import { FiPlusCircle } from 'react-icons/fi'

import './new.css'

export default function New(){
    return(
        <div>
            <Header/>

            <div className='content'>
                <Title name="Novo Chamado">
                    <FiPlusCircle size={25}/>
                </Title>
            </div>
        </div>
    )
}