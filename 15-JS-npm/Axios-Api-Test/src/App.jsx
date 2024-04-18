import './App.css'
import axios from 'axios'

function App() {

//--- Realizar petición tipo GET con Axios y async-await
const getUser = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users/8");
    console.log(response.data);
    console.log(`El usuario se llama ${response.data.name}`);
  } catch(error) {
    console.error("No cumplió su promesa", error);
  }
}

//--- Realizar petición tipo POST con Axios y async-await
const postUser = async () => {
  try {
    //Variable donde guardo el body que enviaré (datos)
    const body = {
      userId: 2024,
      title: "Axios",
      body: "Probando la petición POST con Axios en React"
    }
    //Variable donde guardo el header
    const headers = {
      'Content-Type': 'application/json'
    }

    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", body, headers);
    console.log(response.data);
  } catch(error) {
    console.error("Mensaje de error", error);
  }
}


  return (
    <>
      <div>
        <h1 className="box">HTTP - Axios</h1>
      </div>
      <div className="card">
        <button onClick={getUser}>
          Get Method
        </button>
        <button onClick={postUser}>
          Post Method
        </button>
      </div>
    </>
  )
}

export default App
