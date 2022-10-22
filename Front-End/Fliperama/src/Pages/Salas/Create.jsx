import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Api from '../../Api/Api'

export default function Create() {
	const [nome, setNome] = useState('')
	const [gameGen, setGameGen] = useState('')
	const [jogo, setJogo] = useState({ id: 0 })
	const [jogos, setJogos] = useState([])
	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		Api.get('/jogos')
			.then((response) => {
				setJogos(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	const criarOuEditarSala = (e) => {
		e.preventDefault()

		const sala = { nome, gameGen, jogo }

		if (id) {
			Api.put('/salas/' + id, sala).then((response) => {
				navigate('/Salas')
			})
		} else {
			Api.post('/salas/', sala).then((response) => {
				navigate('/Salas')
			})
		}
	}

	useEffect(() => {
		function getSalaById() {
			if (id) {
				Api.get(`/salas/${id}`)
					.then((response) => {
						setNome(response.data.nome)
						setGameGen(response.data.gameGen)
						setJogo({
							id: response.data.jogo.id,
						})
					})
					.catch((error) => {
						console.log(error)
					})
			}
		}

		getSalaById()
	}, [id])

	return (
		<div className="container py-3">
			<form>
				<fieldset>
					<legend>
						<h2 className="text-center">{id ? 'Editar' : 'Criar'}</h2>
					</legend>
					<div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Nome"
								className="form-control s"
								placeholder="Nome"
								value={nome}
								onChange={(e) => setNome(e.target.value)}
							/>
						</div>
					</div>

					<div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="GameGen"
								className="form-control s"
								placeholder="Genêro"
								value={gameGen}
								onChange={(e) => setGameGen(e.target.value)}
							/>
						</div>
					</div>
					<div className="form-group mb-3">
						<div className="align">
							<select
								id="JogoId_jogo"
								name="JogoId_jogo"
								className="form-select s"
								onChange={(e) =>
									setJogo({ id: Number.parseInt(e.target.value) })
								}
							>
								<option value="DEFAULT">
									{id ? jogo.nome : 'Escolha um Jogo'}
								</option>
								{jogos.map((jogo) => (
									<option key={jogo.id} value={jogo.id}>
										{jogo.nome}
									</option>
								))}
							</select>
						</div>
					</div>
          <div className="d-grid-sm d-flex justify-content-center">
					<button
						type="submit"
						className="btn btn-primary"
						onClick={(e) => criarOuEditarSala(e)}
					>
						Enviar
					</button>
					<Link
						to="/Salas"
						className="btn btn-danger"
						style={{ marginLeft: '10px' }}
					>
						Cancelar
					</Link>
          </div>
				</fieldset>
			</form>
		</div>
	)
}
