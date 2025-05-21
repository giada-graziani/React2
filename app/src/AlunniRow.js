import {useState} from 'react';
import Edit2 from './Edit2';
export default function AlunniRow(props){
    const a = props.alunno;
    const caricaAlunni= props.caricaAlunni;
    const [inConferma, setInConferma] = useState(false);

    async function cancellaAlunno(){
        await fetch(`http://localhost:8080/alunni/${a.id}`, {method:`DELETE`});
        caricaAlunni();
    }
    return(
        <tr>
            <td>{a.id}</td>
            <td>{a.nome}</td>
            <td>{a.cognome}</td>
            <td>
                {!inConferma ? (
                    <>
                        <button onClick={() => {setInConferma(true)}}>Cancella</button>
                        <Edit2></Edit2>
                    </>
                    
                ):(
                    <div>
                        <p>Sei sicuro?
                            <button onClick={cancellaAlunno}>Si</button>
                            <button onClick={() => {setInConferma(false)}}>No</button>
                        </p>
                        
                    </div>   
                )}
            </td>   
        </tr>
    );
}