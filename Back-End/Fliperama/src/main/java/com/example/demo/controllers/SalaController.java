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
import com.example.demo.entities.Sala;
import com.example.demo.repositorys.JogoRepository;
import com.example.demo.repositorys.SalaRepository;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class SalaController {
	
	@Autowired
	private SalaRepository salaRepository;
	
	@Autowired 
	private JogoRepository jogoRepository;
	
	
	//GET all
	@GetMapping("/salas")
	public List<Sala> getAllSalas(){
		return salaRepository.findAll();
	}
	
	
	//GET by Id
	@GetMapping("/salas/{id}")
	public ResponseEntity<Sala> getSalaById(@PathVariable Long id){
		Sala sala = salaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Sala inexistente com id "));
				return ResponseEntity.ok(sala);
	}
	
	//CREATE
	@PostMapping("/salas")
	public Sala createSala(@RequestBody Sala sala) {
		Jogo jogo = jogoRepository.findById(sala.getJogo().getId()).get();
		sala.setJogo(jogo);
		
		return salaRepository.save(sala);
	}
	
	
	//UPDATE
	@PutMapping("/salas/{id}")
	public ResponseEntity<Sala> updateSala(@PathVariable Long id, @RequestBody Sala salasDetails){
		
		Sala sala = salaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Sala inexistente com id "));
		Jogo jogo = jogoRepository.findById(salasDetails.getJogo().getId()).get();
		
		sala.setNome(salasDetails.getNome());
		sala.setGameGen(salasDetails.getGameGen());
		sala.setJogo(jogo);
		
		Sala newSala = salaRepository.save(sala);
		
		return ResponseEntity.ok(newSala);
	}
	
	
	//DELETE
	@DeleteMapping("/salas/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteSala (@PathVariable Long id) {
		Sala sala = salaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("sala inexistente com id "));
		
		salaRepository.delete(sala);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
		
	}
}
