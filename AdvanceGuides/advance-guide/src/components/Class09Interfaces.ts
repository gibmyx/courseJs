export interface User {
    name: string,
    lastName: string,
    onChangeUser: (name: string, value: string) => void,
}