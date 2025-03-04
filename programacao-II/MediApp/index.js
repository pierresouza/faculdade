import { express } from 'express';
import { pkg } from 'body-parser';
import { router } from './routes/router';

const app = express();
const { json, urlencoded } = pkg;

app.use(json());
app.use(urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log('Server is running on port 3000');
});

app.use('/', router);
