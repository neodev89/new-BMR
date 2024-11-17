import { ChangeEvent, FC, useContext, useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { MyBtn, MyBtnGenerico } from '../widgets/MyBtn';
import { MyBox } from '../widgets/MyBox';
import { MySubmit } from '../widgets/MySubmit';

import { useStyle, useStyleBox } from '../../styles/useSxStyle';
import { MyContext } from '../../../MyContext';
import { MyInputText } from '../widgets/MyInputText';

import { useHandleBmr, resetCount, typeValues } from '../functions/handleBmr';
import { Gender } from './Home';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { stateProps } from './Home';
import { useSaveStateBmr } from '../../general-state/stateBmr';

export const LeftContext = MyContext;

interface StackLeftContextProps {
    gender: Gender;
    setGender: (val: string) => void;
    toggleGender: () => void;
    count: string;
    setCount: (val: string) => void;
    values: stateProps;
    setValues: (func: (prevValue: string[]) => stateProps) => void;
}

const StackLeft: FC = () => {
    const {
        gender, setGender,
        count, setCount,
        values,
    }: StackLeftContextProps = useContext(MyContext),
        [jsonValues, setJsonValues] = useState<Record<string, unknown>[]>([]),
        [isDisabledLeft, setIsDisabledLeft] = useState<boolean>(false),
        [isDisabledBtn, setIsDisabledBtn] = useState<boolean>(true),
        [disabilita, setDisabilita] = useState<boolean>(false);

    const sx = useStyle();
    const sx1 = useStyleBox();
    const { state, updateState, deleteState } = useSaveStateBmr();

    function toggleGender() {
        if (gender === 'F') {
            setGender('M');
        } else {
            setGender('F')
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
       const { name, value } = e.target;
       updateState({
        ...state,
        [name]: value,
       });
       formik.setValues({
        ...formik.values,
        [name]: value,
       });
    }

    const validationRules: Record<keyof typeValues, any> = {
        weight: yup.string().required(),
        height: yup.string().required(),
        age: yup.string().required(),
    }

    function createValidationSchema(fields: (keyof typeValues)[]) {
        let schema: yup.ObjectSchema<Partial<typeValues>> = yup.object().shape({})

        fields.forEach((field) => {
            if (validationRules[field]) {
                schema = schema.shape({ [field]: validationRules[field] })
            }
        })

        return schema
    }

    const validationSchema = createValidationSchema([
        'weight', 'height', 'age'
    ])

    const formik = useFormik({
        initialValues: {
            weight: state.weight,
            height: state.height,
            age: state.age,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setJsonValues((prevVal) => [...prevVal, values])
        },

    });

    const handleResetCount = () => {
        resetCount({ isDisabledBtn, setIsDisabledBtn, setCount, formik });
        deleteState();
    }; 
    const handleBmr = useHandleBmr();

    useEffect(() => {
        function checkFields() {
            const fields = [
                formik.values.weight,
                formik.values.height,
                formik.values.age
            ];
            if (fields.every(field => field !== '')) {
                setIsDisabledLeft(false);
                setIsDisabledBtn(false);
            } else {
                setIsDisabledLeft(true);
                setIsDisabledBtn(true);
            }
        }
        checkFields();
        console.log(state.age, state.height, state.weight)
    }, [formik.values, setIsDisabledLeft, state]);


    return (
        <LeftContext.Provider value={{
            isDisabledLeft, setIsDisabledLeft,
            isDisabledBtn, setIsDisabledBtn,
        }}>
            <Stack spacing={1} sx={sx.table}>
                <Stack spacing={0} sx={sx1.boxBmr}>
                    <MyBox component={'div'}>
                        {gender && <Typography sx={sx1.typography} variant={'h3'}>BMR {gender}</Typography>}
                        <Typography variant={'h5'}>{count}</Typography>
                    </MyBox>
                </Stack>
                <Stack spacing={1} sx={sx1.corpo}>
                    <MyBox component={'form'} action={'saveBmr'} onSubmit={formik.handleSubmit}>
                        <Stack spacing={1} sx={sx1.field}>
                            <MyInputText
                                disabled={disabilita}
                                name='weight'
                                inputMode='numeric'
                                onChange={(e) => handleChange(e)}
                                placeholder='weight in kg'
                                value={formik.values.weight}
                            />
                            <MyInputText
                                disabled={disabilita}
                                name='height'
                                inputMode='numeric'
                                onChange={(e) => handleChange(e)}
                                placeholder='height in cm'
                                value={formik.values.height}
                            />
                            <MyInputText
                                disabled={disabilita}
                                name='age'
                                inputMode='numeric'
                                onChange={(e) => handleChange(e)}
                                placeholder='age in year'
                                value={formik.values.age}
                            />
                        </Stack>
                        <Box sx={sx1.fieldBtn}>
                            <MySubmit gender={gender}
                                onClick={() => handleBmr(formik.values)}
                                disabled={isDisabledLeft}
                            >
                                Calcola
                            </MySubmit>
                            <MyBtnGenerico sx={sx.cancella}
                                disabled={isDisabledBtn}
                                onClick={handleResetCount}
                            >
                                Cancella
                            </MyBtnGenerico>
                        </Box>
                    </MyBox>
                </Stack>
                <Stack spacing={1} sx={sx1.boxBmr}>
                    <MyBox component={'div'}>
                        {
                            gender &&
                            <MyBtn onClick={toggleGender}>
                                Seleziona il genere
                            </MyBtn>
                        }
                    </MyBox>
                </Stack>
            </Stack>
        </LeftContext.Provider>
    )
}

export default StackLeft;
