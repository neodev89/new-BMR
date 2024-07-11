import { MyInputText } from '../widgets/MyInputText';
import { MyBox } from '../widgets/MyBox';
import { Stack, Typography } from '@mui/material';
import * as React from 'react';

import { MyContext } from '../../../MyContext';
import { useStyle, useStyleBox } from '../../styles/useSxStyle';
import { SubmitGeneral } from '../widgets/SubmitGeneral';


export const SignInPage = () => {
    const sx = useStyle()
    const sx1 = useStyleBox();
    // eslint-disable-next-line
    const [registrazione, setRegistrazione] = React.useState<string[]>([]);

    const { values, setValues }: any = React.useContext(MyContext);

    const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {

        setValues((prevValue: string[]) => ({
            ...prevValue,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Previene il comportamento di invio del form predefinito

        // Crea un oggetto con i dati del form
        const formData = {
            nome: values['nome'],
            cognome: values['cognome'],
            email: values['email'],
            data_di_nascita: values['data_di_nascita'],
        };

        console.log(formData);
        fetch('/saveUser', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch((e) => {
                console.log(`Error: ${e}`)
            })

        // Qui puoi inviare i dati a un server o a un'API
        // fetch('/saveUser', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
    }

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
                <MyBox component={'form'} action='/saveUser'onSubmit={handleSubmit}>
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
                            type="date"
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

    )
}