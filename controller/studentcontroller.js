import studentRequest from '../model/studentLoginSchema.js';
import studentDataSchema from '../model/studentSchema.js';

export const userLogIn = async (request, response) => {
    try {
        let user = await studentDataSchema.findOne({ email: request.body.email, password: request.body.password });
        if(user) {
            return response.status(200).json(`${request.body.email} login successfull`);
        } else {
            return response.status(401).json(`Invalid okk Login ${request.body.password}`);
        }

    } catch (error) {
        response.json('Error: ', error.message);        
    }
}



export const studentRequestcontroller=async(request, response)=>{
    try {
        const RequestDetails = request.body;
       
        const newRequest = new studentRequest(RequestDetails);
        
        await newRequest.save();
        
        response.status(200).json(`Student Request has been successfully registered`);
        
    } catch (error) {
        response.status(401).json(error.message);
    }
}