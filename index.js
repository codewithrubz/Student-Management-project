#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bold.italic.overline.underline.magentaBright("<<<<<< Welcome to Student Management System >>>>>>"));
class Student {
    constructor(name, id, courses, balance, fee) {
        this.name = name;
        this.id = id;
        this.courses = courses;
        this.balance = balance;
        this.fee = fee;
    }
    enroll(course) {
        this.courses.push(course);
    }
    payFee(amount) {
        this.balance = amount;
    }
}
class StudentManagementSystem {
    constructor() {
        this.students = [];
    }
    addStudent() {
        return __awaiter(this, void 0, void 0, function* () {
            const answers = yield inquirer_1.default.prompt([
                { type: 'input',
                    name: 'name',
                    message: chalk_1.default.bold.italic.yellowBright('Enter student name:') },
                {
                    name: 'courses',
                    message: chalk_1.default.bold.italic.blueBright('Please select your courses.'),
                    type: "list",
                    choices: [
                        chalk_1.default.bold.italic.redBright("Html fees 1250/="),
                        chalk_1.default.bold.italic.greenBright("CSS fees 1200/="),
                        chalk_1.default.bold.italic.cyanBright("Phython fees 1100/="),
                        chalk_1.default.bold.italic.magentaBright("TypeScript fees 1500/="),
                        chalk_1.default.bold.italic.yellowBright("JavaScript fees 1300/=")
                    ]
                },
                { name: "fee",
                    type: "number",
                    message: chalk_1.default.bold.italic.blackBright("Enter your selected course fees.")
                },
                { type: 'input',
                    name: 'balance',
                    message: chalk_1.default.bold.italic.blueBright('Enter balance:') }
            ]);
            const id = Math.floor(Math.random() * 100000 + 10000);
            const courses = answers.courses.split(',').map((course) => course.trim());
            const fees = answers.balance - answers.fee;
            const student = new Student(answers.name, id, courses, parseInt(answers.balance), fees);
            this.students.push(student);
            console.log(chalk_1.default.bold.italic.greenBright('Student added successfully!!!!'));
        });
    }
    displayStudents() {
        console.log('List of Students:');
        this.students.forEach((student, index) => {
            console.log(chalk_1.default.bold.italic.blackBright(`Student ${index + 1}:`));
            console.log(chalk_1.default.bold.italic.greenBright(`Name: ${student.name}`));
            console.log(chalk_1.default.bold.italic.blueBright(`ID: ${student.id}`));
            console.log(chalk_1.default.bold.italic.magentaBright(`Courses: ${student.courses.join(', ')}`));
            console.log(chalk_1.default.bold.italic.cyanBright(`Balance: ${student.balance}`));
            console.log(chalk_1.default.bold.italic.redBright(`Remaing Balance: ${student.fee}`));
            console.log(chalk_1.default.bold.italic.yellowBright('---------------------'));
        });
    }
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const studentManagementSystem = new StudentManagementSystem();
        while (true) {
            const { choice } = yield inquirer_1.default.prompt({
                type: 'list',
                name: 'choice',
                message: 'Choose an action:',
                choices: [
                    chalk_1.default.bold.italic.cyanBright('Add Student'),
                    chalk_1.default.bold.italic.greenBright('Display Students'),
                    chalk_1.default.bold.italic.redBright('Exit')
                ]
            });
            switch (choice) {
                case chalk_1.default.bold.italic.cyanBright('Add Student'):
                    yield studentManagementSystem.addStudent();
                    break;
                case chalk_1.default.bold.italic.greenBright('Display Students'):
                    studentManagementSystem.displayStudents();
                    break;
                case chalk_1.default.bold.italic.redBright('Exit'):
                    console.log('Exiting...');
                    return;
                default:
                    console.log('Invalid choice');
            }
        }
    });
}
main();
