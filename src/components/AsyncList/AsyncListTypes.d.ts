export interface AsyncListInitialState {
    users: Array<any>, 
    loading: boolean, 
    loaded: boolean, 
    editing: string | null, 
    editData: object | null,
    asynclist: AsyncListItem
}

interface AsyncListItem {
    users: Array<any>,
    editData: {
        name: string,
    } | null,
    editing: number | null
}


export interface User {
    username: string,
    name: string,
    email: string,
    phone: string,
    address: {
        geo: {
            lat: number,
            lng: number
        }
    }
}