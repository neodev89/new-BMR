import { blue, pink, red, yellow } from "@mui/material/colors";
import sx from "../tipes/sxTipe"; // Assuming this provides styling functionality
import { MyContext } from "../../MyContext";
import { useContext, useEffect } from "react";
import { darken } from "@mui/material";

export function useStyle() {
    const { gender } = useContext(MyContext);
    const color = gender === 'M' ? `${blue[300]}` : `${pink[200]}`;
    useEffect(() => {
        console.log(gender, color);
    }, [gender, color]);
    return {
        table: sx({
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            width: '20rem',
            borderRadius: '12% 12%',
            border: `6px double ${color}`,
            backgroundColor: 'rgba(224, 240, 255, 0.7)',
        }),
        btn: sx({
            height: '3rem',
            width: '6rem',
            margin: '0.2rem 0',
            color: 'white',
        }),
        cancella: sx({
            backgroundColor: 'white',
            color: red['A700'],
        }),
        inputText: sx({
            borderRadius: '0.25rem',
            height: '4rem',
            width: '100%',
            backgroundColor: 'transparent',
            '&:hover': {
                backgroundColor: darken(yellow[400], 0.2),
            },
            '& .MuiOutlinedInput-root': {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                height: '100%', // Cambiato da 99% a 100%
                width: '100%',
                backgroundColor: 'transparent',
                '& fieldset': {
                    backgroundColor: yellow[200],
                },
                '&:focus-within': { // Corretto da % :focus-within a &:focus-within
                    backgroundColor: yellow[200],
                }
            },
            '& .MuiOutlinedInput-input': {
                height: '100%',
                width: '100%',
                padding: '0 0.2rem',
                backgroundColor: 'transparent',
                zIndex: 1,
            }
        })
        

    }
}

export function useStyleBox() {
    const { gender }: any = useContext(MyContext);
    return {
        boxBmr: sx({
            justifyContent: 'center',
            height: '25%',
            minWidth: '150px',
            width: '99%',
            padding: 0,
            margin: 2,
            // border: '3px solid red',
            borderRadius: '32.5rem',
        }),
        corpo: sx({
            justifyContent: 'center',
            height: 'calc(100% / 2)',
            width: '100%',
            // border: '1px dashed green',
            // borderRadius: '12% 12%',
            padding: 0,
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
            // border: '3px solid purple',
        }),
        fieldBtn: sx({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '20%',
            width: '100%',
            alignItems: 'center',
            // border: '1px dashed green',
            margin: 0,
        }),
        myBox: sx({
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '99%',
            // border: '1px solid orange',
        })
    }; // Aggiungi gender come dipendenza di useMemo
}