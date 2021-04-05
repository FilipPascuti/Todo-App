package com.piliF.rest.webservices.restfulwebservices.todo;


import com.piliF.rest.webservices.restfulwebservices.todo.model.Todo;
import com.piliF.rest.webservices.restfulwebservices.todo.service.TodoHardcodedService;
import com.piliF.rest.webservices.restfulwebservices.todo.service.TodoServiceDBImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoController {

    @Autowired
    private final TodoServiceDBImpl service;

    public TodoController(TodoServiceDBImpl service) {
        this.service = service;
    }

    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username){
        return service.findAll();
    }

    @GetMapping("/users/{username}/todos/{id}")
    public Todo getAllTodo(@PathVariable String username, @PathVariable long id){
        return service.findById(id);
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
        if(this.service.deleteById(id) != null)
            return  ResponseEntity.noContent().build();
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username,
                                           @PathVariable long id,
                                           @RequestBody Todo todo){
        Todo todoUpdated = this.service.save(todo);
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    @PostMapping("/users/{username}/todos")
    public ResponseEntity<Void> saveTodo(@PathVariable String username,
                                           @RequestBody Todo todo){
        Todo createdTodo = this.service.save(todo);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().
                path("/{id}").buildAndExpand(createdTodo.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

}
