interface ErrorTypes {
    name: [string];
    email: [string];
    birth_date: [string];
    phone_number: [string];
    password: [string];
}

export default function errorHandler(error: ErrorTypes) {
    if (error.name) {
        if (error.name[0] === 'The name field is required.') {
            return 'O campo nome é obrigatório!';
        }
    }

    if (error.email) {
        if (error.email[0] === 'The email field is required.') {
            return 'O campo e-mail é obrigatório!';
        }

        if (error.email[0] === 'The email must be a valid email address.') {
            return 'O campo e-mail precisa ser válido!';
        }

        if (error.email[0] === 'The email has already been taken.') {
            return 'O e-mail já está em uso!';
        }
    }

    if (error.birth_date) {
        if (error.birth_date[0] === 'The birth date field is required.') {
            return 'O campo data de nascimento é obrigatório!';
        }

        if (error.birth_date[0] === 'The birth date does not match the format d/m/Y.') {
            return 'Data de nascimento inválida!';
        }
    }

    if (error.phone_number) {
        if (error.phone_number[0] === 'The phone number field is required.') {
            return 'O campo telefone é obrigatório!';
        }

        if (error.phone_number[0] === 'The phone number has already been taken.') {
            return 'O número de telefone já está em uso!';
        }
    }

    if (error.password) {
        if (error.password[0] === 'The password field is required.') {
            return 'O campo senha é obrigatório!';
        }
    }

    return 'Erro desconhecido!';
}