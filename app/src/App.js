import logo from './logo.svg';
import './App.css';
import AlunniRow from './AlunniRow';
import InserisciAlunni from './InserisciAlunni';
import {useState} from 'react';



function App() {
  //si dichiara la variabile di stato
  const [alunni, setAlunni]= useState([]);

  //si dichiara la variabile di stato loading
  const [loading, setLoading] = useState(false);

  //si dichiara asincrona la funzione
  async function caricaAlunni(){
  //chiamata ASINCRONA a questo url con methodo get per ottenere gli alunni
  /*
    fetch("http://localhost:8080/alunni",{method:"GET"}).then(function(response){
      console.log(response);
      response.json().then(function(data){
        console.log(data);
        });
    });
  */


    setLoading(true);
  //chimata SINCRONA che traforma la funzione asincrona
    const response= await fetch("http://localhost:8080/alunni",{method:"GET"});
    const data= await response.json();
  //inseriamo in alunni l'array con gli studenti
    setAlunni(data);
    setLoading(false);
  }

  return (
    <div className="App">
      {loading &&
        <div>caricamento in corso...</div>
      }
      {!loading &&
        <>
          {alunni.length === 0 ? (
            <button onClick={caricaAlunni}>carica alunni</button>

          ):(
            //tag contenitore importantissimo
            <>
            <h1>Ecco la tabella</h1>
            <table border="1">
              <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>COGNOME</th>
                <th>X</th>
              </tr>
              
              {alunni.map(a =>
                <AlunniRow alunno={a} caricaAlunni={caricaAlunni}></AlunniRow>
              )}
            </table>
              <InserisciAlunni caricaAlunni={caricaAlunni}></InserisciAlunni>
            </>
          )}
        </>
      }
    </div>
  );
}

export default App;
