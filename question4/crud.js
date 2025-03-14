// Task array to store tasks
let tasks = [];
let taskId = 1; // Auto-increment ID for tasks

// 📌 Function to add a new task
function addTask(name, description) {
    const task = {
        id: taskId++,  // Assign an ID and increment it
        name,
        description
    };
    tasks.push(task);
    console.log(`✅ Task added: ${name}`);
}

// 📌 Function to view all tasks
function viewTasks() {
    if (tasks.length === 0) {
        console.log("📌 No tasks available.");
    } else {
        console.log("📌 Task List:");
        tasks.forEach(task => {
            console.log(`🔹 ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
        });
    }
}

// 📌 Function to update a task by ID
function updateTask(id, newName, newDescription) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        console.log(`✏️ Task ${id} updated successfully.`);
    } else {
        console.log(`❌ Task with ID ${id} not found.`);
    }
}

// 📌 Function to delete a task by ID
function deleteTask(id) {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log(`🗑️ Task ${id} deleted.`);
    } else {
        console.log(`❌ Task with ID ${id} not found.`);
    }
}

// 📌 Example Usage:
addTask("Buy Groceries", "Milk, eggs, and bread");
addTask("Study JavaScript", "Practice closures and async functions");

viewTasks(); // Display all tasks

updateTask(1, "Buy Groceries", "Milk, eggs, bread, and butter"); // Update task 1

deleteTask(2); // Delete task 2

viewTasks(); // Display updated task list
