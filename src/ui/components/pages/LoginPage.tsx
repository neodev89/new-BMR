import { MyInputText } from '../widgets/MyInputText';
import { MyBox } from '../widgets/MyBox';
import { Stack, Typography } from '@mui/material';
import { ChangeEvent, FC, FormEvent, useContext, useEffect } from 'react';

import { MyContext } from '../../../MyContext';
import { useStyle, useStyleBox } from '../../styles/useSxStyle';
import { SubmitGeneral } from '../widgets/SubmitGeneral';
import { useMatchUser } from '../functions/matchUser';

interface ContextProps {
    values: { [key: string]: string };
    setValues: (func:
        (prevValue: { [key: string]: string }) => {
            [key: string]: string
        }) => void;
    sign: boolean;
    // setSign: Dispatch<SetStateAction<boolean>>;
}

export const LoginPage: FC = () => {
    const
        sx = useStyle(),
        sx1 = useStyleBox(),
        { values, setValues, sign }: ContextProps = useContext(MyContext),
        MatchUser = useMatchUser()
        ;

    const handleChanges = (event: ChangeEvent<HTMLInputElement>) => {
        setValues((prevValue: { [key: string]: string }) => ({
            ...prevValue,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const userToMatch = MatchUser({
            nome: values['nome'],
            cognome: values['cognome'],
            email: values['email'],
            data_di_nascita: values['data_di_nascita']
        });
        console.log(`Result: ${JSON.stringify(userToMatch, null, 2)}`);
        return userToMatch;
        // Use userToMatch for further processing
    };

    useEffect(() => {
        if (sign) {
            // Esegui ulteriori azioni, come il reindirizzamento a un'altra pagina
            console.log("Match successful, redirecting...");
            // Esempio di reindirizzamento:
            // window.location.href = "/nextPage";
        }
    }, [sign]);


    return (
        <Stack spacing={1} sx={sx.table}>
            <Stack spacing={1} sx={sx1.boxBmr}>
                <MyBox component={'div'}>
                    <Typography variant={'h4'}>Benvenuto</Typography>
                </MyBox>
            </Stack>
            <Stack spacing={1} sx={sx1.corpo}>
                <MyBox component={'form'} onSubmit={handleSubmit}>
                    <Stack spacing={1} sx={sx1.field}>
                        <MyInputText
                            placeholder='Admin'
                            inputMode='text'
                            name='nome'
                            value={values['nome']}
                            onChange={handleChanges}
                        />
                        <MyInputText
                            placeholder='Admin'
                            inputMode='text'
                            name='cognome'
                            value={values['cognome']}
                            onChange={handleChanges}
                        />
                        <MyInputText
                            placeholder='bula@bula.bmr'
                            inputMode='text'
                            name='email'
                            value={values['email']}
                            onChange={handleChanges}
                        />
                        <MyInputText
                            placeholder='01/01/1900'
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
}