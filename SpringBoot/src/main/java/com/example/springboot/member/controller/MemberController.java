package com.example.springboot.member.controller;
import com.example.springboot.member.controller.dto.JoinRequest;
import com.example.springboot.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor

public class MemberController {

    private final MemberService memberService;

    @GetMapping("/hello")
    public String getHello() {
        return "hello";
    }
    @PostMapping("/join")
    public String join(@RequestBody JoinRequest joinRequest) {

        String result = memberService.join(joinRequest);

        if("success".equalsIgnoreCase(result)){
            return "success";
        }else{
            return "fail";
        }
    }
}
