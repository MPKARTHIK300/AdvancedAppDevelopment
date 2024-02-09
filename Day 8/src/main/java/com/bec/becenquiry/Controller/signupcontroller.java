// package com.bec.becenquiry.Controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RestController;

// import com.bec.becenquiry.Entity.signupentity;
// import com.bec.becenquiry.Services.signupService;


// @RestController
// @CrossOrigin(origins = "http://localhost:3000")
// public class signupcontroller {

//     @Autowired
//     private signupService userService;

//     @PostMapping("/register")
//     public ResponseEntity<String> registerUser(@RequestBody signupentity user) {
//         if (userService.findByUsername(user.getUsername()) != null) {
//             return ResponseEntity.badRequest().body("Username already taken");
//         }

//         if (userService.findByEmail(user.getEmail()) != null) {
//             return ResponseEntity.badRequest().body("Email already registered");
//         }
//         userService.saveUser(user);

//         return ResponseEntity.ok("User registered successfully");
//     }
// }
