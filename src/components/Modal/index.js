import './modal.css'
import { FiX } from 'react-icons/fi'

export default function Modal({conteudo, close}) {
    return(
        <div className='modal'>
            <div className='container'>
                <button className='close' onClick={close}>
                    <FiX size={25} color='#FFF'/>
                    Back
                </button>

                <main>
                    <h2>Ticket Detail</h2>

                    <div className='row'>
                        <span>
                            Client: <i>{conteudo.cliente}</i>
                        </span>
                    </div>

                    <div className='row'>
                        <span>
                            Subject: <i>{conteudo.assunto}</i>
                        </span>
                        <span>
                            Registered at: <i>{conteudo.createdFormat}</i>
                        </span>
                    </div>

                    <div className='row'>
                        <span>
                            Status: 
                            <i className='status-badge' style={{ color: '#FFF', backgroundColor: conteudo.status === 'Aberto' ? '#5cb85c' : '#999'}}>
                                {conteudo.status}
                            </i>
                        </span>
                    </div>

                    {conteudo.complemento !== '' && (
                        <>
                            <h3>Complement</h3>
                            <p>{conteudo.complemento}</p>
                        </>
                        )}
                
                </main>
            </div>
        </div>
    )
}