import {useState} from 'react';
export default function AlunniRow(props){
    const [nome, setNome]= useState("");
    const [cognome, setCognome]= useState("");
    const [inConferma, setInConferma] = useState(false);
    const caricaAlunni = props.caricaAlunni;

    async function salvaAlunno(){
        await fetch(`http://localhost:8080/alunni`, {
            method:`POST`,
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify({nome: nome, cognome: cognome})
        });
        caricaAlunni();
    }
    return(
        //contenitore vuoto
        <>
            {!inConferma ? (
                <button onClick={() => {setInConferma(true)}}>Aggiungi alunno</button>
            ):(
                <div>
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" onChange={(evento) => setNome(evento.target.value)}/>
                    <br/>
                    <label for="cognome">Cognome:</label>
                    <input type="text" id="cognome" onChange={(evento) => setCognome(evento.target.value)}/>
                    <br />
                    <button onClick={salvaAlunno}>Salva</button>
                    <button onClick={() => {setInConferma(false)}}>Annulla</button>
                </div>   
            )}
        </>
        
    );
}