/**BMR
    //in Man: BMR=66.4730 + 13.7516 x weight in kg + 5.0033 x
     height in cm – 6.7550 x age in years.
    //In women, BMR=655.0955 + 9.5634 x weight in kg + 1.8496 x
     height in cm – 4.6756 x age in years. 
*/

import { useContext } from "react";
import { MyContext } from "../../../MyContext";

interface objProps {
    value: { [key: string]: string };
    setMyStyle: (newStyle: { [key: string]: string }) => void;
}

const controlInputs = ({ value, setMyStyle }: objProps) => {
    const control = () => {
        let regex = /^[0-9]/i;
        for (let key in value) {
            if (!regex.test(value[key])) {
                setMyStyle({
                    borderColor: 'red'
                })
            }
        }
        setMyStyle({
            borderColor: 'transparent'
        })
    }
    return control;
}

export const useHandleBmr = () => {
    const { gender, values, setCount, setMyStyle } = useContext(MyContext);
    const bmrCalc = () => {
        controlInputs({value: values, setMyStyle: setMyStyle})
        if (gender === 'M') {
            let formulaMan = (66.4730 + (13.7516 * values['weight']) +
                (5.0033 * values['height']) - (6.7550 * values['age'])).toFixed(2);
            setCount(formulaMan);
        } else {
            let formulaWoman = (655.0955 + (9.5634 * values['weight']) +
                (1.8496 * values['height']) - (4.6756 * values['age'])).toFixed(2);
            setCount(formulaWoman)
        }
    }
    return bmrCalc;
}

export const useResetCount = () => {
    const { setValues, setCount, setIsDisabled } = useContext(MyContext);
    const resetCount = () => {
        setValues({
            weight: '',
            height: '',
            age: '',
        })
        setCount('');
        setIsDisabled(true);
    };
    return resetCount;
};

type Setter = (value: string) => void;

export const useResetFields = (setters: Setter[]) => {
    const resetFields = () => {
        setters.forEach(setter => setter('')); // Resetta ogni stato a una stringa vuota
    };
    return resetFields;
};


export const useHandleIMC = () => {
    const { gender, field4, field5, field6, field7, setCountImc } = useContext(MyContext);
    const calculateBodyFat = () => {
        if (gender === 'M') {
            const logVitaCollo = Math.log10(field4 - field5);
            const logStatura = Math.log10(field7);
            const bodyFat = 495 / (1.0324 - 0.19077 * logVitaCollo + 0.15456 * logStatura) - 450;
            setCountImc(bodyFat.toFixed(2));
            return bodyFat.toFixed(2); // Restituisce il risultato con due cifre decimali
        } else {
            const logVitaColloFianchi = Math.log10((field4 + field5) - field6);
            const logStatura = Math.log10(field6);
            const bodyFat = 495 / (1.29579 - 0.35004 * logVitaColloFianchi + 0.221 * logStatura - 450)
            setCountImc(bodyFat.toFixed(2));
            return bodyFat.toFixed(2);
        }
    };
    return calculateBodyFat;
}
