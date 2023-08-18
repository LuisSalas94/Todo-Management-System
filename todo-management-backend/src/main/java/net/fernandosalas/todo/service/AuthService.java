package net.fernandosalas.todo.service;

import net.fernandosalas.todo.dto.RegisterDto;

public interface AuthService {
    String register(RegisterDto registerDto);
}
