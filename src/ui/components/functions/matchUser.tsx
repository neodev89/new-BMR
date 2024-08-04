import { useContext } from "react";
import { MyContext } from "../../../MyContext";

interface User {
    nome: string;
    cognome: string;
    email: string;
    data_di_nascita: string;
}

interface ParamProps {
    nome: string;
    cognome: string;
    email: string;
    data_di_nascita: string;
}

const users: User[] = [
    {
        nome: 'Admin',
        cognome: 'Admin',
        email: 'bula@bula.bmr',
        data_di_nascita: '01/01/1900'
    }
];

export const utente: User[] = [];

const formatDate = (date: string): string => {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
};

export const useMatchUser = () => {
    const { setSign } = useContext(MyContext)
    const matchUser = (param: ParamProps) => {
        const formattedParam = {
            ...param,
            data_di_nascita: formatDate(param.data_di_nascita)
        };
        console.log("Formatted Param:", formattedParam);
        for (const user of users) {
            console.log("Comparing with user:", user);
            if (user.nome === formattedParam.nome
                && user.cognome === formattedParam.cognome
                && user.email === formattedParam.email
                && user.data_di_nascita === formattedParam.data_di_nascita
            ) {
                utente.push(formattedParam);
                console.log(`Match found ${utente}`);
                setSign(true);
                return utente;
            } else {
                setSign(false);
                console.log("No match found for:", user);
            }
        }
        return false; // Return null if no match is found
    };

    return matchUser;
};
