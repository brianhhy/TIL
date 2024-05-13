package com.example.springboot.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.springboot.member.repository.entity.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {

}
