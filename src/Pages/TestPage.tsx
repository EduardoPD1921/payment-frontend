import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { CustomTextField, DefaultButton } from '../StyledComponents';
import MaskedInput from 'react-input-mask';
import VMasker from 'vanilla-masker';

interface Inputs {
    example: string;
    example2: string;
}

const TestPage: React.FC = () => {
    console.log('render');
    const { register, handleSubmit, control } = useForm<Inputs>();

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     {/* <Controller
        //         name="example"
        //         control={control}
        //         defaultValue=""
        //         render={({ field }) => <CustomTextField {...field} {...register("example", { pattern: /^[A-Za-z]+$/i })} />}
        //     /> */}
        //     <MaskedInput
        //         mask="(99) 99999-9999"
        //         {...register("example")}
        //     >
        //         {(inputProps: object) => (
        //             <CustomTextField {...inputProps} />
        //         )}
        //     </MaskedInput>
        //     <DefaultButton type="submit" borderRadius="6px" backgroundDefault="#11c76f" backgroundHover="#10ad61">
        //         Cadastrar
        //     </DefaultButton> 
        // </form>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                control={control}
                name="example"
                defaultValue=""
                render={({ field }) => <CustomTextField label="test" {...field} />}  
            />

            <Controller
                control={control}
                name="example2"
                defaultValue=""
                render={({ field }) => <CustomTextField label="test2" {...field} />} 
            />

            <DefaultButton type="submit" borderRadius="6px" backgroundDefault="#11c76f" backgroundHover="#10ad61">
                Cadastrar
            </DefaultButton> 
        </form>
    )
}

export default TestPage;