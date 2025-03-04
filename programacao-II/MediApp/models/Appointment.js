import { Mongoose } from 'mongoose';

const Schema = Mongoose.Schema;

const appointmentSchema = new Schema({
  date: {
    type: Date,
    required: [true, 'Appointment date is required'],
  },
  doctorId: {
    type: String,
    required: [true, 'Doctor ID is required'],
  },
  pacientId: {
    type: String,
    required: [true, 'Pacient ID is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Appointment = Mongoose.model('Appointment', appointmentSchema);
export default Appointment;
