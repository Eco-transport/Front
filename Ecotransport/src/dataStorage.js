const tokenKey = 'token-ingesoft';
var global = "hahah";

export function getAuthenticationToken(){
    return localStorage.getItem( tokenKey );
}

export function setAuthenticationToken( token = '' ){
    return localStorage.setItem( tokenKey, token );
}

export function deleteAuthenticationToken(){
    return localStorage.removeItem( tokenKey );
}