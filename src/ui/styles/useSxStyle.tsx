import { blue } from "@mui/material/colors";
import sx from "../tipes/sxTipe"; // Assuming this provides styling functionality

export function useStyle() {
    return {
        table: sx({
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '90%',
            width: '20rem',
            borderRadius: '12% 12%',
            border: `6px double ${blue[300]}`,
            backgroundColor: 'rgba(224, 240, 255, 0.7)',
        }),
        btn: sx({
            height: '50px',
            width: '150px',
        }),
    }
}

export function useStyleBox() {

    return {
        boxBmr: sx({
            justifyContent: 'center',
            height: 'calc(100% / 4)',
            width: '99%',
            margin: 2,
            border: '1px solid red',
            borderRadius: '50px',
        }),
        corpo: sx({
            justifyContent: 'center',
            height: 'calc(100% / 2)',
            width: '100%',
            border: '1px dashed green',
            borderRadius: '12% 12%',
            padding: 2,
        }),
        typography: sx({
            fontFamily: 'MontSerrat',
            fontWeight: '600',
        })
    }; // Aggiungi gender come dipendenza di useMemo
}