package com.cosa.joblisting.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cosa.joblisting.model.Post;

public interface PostRepository extends MongoRepository<Post, String>{
	
}
