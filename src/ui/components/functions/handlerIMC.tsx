import { useContext } from "react"
import { MyContext } from "../../../MyContext"
import { useSaveStateBmr } from "../../general-state/stateBmr";

export const useHandlerIMC = () => {
    const { gender, setCountImc } = useContext(MyContext);
    const { state } = useSaveStateBmr();
    const height = state.height;

    const IMCcalc = (values: { vita: string, collo: string, fianchi: string, statura: string }) => {
        if (values['collo'] === '' 
            || values['fianchi'] === '' 
            || values['statura'] === '' 
            || values['vita'] === ''
        ) {
            alert('Completa tutti i campi')
        }
        
        const Vita =  values['vita'] ? parseFloat(values['vita']): 0;
        const Collo = values['collo'] ? parseFloat(values['collo']) : 0;
        const Fianchi = values['fianchi'] ? parseFloat(values['fianchi']) : 0;
        const Statura = height ? parseFloat(height) : parseFloat(values['statura']);

    }
}