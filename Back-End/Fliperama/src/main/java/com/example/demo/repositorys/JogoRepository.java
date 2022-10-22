package com.example.demo.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Jogo;

@Repository
@Service
public interface JogoRepository extends JpaRepository<Jogo, Long> {

	
}
