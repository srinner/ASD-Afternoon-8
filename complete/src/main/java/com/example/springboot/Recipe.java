package com.example.springboot;

import com.sun.org.apache.xpath.internal.operations.Bool;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import  javax.validation.constraints.NotNull;

@Entity // This tells Hibernate to make a table out of this class
public class Recipe {

	public Recipe(){

	}

	public Recipe(Integer id, String title, String description, String type, Integer preparationtime, Integer cookingtime, String content, Integer difficulty, Bool favorite){
		this.id = id;
		this.title = title;
		this.description = description;
		this.type = type;
		this.preparationtime = preparationtime;
		this.cookingtime = cookingtime;
		this.content = content;
		this.difficulty = difficulty;
		this.favorite = false;
	}

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;

	//@NotBlank
	private String title;

	//@Column(columnDefinition = "TEXT")
	//@NotBlank
	private String description;

	//@NotBlank
	private String type;

	//@NotNull
	private Integer preparationtime;

	//@NotNull
	private Integer cookingtime;

	//@NotBlank
	@Column(columnDefinition = "TEXT")
	private String content;

	private Integer difficulty;

	private Boolean favorite = false;






	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Integer getDifficulty() {
		return difficulty;
	}

	public void setDifficulty(Integer difficulty) {
		this.difficulty = difficulty;
	}

	public Integer getCookingtime() {
		return cookingtime;
	}

	public void setCookingtimeime(Integer cookingtime) {
		this.cookingtime = cookingtime;
	}

	public Integer getPreparationtime() {
		return preparationtime;
	}

	public void setPreparationtime(Integer preparationtime) {
		this.preparationtime = preparationtime;
	}

	public void setFavorite(Boolean favorite) {this.favorite = favorite;}

	public Boolean getFavorite() {return this.favorite;}

}