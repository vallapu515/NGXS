
export class AddEmployee{
    static readonly type = '[Employee] Add';

    constructor (public payload: any){

    }
}

export class GetEmploye{
    static readonly type = '[Employee] Get';
}


export class DeleteEmployee{
    static readonly type = '[Employee] Delete';
    constructor (public id: string){}
}

export class UpdateEmployee{
    static readonly type = '[Employee] Update';
    constructor (public payload: any) {}
}


