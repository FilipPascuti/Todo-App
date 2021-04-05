package com.piliF.rest.webservices.restfulwebservices.todo.service;

import com.piliF.rest.webservices.restfulwebservices.todo.model.Todo;
import com.piliF.rest.webservices.restfulwebservices.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class TodoServiceDBImpl implements TodoService{

    @Autowired
    private TodoRepository repository;

    @Override
    public List<Todo> findAll() {
        return StreamSupport.stream(repository.findAll().spliterator(), false).collect(Collectors.toList());
    }

    @Override
    public Todo deleteById(long id) {
        var result = repository.findById(id);
        repository.deleteById(id);
        return result.get();
    }

    @Override
    public Todo findById(long id) {
        return repository.findById(id).get();
    }

    @Override
    public Todo save(Todo todo) {
        return repository.save(todo);
    }
}
