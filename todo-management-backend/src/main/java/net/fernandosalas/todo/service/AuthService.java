package net.fernandosalas.todo.service;

import net.fernandosalas.todo.dto.JwtAuthResponse;
import net.fernandosalas.todo.dto.LoginDto;
import net.fernandosalas.todo.dto.RegisterDto;

public interface AuthService {
    String register(RegisterDto registerDto);

    //String login(LoginDto loginDto);
    JwtAuthResponse login(LoginDto loginDto);
}
