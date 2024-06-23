export interface AllEmployees {
    data: any
    // "id": number,
    // "employee_name": string,
    // "employee_salary": number,
    // "employee_age": number,
    // "profile_image": string,
    
    "imageUrl": string,
    "firstName": string,
    "lastName": string,
    "email": string,
    "contactNumber": number,
    "age": number,
    "dob": string,
    "salary": number,
    "address": string

}

export interface AllTourists {
    "id": number,
    "tourist_name": string,
    "tourist_email": string,
    "tourist_location": string,
    "createdat": string
}
export interface UserData {
    "userId": number,
    "id": string,
    "title": string,
    "body": string
}

