import sx from '../../tipes/sxTipe';

export function useStyleBox() {
    return {
        myBox: sx({
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
        })
    }
}