package com.example.backend.task;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    private final TaskRepository repo;

    public TaskController(TaskRepository repo) { this.repo = repo; }

    @GetMapping
    public List<Task> all() { return repo.findAll(); }

    @PostMapping
    public Task create(@RequestBody Task t) { return repo.save(t); }

    @GetMapping("/{id}")
    public ResponseEntity<Task> get(@PathVariable Long id) {
        return repo.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> update(@PathVariable Long id, @RequestBody Task t) {
        return repo.findById(id).map(existing -> {
            existing.setTitle(t.getTitle());
            existing.setDescription(t.getDescription());
            repo.save(existing);
            return ResponseEntity.ok(existing);
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        repo.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
