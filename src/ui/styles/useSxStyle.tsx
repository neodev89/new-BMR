import sx from "../tipes/sxTipe";

export function useStyle() {
    return {
        table: sx({
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '90%',
            width: '20rem',
            border: '2px solid black',
            borderRadius: '12% 12%',
            
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
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            height: '100%',
            width: '100%',
            margin: 2,
            border: '1px solid red',
        })
    }
}