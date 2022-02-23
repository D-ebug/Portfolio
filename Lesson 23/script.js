// 5
    let level,
        salary;
    function getlevel() {
        salary = document.querySelector('input').value;
        if (salary <= 1200) {
            level = 'Судя по зарплате, ваша должность - '+'Junior';
        }
        else if (salary > 1200 && salary <= 4000) {
            level = 'Судя по зарплате, ваша должность - '+'Middle';
        }
        else if (salary >= 4000) {
            level = 'Судя по зарплате, ваша должность - '+'Senior';
        }
        else {
            level = 'Ошибка';
        }
        console.log(level+', '+salary);
    };
// 6
    let password,
        message,
        ADMIN_PASSWORD = '12345678';
    function checkPassword() {
        password = document.querySelector('input').value;
        if (password === null) {
            message = 'Canceled by user!';
        }
        else {
            if (password === ADMIN_PASSWORD) {
                message = 'Welcome!';
            }
            else {
                message = 'Access denied, wrong password!'
            }
        };
        console.log(message);
    };