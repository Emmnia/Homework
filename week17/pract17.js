// Задание 23
// Создайте два класса EmployeeAmazon и EmployeeApple.

// - EmployeeAmazon, EmployeeApple должны содержать свойства name, position и salary, a EmployeeApple должен содержать еще и метод calculateBonus, который будет увеличивать зарплату на процент, который ты ему передашь аргументом, и менять ее в поле salary.

// - Создайте обьекты employeeAmazon и employeeApple и заполните их данными:
// Josh работает в компании Amazon менеджером, и его зарплата составляет 12 000$ в год.
// Frank работает в компании Apple разработчиком и его зарплата составляет 220 000$ в год.

// - В этом году Josh получит повышение на 15 % процентов, а Frank получит повышение на 25 %.

// - Используя метод calculateBonus из обьекта employeeApple, повысьте зарплаты этим сотрудникам, не создавая метод calculateBonus в классе EmployeeAmazon.

// - Для изменения зарплаты Josha используйте функцию bind.

// - После изменений зарплат, создайте переменную salaryInfo, в которой будет лежать строка содержащая информацию о зарплатах вот в таком формате:
// Frank salary:указать зарплату Franka за год после повышения, Josh salary:указать зарплату Josha за год после повышения

// Выведите переменную salaryInfo в консоль.




class EmployeeAmazon {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}
class EmployeeApple extends EmployeeAmazon {
    calculateBonus(bonus) {
        this.salary += this.salary * bonus / 100
    }
}
const employeeAmazon = new EmployeeAmazon("Josh", "manager", 12000)
const employeeApple = new EmployeeApple("Frank", "developer", 220000)
employeeApple.calculateBonus(25)
employeeApple.calculateBonus.bind(employeeAmazon, 15);
const salaryInfo = "Frank salary: " + employeeApple.salary + ", " + "Josh salary: " + employeeAmazon.salary
console.log(salaryInfo)