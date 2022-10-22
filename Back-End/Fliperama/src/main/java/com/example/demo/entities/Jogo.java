package com.example.demo.entities;



import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;




@Entity
@Table(name = "game")
public class Jogo {
	
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	
	@Column(name = "game_name")
	private String nome;
	
	@Column(name= "game_value")
	private float valor;
	
	
	@JsonIgnore
	@OneToMany(mappedBy = "jogo", cascade = CascadeType.ALL)
	private List<Sala> salas = new ArrayList<Sala>();
	
	
	
	




	
	public List<Sala> getSalas() {
		return salas;
	}

	public void setSalas(List<Sala> salas) {
		this.salas = salas;
	}

	public Jogo() {
		
		
	}
	
	public Jogo(String nome, float valor) {
		super();
		this.nome = nome;
		this.valor = valor;
	}
	


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public float getValor() {
		return valor;
	}


	public void setValor(float valor) {
		this.valor = valor;
	}
	
	
	
	
	

}
