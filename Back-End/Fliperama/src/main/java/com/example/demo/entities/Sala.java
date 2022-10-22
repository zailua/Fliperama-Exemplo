package com.example.demo.entities;



import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import javax.persistence.Table;





@Entity
@Table(name = "room")
public class Sala implements Serializable {
	private static final long serialVersionUID = 1L;
	
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "name_room")
	private String nome;
	
	@Column(name = "game_gen")
	private String gameGen;
	
	
	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "jogo_fk")
	private Jogo jogo;
	
	

	

	











	public Sala() {
		super();
		
	}




	public Sala(String nome, String gameGen) {
		super();
		this.nome = nome;
		this.gameGen = gameGen;
	}
	
	
	

	public Long getId() {
		return id;
	}






	public void setId(Long id) {
		this.id = id;
	}






	public String getNome() {
		return nome;
	}





	public void setNome(String nome) {
		this.nome = nome;
	}





	public String getGameGen() {
		return gameGen;
	}





	public void setGameGen(String gameGen) {
		this.gameGen = gameGen;
	}




	public Jogo getJogo() {
		return jogo;
	}




	public void setJogo(Jogo jogo) {
		this.jogo = jogo;
	}








	
	

}
