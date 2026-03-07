package com.cosa.joblisting.repo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Service;

import com.cosa.joblisting.model.Post;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

@Service
public class SearchRepoImplement implements SearchRepository{

	@Autowired
	private MongoClient client;
	
	@Autowired
	private MongoConverter converter;
	
	@Override
	public List<Post> FindBySearch(String text) {
		// TODO Auto-generated method stub
		List<Post> list = new ArrayList<>();
		MongoDatabase database = client.getDatabase("cosa");
        MongoCollection<Document> collection = database.getCollection("CosaJobPost");
		AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new org.bson.Document("$search", 
			    new Document("text", 
			    new Document("query", text)
			                .append("path", Arrays.asList("techs", "profile", "desc"))
			                .append("matchCriteria", "any"))), 
			    new Document("$sort", 
			    new Document("exp", 1L)), 
			    new Document("$limit", 5L)));
		result.forEach(d -> list.add(converter.read(Post.class, d)));
		return list;
	}
	
}
