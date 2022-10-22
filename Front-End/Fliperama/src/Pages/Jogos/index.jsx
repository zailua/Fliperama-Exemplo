import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from '../../Api/Api';
import './jogo.css'

export default function Index() {
  const [jogos, setJogos] = useState([]);
  const [redirect, setRedirect] = useState(false);


 

  useEffect(() => {
    Api.get('/jogos')
      .then((response) => {
        setJogos(response.data);
        setRedirect(false);
      })
      .catch((error) => {
        console.log(error);
      });

      
  }, [redirect]);

      function deleteJogo(id){
      Api.delete(`/jogos/${id}`)
      setRedirect(true);}
  

  return (
    <>
      <header className="header">
        <h1 className="container">Cadastro Jogos</h1>
      </header>
      <div className="container p-3">
        <Link to="/Jogos-Create" className="btn btn-sakura mb-2">
          Postar Jogo
        </Link>
        <div className="table-responsive d-flex justify-content-center">
          <table className="table table-hover table-sm table-colors">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {jogos.map((jogo) => (
                <tr className="text-white tr-hover" key={jogo.id}>
                  <td className="text-white">{jogo.id}</td>
                  <td className="text-white">{jogo.nome}</td>
                  <td className="text-white">{jogo.valor}</td>
                  <td className="d-flex justify-content-end">
                    <Link
                      to={`/Jogos-Update/${jogo.id}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteJogo(jogo.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
