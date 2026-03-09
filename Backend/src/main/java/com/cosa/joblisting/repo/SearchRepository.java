package com.cosa.joblisting.repo;

import java.util.List;
import com.cosa.joblisting.model.Post;

public interface SearchRepository{
	public List<Post> FindBySearch(String text);
	public List<Post> findAll();
	public Post save(Post post);
}
