package com.back.openpud.core.exception;

import org.springframework.http.HttpStatus;

public class AppException extends RuntimeException {
    private String message;
    private HttpStatus code;
    public AppException(String message, HttpStatus code) {
        super(message);
        this.code  = code;
    }

    public HttpStatus getCode() {
        return code;
    }
}
