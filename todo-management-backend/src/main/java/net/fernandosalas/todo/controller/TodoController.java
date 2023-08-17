package net.fernandosalas.todo.controller;
import lombok.AllArgsConstructor;
import net.fernandosalas.todo.dto.TodoDto;
import net.fernandosalas.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/todos")
@AllArgsConstructor
public class TodoController {

    @Autowired
    private TodoService todoService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<TodoDto> addTodo(@RequestBody TodoDto todoDto) {
       TodoDto savedTodo = todoService.addTodo(todoDto);
       return new ResponseEntity<>(savedTodo, HttpStatus.CREATED);
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping("{id}")
    public ResponseEntity<TodoDto> getTodo(@PathVariable("id") Long todoId) {
       TodoDto todoDto = todoService.getTodo(todoId);
       return new ResponseEntity<>(todoDto, HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping
    public ResponseEntity<List<TodoDto>> getAllTodos() {
       List<TodoDto> todoDtoList = todoService.getAllTodos();
       return new ResponseEntity<>(todoDtoList, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("{id}")
    public ResponseEntity<TodoDto> updateTodo(@RequestBody TodoDto todoDto,
                                              @PathVariable("id") Long todoId) {
       TodoDto updatedTodo = todoService.updateTodo(todoDto, todoId);
       return new ResponseEntity<>(updatedTodo, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTodo(@PathVariable("id") Long todoId) {
        todoService.deleteTodo(todoId);
        return new ResponseEntity<>("Todo deleted successfully", HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @PatchMapping("{id}/complete")
    public ResponseEntity<TodoDto> completeTodo(@PathVariable("id") Long todoId) {
       TodoDto todoDto = todoService.completeTodo(todoId);
       return new ResponseEntity<>(todoDto, HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @PatchMapping("{id}/incomplete")
    public ResponseEntity<TodoDto> inCompleteTodo(@PathVariable("id") Long todoId){
       TodoDto todoDto = todoService.inCompleteTodo(todoId);
       return new ResponseEntity<>(todoDto, HttpStatus.OK);
    }


}
