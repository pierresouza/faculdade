import { Mongoose } from 'mongoose';

const Schema = Mongoose.Schema;

const DoctorSchema = new Schema({
  doctorId: {
    type: String,
    required: [true, 'Doctor ID is required'],
  },
  name: {
    type: String,
    required: [true, 'Doctor name is required'],
  },
  login: {
    type: String,
    required: [true, 'Doctor login is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Doctor password is required'],
  },
  medicalSpecialty: {
    type: String,
    required: [true, 'Doctor medical specialty is required'],
  },
  medicalRegister: {
    type: String,
    required: [true, 'Doctor medical register is required'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Doctor email is required'],
  },
  phone: {
    type: String,
    required: [true, 'Doctor phone is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Doctor = Mongoose.model('Doctor', DoctorSchema);
export default Doctor;
