package net.fernandosalas.todo.controller;
import lombok.AllArgsConstructor;
import net.fernandosalas.todo.dto.TodoDto;
import net.fernandosalas.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/todos")
@AllArgsConstructor
public class TodoController {

    @Autowired
    private TodoService todoService;

    @PostMapping
    public ResponseEntity<TodoDto> addTodo(@RequestBody TodoDto todoDto) {
       TodoDto savedTodo = todoService.addTodo(todoDto);
       return new ResponseEntity<>(savedTodo, HttpStatus.CREATED);

    }

    @GetMapping("{id}")
    public ResponseEntity<TodoDto> getTodo(@PathVariable("id") Long todoId) {
       TodoDto todoDto = todoService.getTodo(todoId);
       return new ResponseEntity<>(todoDto, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<TodoDto>> getAllTodos() {
       List<TodoDto> todoDtoList = todoService.getAllTodos();
       return new ResponseEntity<>(todoDtoList, HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<TodoDto> updateTodo(@RequestBody TodoDto todoDto,
                                              @PathVariable("id") Long todoId) {
       TodoDto updatedTodo = todoService.updateTodo(todoDto, todoId);
       return new ResponseEntity<>(updatedTodo, HttpStatus.OK);
    }


}
