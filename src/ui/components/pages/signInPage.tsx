import { MyInputText } from '../widgets/MyInputText';
import { MyBox } from '../widgets/MyBox';
import { Stack, Typography } from '@mui/material';
import * as React from 'react';
import { QueryClient, QueryClientProvider, useMutation } from '@tanstack/react-query';

import { MyContext } from '../../../MyContext';
import { useStyle, useStyleBox } from '../../styles/useSxStyle';
import { SubmitGeneral } from '../widgets/SubmitGeneral';

const queryClient = new QueryClient();
interface User {
    nome: string;
    cognome: string;
    email: string;
    data_di_nascita: string;
}

const SignInPage = () => {
    const sx = useStyle();
    const sx1 = useStyleBox();
    const { values, setValues, registrazione }: any = React.useContext(MyContext);

    const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues((prevValue: User) => ({
            ...prevValue,
            [event.target.name]: event.target.value,
        }));
    };

    const mutation = useMutation<User, Error, User>({
        mutationFn: async (newUser: User) => {
          const response = await fetch('/saveUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });
            console.log(response);
            return await response.json();
        },
        onSuccess: (data: User) => {
          console.log('Dati salvati con successo:', data);
        },
        onError: (error: Error) => {
          console.error('Errore durante il salvataggio dei dati:', error);
        },
      });     

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Previene il comportamento di invio del form predefinito
        mutation.mutate(registrazione);
    };

    return (
        <Stack spacing={1} sx={sx.table}>
            <Stack spacing={1} sx={sx1.boxBmr}>
                <MyBox component={'div'}>
                    {registrazione ? (
                        <Typography variant={'h4'}>Registrati</Typography>
                    ) : (
                        <Typography variant={'h4'}>Benvenuto {registrazione}</Typography>
                    )}
                </MyBox>
            </Stack>
            <Stack spacing={1} sx={sx1.corpo}>
                <MyBox component={'form'} onSubmit={handleSubmit}>
                    <Stack spacing={1} sx={sx1.field}>
                        <MyInputText
                            placeholder='nome'
                            inputMode='text'
                            name='nome'
                            value={values['nome']}
                            onChange={handleChanges}
                        />
                        <MyInputText
                            placeholder='cognome'
                            inputMode='text'
                            name='cognome'
                            value={values['cognome']}
                            onChange={handleChanges}
                        />
                        <MyInputText
                            placeholder='email'
                            inputMode='text'
                            name='email'
                            value={values['email']}
                            onChange={handleChanges}
                        />
                        <MyInputText
                            placeholder='data di nascita'
                            inputMode='text'
                            type='date'
                            name='data_di_nascita'
                            value={values['data_di_nascita']}
                            onChange={handleChanges}
                        />
                        <MyBox component={'div'} sx={sx1.fieldBtn}>
                            <SubmitGeneral>Invia</SubmitGeneral>
                        </MyBox>
                    </Stack>
                </MyBox>
            </Stack>
        </Stack>
    );
};

export const LoginPage = () => (
    <QueryClientProvider client={queryClient}>
        <SignInPage />
    </QueryClientProvider>
);
