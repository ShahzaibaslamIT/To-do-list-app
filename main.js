#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let conditions = true;
console.log(chalk.bgYellowBright.bold("\n Welcome to Shazz- Todolist Application\n"));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([{
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Addtask", "DeleteTask", "UpdateTask", "View-Todolist", "Exit"]
            }]);
        if (option.choice === "Addtask") {
            await Addtask();
        }
        else if (option.choice === "DeleteTask") {
            await deleteTask();
        }
        else if (option.choice === "UpdateTask") {
            await updateTask();
        }
        else if (option.choice === "View-Todolist") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
let Addtask = async () => {
    let newTask = await inquirer.prompt([{
            name: "task",
            type: "input",
            message: "Enter your new task:"
        }]);
    todolist.push(newTask.task);
    console.log(`\n ${newTask.task}task added successfully in todo list`);
};
let viewTask = () => {
    console.log("\n Your Todo-list: \n");
    todolist.forEach((task, index) => {
        console.log(`${index + 1}:${task}`);
    });
};
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([{
            name: "index",
            type: "number",
            message: "Enter the `index no` of the task you want to delete:",
        }]);
    let deleteTask = todolist.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deleteTask}The following task has been deleted`);
};
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([{
            name: "index",
            type: "number",
            message: "Enter the `index no` of the task you want to update:"
        }, {
            name: "New_task",
            type: "input",
            message: "Now enter new task new name:",
        }]);
    todolist[update_task_index.index - 1] = update_task_index.New_task;
    console.log(`\n Task at index no.${update_task_index.index - 1}updated successfully.[For modified liat check option:View todo list]`);
};
main();
