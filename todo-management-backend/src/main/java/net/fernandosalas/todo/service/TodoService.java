package net.fernandosalas.todo.service;

import net.fernandosalas.todo.dto.RegisterDto;
import net.fernandosalas.todo.dto.TodoDto;

import java.util.List;

public interface TodoService {
    TodoDto addTodo(TodoDto todoDto);
    TodoDto getTodo(Long id);
    List<TodoDto> getAllTodos();
    TodoDto updateTodo(TodoDto todoDto, Long id);
    void deleteTodo(Long id);
    TodoDto completeTodo(Long id);
    TodoDto inCompleteTodo(Long id);

    interface AuthService {
        String register(RegisterDto registerDto);
    }
}
