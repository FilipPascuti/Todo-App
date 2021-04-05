package com.piliF.rest.webservices.restfulwebservices.todo.service;

import com.piliF.rest.webservices.restfulwebservices.todo.model.Todo;

import java.util.List;

public interface TodoService {
    List<Todo> findAll();
    Todo deleteById(long id);
    Todo findById(long id);
    Todo save(Todo todo);
}
