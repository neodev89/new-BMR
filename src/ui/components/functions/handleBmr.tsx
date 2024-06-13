/**BMR
    //in Man: BMR=66.4730 + 13.7516 x weight in kg + 5.0033 x
     height in cm – 6.7550 x age in years.
    //In women, BMR=655.0955 + 9.5634 x weight in kg + 1.8496 x
     height in cm – 4.6756 x age in years. 
*/

import { useContext } from "react";
import { MyContext } from "../../../MyContext";

const InputControl = () => {
    const {field1, field2, field3} = useContext(MyContext);
    const control = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (field1==='' && field2==='' && field3==='') {
            e.preventDefault();
        } else {
            return null;
        }
    }
    return control;
}

export const useHandleBmr = () => {
    const { gender, field1, field2, field3, setCount } = useContext(MyContext);
    InputControl();
    const bmrCalc = () => {
        if (gender === 'M') {
            let formulaMan = (66.4730 + (13.7516 * field1) +
                (5.0033 * field2) - (6.7550 * field3)).toFixed(2);
            setCount(formulaMan);
        } else {
            let formulaWoman = (655.0955 + (9.5634 * field1) + 
            (1.8496 * field2) - (4.6756 * field3)).toFixed(2);
            setCount(formulaWoman)
        }
    }
    return bmrCalc;

}

export const useResetCount = () => {
    const { setField1, setField2, setField3, setCount } = useContext(MyContext);
    const resetCount = () => {
        setField1('');
        setField2('');
        setField3('');
        setCount(0);
    };
    return resetCount;
};
