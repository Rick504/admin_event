export const translateItem = (item) => {

    switch (item) {
        case 'GENERAL_ADMIN':
            return 'Administrador'
        case 'OPERATOR':
            return 'Operador'
        case 'VISIT':
            return 'Visitante'
    }

}

export default translateItem
