import '../Home/style.css';
import {Card} from '../../components/Card/index'
import { useState, useEffect } from 'react';
import axios from 'axios';

export function Home() {
  const [newName, setNewName] = useState('Nome');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name: '', avatar: ''})


  function handleAddStudent() {
    const newStudent = {
        name: newName,
        time: new Date().toLocaleDateString("pt-br", {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
    }

    setStudents(prevState => [...prevState, newStudent]);
  }


  useEffect(() => {
    axios.get('https://api.github.com/users/shelldonryan')
    .then(response => {
      const data = response.data;
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    })
  }, [])

  return (
    <div className='container'>
      <header>
      <h1>Lista de Presença</h1>
      <div>
        <strong>{user.name}</strong>
        <img src={user.avatar} alt="Foto de Perfil" />
      </div>
      </header>
      
      <input 
      type="text" 
      placeholder='Digite o nome...'
      onChange={f => setNewName(f.target.value)}
      />
      <button type='button' onClick={handleAddStudent}>
        Adicionar
      </button>
      <hr />
      <h2>Próximo da Lista: {newName}</h2>

      {
        students.map(student => <Card name={student.name} time={student.time} key={student.time}/>)
      }
    </div>
  )
}

