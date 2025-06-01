import React, { useState } from 'react';
import Title from '../components/Title';
export default function ESignatureApp() {
    const [name, setName] = useState('');
    const [date, setDate] = useState();
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
        const handleDateChange = (e) => {
        setDate(e.target.value)
    }
    const inputStyle = {
        border: 'none',
        borderBottom: '1px dotted #ccc',
        padding: '10px',
        margin: '10px 0',
    }
    document.title = "E-Signature App";
    document.body.style.backgroundColor = '#f0f0f0';
    return (
        <div className='container text-center'>
            <Title classes={"title"} text={name} />
            <Title classes={"main-title"} text={!date ? 'Signing Date': date} />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores iure, blanditiis sequi soluta, officia cumque, repellendus commodi voluptatibus culpa nemo provident delectus magni quo! Eligendi, id? Optio nulla blanditiis assumenda. Consequuntur vel dicta totam quibusdam aperiam quis esse, laboriosam cupiditate iure, sequi corrupti velit iste incidunt assumenda, modi recusandae autem. Iste esse quibusdam tempora debitis unde? Culpa esse ab incidunt quisquam, voluptate eaque! Eum ea ex error? Asperiores magni soluta neque similique accusantium perspiciatis. Repellendus consequatur ea molestiae quos, quae excepturi dolore distinctio! Rem adipisci laboriosam, labore corrupti ratione quod modi recusandae aliquam deserunt eos maxime expedita beatae eum quibusdam!</p>
            <footer className='d-flex' style={{ position: 'relative', top: '40vh', justifyContent: 'space-around',}}>
                <input type="date" value={date} style={inputStyle} onChange={handleDateChange}/>
                <input type="text" value={name} style={inputStyle} onChange={handleNameChange}/>
            </footer>
        </div>
    )
}
