interface ErrorTypes {
    name: [string];
    email: [string];
    birth_date: [string];
    phone_number: [string];
    password: [string];
    newEmail: [string];
    oldEmail: [string];
    message: string;
}

export default function errorHandler(error: ErrorTypes) {
    if (error.name) {
        if (error.name[0] === 'The name field is required.') {
            return 'O campo nome é obrigatório!';
        }

        if (error.name[0] === 'The name must be at least 5 characters.') {
            return 'Nome muito pequeno!';
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

        if (error.phone_number[0] === 'The phone number must be at least 11 characters.') {
            return 'Número de telefone inválido!';
        }
    }

    if (error.password) {
        if (error.password[0] === 'The password field is required.') {
            return 'O campo senha é obrigatório!';
        }

        if (error.password[0] === 'The password must be at least 10 characters.') {
            return 'A senha é muito fraca!';
        }
    }

    if (error.oldEmail) {
        if (error.oldEmail[0] === 'The old email field is required.') {
            return 'O e-mail atual é obrigatório!';
        }

        if (error.oldEmail[0] === 'The old email must be a valid email address.') {
            return 'O e-mail atual deve ser válido!';
        }
    }

    if (error.newEmail) {
        if (error.newEmail[0] === 'The new email field is required.') {
            return 'O novo e-mail é obrigatório!';
        }

        if (error.newEmail[0] === 'The new email must be a valid email address.') {
            return 'O novo e-mail deve ser válido!';
        }
    }

    if (error.message) {
        if (error.message === 'wrong-email') {
            return 'E-mail incorreto!';
        }

        if (error.message === 'wrong-password') {
            return 'Senha incorreta!';
        }

        if (error.message === 'phone-number-has-already-been-taken') {
            return 'Telefone já está em uso!';
        }

        if (error.message === 'email-already-in-use') {
            return 'E-mail já está em uso!';
        }

        if (error.message === 'wrong-old-email') {
            return 'E-mail atual incorreto!';
        }
    }

    console.log(error);

    return 'Erro desconhecido!';
}