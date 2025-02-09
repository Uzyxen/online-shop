type Product = {
    title: string;
    description: string;
    price: number;
    subcategoryId: number;
}

type Login = {
    email: string;
    password: string;
}

type Register = {
    email: string;
    password: string;
    passwordRepeat: string;
}

type Order = {
    id: number;
    date: string;
    status: 'placed' | 'shipped' | 'delivered' | 'cancelled' | 'returned' | 'progress';
    price: number;
}