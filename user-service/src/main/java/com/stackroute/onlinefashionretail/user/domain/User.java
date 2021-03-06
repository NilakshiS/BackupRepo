package com.stackroute.onlinefashionretail.user.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Document(collection = "user")
public class User {

    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private String userId;
    @NotNull(message = "User name is mandatory")
    @Pattern(regexp = "[a-zA-Z]")
    private String name;
    @NotNull(message = "password number is mandatory")
    @Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,16})" )
    private String password;
    @NotNull(message = "email is mandatory")
    @Email
    @Indexed(unique = true)
    private String email;
    @NotNull(message = "select role")
    private String designation;


    public User(String userId, String name, String password, String email, String designation) {
        this.userId = userId;
        this.name = name;
        this.password = password;
        this.email = email;
        this.designation = designation;
    }


    public User() {
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

}
