package com.example.demo.controllers;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.ResourceNotFoundException;
import com.example.demo.entities.Jogo;
import com.example.demo.repositorys.JogoRepository;





@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class JogoController {

	
	
	@Autowired
	private JogoRepository jogoRepository;
	
	
	
	//GET all
	@GetMapping("/jogos")
	public List<Jogo> getAllJogos(){
		return jogoRepository.findAll();
	}
	
	
	//GET by Id
	@GetMapping("/jogos/{id}")
	public ResponseEntity<Jogo> getJogoById(@PathVariable Long id){
		Jogo jogo = jogoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Jogo inexistente com id "));
				return ResponseEntity.ok(jogo);
	}
	
	//CREATE
	@PostMapping("/jogos")
	public Jogo createJogo(@RequestBody Jogo jogo) {
		return jogoRepository.save(jogo);
	}
	
	
	//UPDATE
	@PutMapping("/jogos/{id}")
	public ResponseEntity<Jogo> updateJogo(@PathVariable Long id, @RequestBody Jogo jogosDetails){
		
		Jogo jogo = jogoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Jogo inexistente com id "));
		
		jogo.setNome(jogosDetails.getNome());
		jogo.setValor(jogosDetails.getValor());
		
		Jogo newJogo = jogoRepository.save(jogo);
		
		return ResponseEntity.ok(newJogo);
	}
	
	
	//DELETE
	@DeleteMapping("/jogos/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteJogo (@PathVariable Long id) {
		Jogo jogo = jogoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Jogo inexistente com id "));
		
		jogoRepository.delete(jogo);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
		
	}
	
	
	
	
	
	
}
