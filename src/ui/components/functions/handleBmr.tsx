/**BMR
    //in Man: BMR=66.4730 + 13.7516 x weight in kg + 5.0033 x
    // height in cm – 6.7550 x age in years.
    //In women, BMR=655.0955 + 9.5634 x weight in kg + 1.8496 x
    // height in cm – 4.6756 x age in years. 
*/

import { useContext } from "react";
import { MyContext } from "../../../MyContext";
import { LeftContext } from "../pages/StackLeft";
import { FormikValues } from "formik";

interface objProps {
    value: { [key: string]: string };
    setMyStyle: (newStyle: { [key: string]: string }) => void;
}

const controlInputs = ({ value, setMyStyle }: objProps) => {
    const control = () => {
        let regex = /^[0-9]+$/;
        for (let key in value) {
            if (!regex.test(value[key])) {
                setMyStyle({
                    borderColor: 'red'
                });
                return false;
            }
        }
        setMyStyle({
            borderColor: 'transparent'
        });
        return true;
    };
    return control;
};

export const useHandleBmr = () => {
    const { gender, setCount } = useContext(MyContext);
    const bmrCalc = (values: { weight: string; height: string; age: string; }) => {

        if (values['weight'] === '' || values['height'] === '' || values['age'] === '') {
            alert('Completa tutti i campi');
            return;
        }

        console.log(`${values['weight']}, ${values['height']}, ${values['age']}`);

        const weight = parseFloat(values['weight']);
        const height = parseFloat(values['height']);
        const age = parseInt(values['age']);

        console.log(typeof (weight), typeof (age), typeof (height));

        if (weight && height && age) {
            console.log('OK')
        } else {
            if (isNaN(weight) || isNaN(height) || isNaN(age)) {
                console.log(`${weight}, ${height}, ${age}`)
            }
        }

        if (gender === 'M') {
            let formulaMan = (66.4730 + (13.7516 * weight) +
                (5.0033 * height) - (6.7550 * age)).toFixed(2);
            console.log(typeof (formulaMan))
            setCount(formulaMan);
        } else {
            let formulaWoman = (655.0955 + (9.5634 * weight) +
                (1.8496 * height) - (4.6756 * age)).toFixed(2);
            setCount(formulaWoman);
        }
    };
    return bmrCalc;
};

export type typeValues = {
    weight: string | '';
    height: string | '';
    age: string | '';
}
interface ResetProps {
    isDisabledBtn: boolean;
    setIsDisabledBtn: (val: boolean) => void;
    setCount: (val: string) => void;
    formik: FormikValues;
}

export const resetCount = ({ isDisabledBtn, setIsDisabledBtn, setCount, formik }: ResetProps) => {
    formik.setValues({
        weight: '',
        height: '',
        age: '',
    })
    setIsDisabledBtn(!isDisabledBtn);
    setCount('');
};


type Setter = (value: string) => void;

export const useResetFields = (setters: Setter[]) => {
    const resetFields = () => {
        setters.forEach(setter => setter('')); // Resetta ogni stato a una stringa vuota
    };
    return resetFields;
};

export const useHandleIMC = () => {
    const { gender, setCountImc } = useContext(MyContext);
    const calculateBodyFat = (values: {
        vita: string,
        collo: string,
        fianchi: string,
        statura: string
    }, refs: {
        vitaRef: React.RefObject<HTMLInputElement>,
        colloRef: React.RefObject<HTMLInputElement>,
        fianchiRef: React.RefObject<HTMLInputElement>,
        staturaRef: React.RefObject<HTMLInputElement>
    }) => {

        if (values['vita'] === '' ||
            values['collo'] === '' ||
            values['fianchi'] === '' ||
            values['statura'] === ''
        ) {
            alert("Compilare i campi");
        }
        const
            vita = parseInt(values['vita']),
            collo = parseInt(values['collo']),
            fianchi = parseInt(values['fianchi']),
            statura = parseInt(values['statura'])
            ;
        if (vita && collo && fianchi && statura) {
            console.log('ok')
        } else {
            if (isNaN(vita) && isNaN(collo) && isNaN(fianchi) && isNaN(statura)) {
                alert('non hai inserito numeri validi');
                if (refs.vitaRef.current) refs.vitaRef.current.focus();
            } else {
                alert('errore non specificato');
            }
        }
        setCountImc(vita + collo + fianchi + statura);
    }
    return calculateBodyFat;
}
