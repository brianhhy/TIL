package com.example.springboot.member.controller.dto;

import lombok.Data;

@Data

public class JoinRequest {
    private String id;
    private String name;
    private String phoneNumber;
}

