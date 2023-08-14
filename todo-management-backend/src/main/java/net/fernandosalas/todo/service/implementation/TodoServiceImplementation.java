package net.fernandosalas.todo.service.implementation;
import lombok.AllArgsConstructor;
import net.fernandosalas.todo.dto.TodoDto;
import net.fernandosalas.todo.entity.Todo;
import net.fernandosalas.todo.exception.ResourceNotFoundException;
import net.fernandosalas.todo.repository.TodoRepository;
import net.fernandosalas.todo.service.TodoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


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

        Todo savedTodo = todoRepository.save(todo);

        return modelMapper.map(savedTodo, TodoDto.class);
    }

    @Override
    public TodoDto getTodo(Long id) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Todo not found with id: " + id));
        return modelMapper.map(todo, TodoDto.class);
    }

    @Override
    public List<TodoDto> getAllTodos() {
       List<Todo> todoList = todoRepository.findAll();
       return todoList.stream()
                .map((item)-> modelMapper.map(item,TodoDto.class))
                .toList();
    }

    @Override
    public TodoDto updateTodo(TodoDto todoDto, Long id) {
       Todo todo = todoRepository.findById(id)
               .orElseThrow(()-> new ResourceNotFoundException("Todo not found with id: " + id));
        todo.setTitle(todoDto.getTitle());
        todo.setDescription(todoDto.getDescription());
        todo.setCompleted(todoDto.isCompleted());
       Todo updatedTodo = todoRepository.save(todo);
       return modelMapper.map(updatedTodo, TodoDto.class);
    }

    @Override
    public void deleteTodo(Long id) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Todo not found with id: " + id));
        todoRepository.deleteById(id);
    }

    @Override
    public TodoDto completeTodo(Long id) {
         Todo todo = todoRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Todo not found with id: " + id));
         todo.setCompleted(Boolean.TRUE);
        Todo savedTodo = todoRepository.save(todo);
        return modelMapper.map(savedTodo, TodoDto.class);
    }

    @Override
    public TodoDto inCompleteTodo(Long id) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Todo not found with id: " + id));
        todo.setCompleted(Boolean.FALSE);
        Todo savedTodo = todoRepository.save(todo);
        return modelMapper.map(savedTodo,TodoDto.class);
    }
}
