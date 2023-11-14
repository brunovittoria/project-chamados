import { useState } from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'

import { FiUser } from 'react-icons/fi'

import { db } from '../../services/firebaseConnection'
import { addDoc, collection } from 'firebase/firestore'

import { toast } from 'react-toastify'

export default function Customers(){
    const [nome, setNome] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [endereco, setEndereco] = useState('')

    async function handleRegister(e){
        e.preventDefault()

        if(nome !== '' && cnpj !== '' && endereco !== ''){
           await addDoc(collection(db, "customers"), {
            nomeFantasia: nome,
            cnpj: cnpj,
            endereco: endereco,
           })

           .then(() => {
            setNome('')
            setCnpj('')
            setEndereco('')
            toast.success("Company Registered!")
           })
           .catch((error) => {
            console.log(error)
            toast.error("Error at registering.")
           })
           
        }else{
            toast.error("Fill in all the fields!")
        }



    }

    return(
        <div>
            <Header/>
            <div className='content'>
                <Title name="Clientes">
                    <FiUser size={25} />
                </Title>

                <div className='container'>
                    <form className='form-profile' onSubmit={handleRegister}>
                        <label>Company Name</label>
                        <input
                          type='text'
                          placeholder='Company Name'
                          value={nome}
                          onChange={(e) => setNome(e.target.value)}
                        />

                        <label>CNPJ</label>
                        <input
                          type='text'
                          placeholder='CNPJ'
                          value={cnpj}
                          onChange={(e) => setCnpj(e.target.value)}
                        />

                        <label>Company Adress</label>
                        <input
                          type='text'
                          placeholder='Company Adress'
                          value={endereco}
                          onChange={(e) => setEndereco(e.target.value)}
                        />

                        <button type='submit'>
                            Save
                        </button>
                    </form>
                </div>

            </div>
            
        </div>
    )
}