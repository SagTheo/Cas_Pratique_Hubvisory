import './App.css';
import { useEffect, useState } from 'react'

function App() {
  // const [testName, setTestName] = useState('')
  // const [testPicture, setTestPicture] = useState('')
  // const [testMovieName, setTestMovieName] = useState('')
  // const [testMoviePicture, setTestMoviePicture] = useState('')
  // const [testQuestion, setTestQuestion] = useState('')
  const [ids, setIds] = useState([])

  useEffect(() => {  
    fetch('http://localhost:3001/loadIds')
      .then(res => res.json())
      .then(data => console.log(data.response))
      // .then(data => setIds(data.response))
      .catch(err => console.log(err))

    // fetch('http://localhost:3001/testName')
    //   .then(res => res.json())
    //   .then(data => setTestName(data.response))
    //   .catch(err => console.log(err))
    
    // fetch('http://localhost:3001/testPicture')
    //   .then(res => res.json())
    //   .then(data => setTestPicture(data.response))
    //   .catch(err => console.log(err))

    // fetch('http://localhost:3001/testMoviePicture')
    //   .then(res => res.json())
    //   .then(data => setTestMoviePicture(data.response))
    //   .catch(err => console.log(err))
    
    // fetch('http://localhost:3001/testMovieName')
    //   .then(res => res.json())
    //   .then(data => setTestMovieName(data.response))
    //   .catch(err => console.log(err))

    // fetch('http://localhost:3001/testQuestion')
    //   .then(res => res.json())
    //   .then(data => setTestQuestion(data.response))
    //   .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      {/* {
        ids.map(id => <p>{id}</p>)
      } */}

      {/* <p>{testQuestion}</p> */}

      {/* <p>{testName}</p>

      <img src={`https://image.tmdb.org/t/p/w300/${testPicture}`} alt={testName} /> 

      <p>{testMovieName}</p>

      <img src={`https://image.tmdb.org/t/p/w300/${testMoviePicture}`} alt={testMovieName} /> */}
    </div>
  );
}

export default App;
