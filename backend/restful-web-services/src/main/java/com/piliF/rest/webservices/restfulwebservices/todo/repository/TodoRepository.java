package com.piliF.rest.webservices.restfulwebservices.todo.repository;

import com.piliF.rest.webservices.restfulwebservices.todo.model.Todo;
import org.springframework.data.repository.CrudRepository;

public interface TodoRepository extends CrudRepository<Todo, Long> {
}
