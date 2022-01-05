export interface Personaje {
    id?:       number;
    firstName: string;
    lastName:  string;
    fullName:  string;
    title:     string;
    family:    string;
    image:     string;
    imageUrl:  string;
}


export interface IUser {
    email: string
    password: string | number
}