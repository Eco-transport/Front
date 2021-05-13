const tokenKey = 'token-ingesoft';

export function getAuthenticationToken(){
    return localStorage.getItem( tokenKey );
}

export function setAuthenticationToken( token = '' ){
    return localStorage.setItem( tokenKey, token );
}

export function deleteAuthenticationToken(){
    return localStorage.removeItem( tokenKey );
}