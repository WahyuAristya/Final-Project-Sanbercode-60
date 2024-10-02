import React from 'react'
import '../App.css';

const tugas7 = (props) => {
  return (
    <div>
        <header className='App'>
            <div className="App-header">
                <h1>Data diri peserta kelas ReactJS</h1>
            </div>
            <ul>
                <li>Nama Lengkap : <span>{props.name}</span> </li>
                <li>Email : <span>{props.email}</span> </li>
                <li>Batch Pelatihan : <span>{props.batch}</span> </li>
            </ul>
        </header>
    </div>
  )
}

export default tugas7
