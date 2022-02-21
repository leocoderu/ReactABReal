export default class TestAbService {
    _users = [
        {
            id: 1,
            name: 'Elizabeth Spichkina(TEST)',
            dateReg: '2021-01-01T00:00',
            dateAct: '2021-01-02T00:00'
        },
        {
            id: 2,
            name: 'Victory Perekrestova(TEST)',
            dateReg: '2021-02-01T00:00',
            dateAct: '2021-02-02T00:00'
        },
        {
            id: 3,
            name: 'Ann Butorina(TEST)',
            dateReg: '2021-03-01T00:00',
            dateAct: '2021-03-02T00:00'
        }
    ];

    getAllPeople() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() > 1) // 0.75
                    reject(new Error('Something bad happened'));
                else
                    resolve(this._users);
            }, 700);
        });
    };
};