/**BMR
    //in Man: BMR=66.4730 + 13.7516 x weight in kg + 5.0033 x
     height in cm – 6.7550 x age in years.
    //In women, BMR=655.0955 + 9.5634 x weight in kg + 1.8496 x
     height in cm – 4.6756 x age in years. 
*/

import { useContext } from "react";
import { MyContext } from "../../../MyContext";

type FunctionCount<T> = (args: T) => T;

export interface BmrProps {
    field1: number;
    field2: number;
    field3: number;
    setCount: FunctionCount<number>;
}

export const useHandleBmr = ({ field1, field2, field3, setCount }: BmrProps) => {
    const { gender } = useContext(MyContext);
    const bmrCalc = () => {
        if (gender === 'M') {
            let formulaMan: number = 66.4730 + (13.7516 * field1) +
                (5.0033 * field2) - (6.7550 * field3);
            setCount(formulaMan);
        } else {
            let formulaWoman: number = 655.0955 + (9.5634 * field1) + 
            (1.8496 * field2) - (4.6756 * field3);
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
