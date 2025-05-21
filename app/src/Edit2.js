import {useState} from 'react';
import InserisciAlunni from './InserisciAlunni';
export default function Edit2(props){
    const [nome, setNome]= useState("");
    const [cognome, setCognome]= useState("");
    const [inModifica, setInModifica] = useState(false);

    async function modificaAlunno(){
        await fetch(`http://localhost:8080/alunni`, {
            method:`PUT`,
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify({nome: nome, cognome: cognome})
        });
    }
    return(
        <>
            <button >Edit2</button>
        
        </>
    );

}