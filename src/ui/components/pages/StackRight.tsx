import React, { FC, useContext, useEffect, useState, useRef } from 'react';
import { MyContext } from '../../../MyContext';
import { Box, Stack, Typography } from '@mui/material';
import { useStyle, useStyleBox } from '../../styles/useSxStyle';
import { MyBox } from '../widgets/MyBox';
import { useHandleIMC, useResetFields } from '../functions/handleBmr';
import { MyBtnGenerico } from '../widgets/MyBtn';
import { Gender } from './Home';
import { MyInputText } from '../widgets/MyInputText';
import { MySubmit } from '../widgets/MySubmit';
import * as yup from 'yup';
import { useFormik } from 'formik';

interface StackRightContextProps {
    gender: Gender;
    count: string;
    values: { [key: string]: string };
    setValues: (func: (prevValue: string[]) => { [key: string]: string }) => void;
    countImc: string;
    isDisabled: boolean;
    disabilita: boolean;
    setDisabilita: (value: boolean) => void;
    setIsDisabled: (value: boolean) => void;
}

const StackRight: FC = () => {
    const {
        gender, countImc,
    }: StackRightContextProps = useContext(MyContext),
        [isDisabled, setIsDisabled] = useState<boolean>(true),
        [isDisabledBtn, setIsDisabledBtn] = useState<boolean>(true),
        [disabilita, setDisabilita] = useState<boolean>(false),
        [jsonValues, setJsonValues] = useState<Record<string, unknown>[]>([]);

    const sx = useStyle();
    const sx1 = useStyleBox();

    const refs = {
        vitaRef: useRef<HTMLInputElement>(null),
        colloRef: useRef<HTMLInputElement>(null),
        fianchiRef: useRef<HTMLInputElement>(null),
        staturaRef: useRef<HTMLInputElement>(null)
    };

    interface IMCProps {
        vita: string;
        collo: string;
        fianchi: string;
        statura: string;
    }

    const validationRules: Record<keyof IMCProps, any> = {
        vita: yup.string().required(),
        collo: yup.string().required(),
        fianchi: yup.string().required(),
        statura: yup.string().required(),
    }

    function createValidationSchema(fields: (keyof IMCProps)[]) {
        let schema: yup.ObjectSchema<Partial<IMCProps>> = yup.object().shape({})
        fields.forEach((field) => {
            if (validationRules[field]) {
                schema = schema.shape({
                    [field]: validationRules[field],
                });
            }
        });
        return schema;
    }

    const validationSchema = createValidationSchema([
        'vita', 'collo', 'fianchi', 'statura'
    ]);

    const formik = useFormik({
        initialValues: {
            vita: '',
            collo: '',
            fianchi: '',
            statura: '',
        }, validationSchema: validationSchema,
        onSubmit: (values) => {
            setJsonValues((prevVal) => [...prevVal, values])
        }
    });

    const handleImc = useHandleIMC();

    useEffect(() => {
        function checkFields() {
            const fields = [
                formik.values.collo,
                formik.values.fianchi,
                formik.values.statura,
                formik.values.vita
            ];
            if (fields.every(field => field !== '')) {
                setIsDisabled(false);
                setIsDisabledBtn(false)
            } else {
                setIsDisabled(true);
                setIsDisabledBtn(true);
            }
        }
        checkFields();
    }, [formik.values, setIsDisabled])

    return (
        <Stack spacing={1} sx={sx.table}>
            <Stack spacing={0} sx={sx1.boxBmr}>
                <MyBox component={'div'}>
                    {gender && <Typography sx={sx1.typography} variant={'h3'}>IMC</Typography>}
                    <Typography variant={'h5'}>{countImc}</Typography>
                </MyBox>
            </Stack>
            <Stack spacing={1} sx={sx1.corpo}>
                <MyBox component={'div'}>
                    <Stack spacing={1} sx={sx1.field}>
                        <MyInputText
                            disabled={disabilita}
                            name={'vita'}
                            inputMode='numeric'
                            onChange={formik.handleChange}
                            placeholder='larghezza vita in cm'
                            value={formik.values.vita}
                            inputRef={refs.vitaRef}
                        />
                        <MyInputText
                            disabled={disabilita}
                            name={'collo'}
                            inputMode='numeric'
                            onChange={formik.handleChange}
                            placeholder='larghezza collo in cm'
                            value={formik.values.collo}
                            inputRef={refs.colloRef}
                        />
                        <MyInputText
                            disabled={disabilita}
                            name={'fianchi'}
                            inputMode='numeric'
                            onChange={formik.handleChange}
                            placeholder='larghezza fianchi in cm'
                            value={formik.values.fianchi}
                            inputRef={refs.fianchiRef}
                        />
                        <MyInputText
                            disabled={disabilita}
                            name={'statura'}
                            inputMode='numeric'
                            onChange={formik.handleChange}
                            placeholder='statura in cm'
                            value={formik.values.statura}
                            inputRef={refs.staturaRef}
                        />
                    </Stack>
                    <Box sx={sx1.fieldBtn}>

                        <MySubmit gender={gender}
                            onClick={() => handleImc(formik.values, refs)}
                            disabled={isDisabled}
                        >
                            Calcola
                        </MySubmit>
                        <MyBtnGenerico sx={sx.cancella}
                            disabled={isDisabledBtn}
                            onClick={() => alert('ciao')}>
                            Cancella
                        </MyBtnGenerico>
                    </Box>
                </MyBox>
            </Stack>
            <Stack spacing={1} sx={sx1.boxBmr}>

            </Stack>

        </Stack>
    )
}

export default StackRight;
