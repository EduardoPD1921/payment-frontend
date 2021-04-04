import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { CustomTextField, DefaultButton } from '../StyledComponents';
import MaskedInput from 'react-input-mask';
import VMasker from 'vanilla-masker';

interface Inputs {
    example: string;
}

const TestPage: React.FC = () => {
    console.log('render');
    const { register, handleSubmit, control } = useForm<Inputs>();

    const onSubmit = (data: any) => {
        const unMasked = VMasker.toPattern(data.example, "99999999999");

        console.log(unMasked);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* <Controller
                name="example"
                control={control}
                defaultValue=""
                render={({ field }) => <CustomTextField {...field} {...register("example", { pattern: /^[A-Za-z]+$/i })} />}
            /> */}
            <MaskedInput
                mask="(99) 99999-9999"
                {...register("example")}
            >
                {(inputProps: object) => (
                    <CustomTextField {...inputProps} />
                )}
            </MaskedInput>
            <DefaultButton type="submit" borderRadius="6px" backgroundDefault="#11c76f" backgroundHover="#10ad61">
                Cadastrar
            </DefaultButton> 
        </form>
    )
}

export default TestPage;