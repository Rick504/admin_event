export const verifyPermission = (permission) => {

    switch (permission) {
        case 'GENERAL_ADMIN':
            'Administrador'
            break;

        case 'OPERATOR':
            'Operador'
            break;

        case 'VISIT':
            'Visitante'
        break;
    }

}

export default { verifyPermission }
