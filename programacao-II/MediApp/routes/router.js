import { express } from 'express';
import appoitmentController from './AppointmentController';
import doctorController from './DoctorController';
import pacientController from './PacientController';
import prescriptionController from './PrescriptionController';

let router = express.Router();

router.get('/', function (req, res) {
  console.log('hi!');
  res.status(200).json({ message: 'Hi!' });
});

router.use('/', appoitmentController);
router.use('/', doctorController);
router.use('/', pacientController);
router.use('/', prescriptionController);

export default router;
