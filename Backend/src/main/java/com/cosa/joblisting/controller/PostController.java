package com.cosa.joblisting.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cosa.joblisting.model.Post;
import com.cosa.joblisting.repo.PostRepository;
import com.cosa.joblisting.repo.SearchRepoImplement;

import io.swagger.v3.oas.annotations.Hidden;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {
	
	@Autowired
	private PostRepository repo;
	
	@Autowired
	private SearchRepoImplement srepo;
	
	
	@Hidden
	@RequestMapping(value = "/")
	public void redirect(HttpServletResponse response) throws IOException {
		response.sendRedirect("/swagger-ui.html");
	}
	
	@GetMapping("/posts")
	public List<Post> getAllPosts(){
		return repo.findAll();
	}
	
	@GetMapping("/post/{text}")
	public List<Post> search(@PathVariable String text){
//		return repo.FindBy();
		return srepo.FindBySearch(text);
	}
	
	
	@PostMapping("/post")
	public Post addPost(@RequestBody Post post) {
		return repo.save(post);
	}
	
}
