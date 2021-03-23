package com.piliF.rest.webservices.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {

    private static List<Todo> todos = new ArrayList<>();
    private static long idCounter = 0;


    static{
        todos.add(new Todo(++idCounter, "piliF", "Learn to dance", new Date(), false));
        todos.add(new Todo(++idCounter, "piliF", "Learn about Spring Boot", new Date(), false));
        todos.add(new Todo(++idCounter, "piliF", "Learn Angular", new Date(), false));
    }

    public List<Todo> findAll(){
        return todos;
    }

    public Todo deleteById(long id){
        Todo todo = findById(id);

        if(todo == null) return null;

        if(todos.remove(todo))
            return todo;
        return null;
    }

    public Todo findById(long id) {
        return todos.stream().filter( todo -> todo.getId() == id ).findFirst().orElse(null);
    }

    public Todo save(Todo todo){
        if(todo.getId() == -1 || todo.getId() == 0){
            todo.setId(++idCounter);
        }else{
            deleteById(todo.getId());
        }
        todos.add(todo);
        return todo;
    }

}
