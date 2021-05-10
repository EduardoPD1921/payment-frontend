import React from 'react';
import { useForm } from 'react-hook-form';

import RegisterInput from '../Components/RegisterInput';

interface TestValues {
    search: string;
}

const TestPage: React.FC = () => {
    const { handleSubmit, control } = useForm<TestValues>();

    return (
        <form>
            <RegisterInput
                name="test"
                label="Teste"
                control={control}
            />
        </form>
    )
}

export default TestPage;