package net.fernandosalas.todo.service.implementation;
import lombok.AllArgsConstructor;
import net.fernandosalas.todo.dto.TodoDto;
import net.fernandosalas.todo.entity.Todo;
import net.fernandosalas.todo.repository.TodoRepository;
import net.fernandosalas.todo.service.TodoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class TodoServiceImplementation implements TodoService {

    @Autowired
    private TodoRepository todoRepository;

    @Autowired
    private ModelMapper modelMapper;
    @Override
    public TodoDto addTodo(TodoDto todoDto) {

        Todo todo = modelMapper.map(todoDto, Todo.class);

        //Todo JPA entity
        Todo savedTodo = todoRepository.save(todo);

        // Convert saved Todo JPA into TodoDto Object

        return modelMapper.map(savedTodo, TodoDto.class);
    }
}
