package com.davidlekei.lolmatchtrackerapi.exceptions.handlers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST)
public class MatchExceptionHandler extends RuntimeException
{

}
