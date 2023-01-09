import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';

const studentRequestSchema = new mongoose.Schema({
    //id: String,
    name: String,
    roll: String,
    yearofgraduating: String

});

const studentRequest = mongoose.model('studentRequest', studentRequestSchema);
export default studentRequest;
