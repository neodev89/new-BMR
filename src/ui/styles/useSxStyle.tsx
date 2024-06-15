import { blue, blueGrey, grey, pink, red } from "@mui/material/colors";
import sx from "../tipes/sxTipe"; // Assuming this provides styling functionality
import { MyContext } from "../../MyContext";
import { useContext } from "react";

export function useStyle() {

    return {
        table: sx({
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            width: '20rem',
            borderRadius: '12% 12%',
            border: `6px double ${blue[300]}`,
            backgroundColor: 'rgba(224, 240, 255, 0.7)',
        }),
        btn: sx({
            height: '50px',
            width: '100px',
            margin: '2px 0',
            color: 'white',
        }),
        cancella: sx({
            backgroundColor: 'white',
            color: red['A700'],
        }),
       
    }
}

export function useStyleBox() {
    const { gender }: any = useContext(MyContext);
    return {
        boxBmr: sx({
            justifyContent: 'center',
            height: 'calc(100% / 4)',
            width: '99%',
            margin: 2,
            // border: '1px solid red',
            borderRadius: '50px',
        }),
        corpo: sx({
            justifyContent: 'center',
            height: 'calc(100% / 2)',
            width: '100%',
            // border: '1px dashed green',
            // borderRadius: '12% 12%',
            padding: 2,
        }),
        typography: sx({
            fontFamily: 'MontSerrat',
            fontWeight: '600',
            color: gender === 'M' ? blue[300] : pink[200],
        }),
        field: sx({
            height: '80%',
            width: '100%',
            justifyContent: 'center',
            // border: '1px dashed green',
        }),
        fieldBtn: sx({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '20%',
            width: '100%',
            alignItems: 'center',
            // border: '1px dashed green',
        }),
    }; // Aggiungi gender come dipendenza di useMemo
}