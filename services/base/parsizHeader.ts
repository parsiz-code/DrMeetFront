import { localStoragesName } from "@/utils/models/enum/localStoragesName"

export const ParsizDefaultHeaders = () => {
    let token = '';
    let centerInfo = {};

    if (typeof sessionStorage !== 'undefined') {
        token = sessionStorage.getItem(localStoragesName.token) || '';
        centerInfo = {
            clinicId: sessionStorage.getItem(localStoragesName.clinicId),
            officeId: sessionStorage.getItem(localStoragesName.officeId),
        };
    }

    return token ? { Authorization: `Bearer ${token}`, CenterInfo: window.btoa(JSON.stringify(centerInfo)) } : {};
}
