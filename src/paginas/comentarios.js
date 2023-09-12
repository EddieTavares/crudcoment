import React, {useEffect, useState} from "react";
import Axios from 'axios';
import '../css/comentarios.css'

const Comentarios = () => {
    const [inputs, setInputs] = useState([]);
    const [listRow, setlistRow] = useState([]);

    const handleChange = (elemento) => {
        const name = elemento.target.name;
        const value = elemento.target.value;

        setInputs(values => ({...values, [name] : value }));
    };

    const handleSubmit = (evento) => {
        evento.preventDefault(); 

        console.log(inputs);

        Axios.post("http://localhost:8082/add",
            {
                nome : inputs.nome,
                email : inputs.email,
                comentario : inputs.comentario
            }
        ).then(refreshList, []);

        setInputs(inputs.nome, '');        
        setInputs(inputs.email, '');        
        setInputs(inputs.comentario, '');  
    };

    const refreshList = () => {
        Axios.get("http://localhost:8082")
        .then((response) => {
            setlistRow(response.data);
        });
    };

    const handleDelete = (id) => {
        Axios.get("http://localhost:8082/excluir/" + id)
        .then(refreshList, []);
    };

    useEffect(refreshList, []);

    return (
        <main className="comentarios">
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome 
                    <input 
                        type='text' 
                        id='nome' 
                        name='nome' 
                        value={inputs.nome || ''} 
                        onChange={handleChange} />
                </label>

                <label htmlFor="email">E-mail 
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        value={inputs.email || ''} 
                        onChange={handleChange} />
                </label>

                <label htmlFor="comentario">Comentario 
                    <input 
                        type='text' 
                        id='comentario' 
                        name='comentario' 
                        value={inputs.comentario || ''} 
                        onChange={handleChange} />
                </label>

                <input type='submit' value='Gravar' />
            </form>

            {/* <table id="lista">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Comentario</th>
                    </tr>
                </thead>

                <tbody>
                    {listRow.map((val) => (
                        <tr key={val.id}>
                            <td>{val.nome}</td>
                            <td>{val.email}</td>
                            <td>{val.comentario}</td>

                            <td>
                                <button onClick={()=>{handleDelete(val.id)}}>Excluir</button>

                            </td>
                        </tr>
                    ))}
                </tbody>

            </table> */}

                    {listRow.map((val) => (

                        <div>
                            <h1>{val.nome}</h1>
                            <p>{val.email}</p>
                            <p>{val.comentario}</p>
                            <button onClick={()=>{handleDelete(val.id)}}>Excluir</button>
                            <hr/>

                        </div>
                    ))}

        </main>
    );
};

export default Comentarios;