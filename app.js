// importing core modules
import fs from 'fs';
import path from 'path'

// importing 3rd party modules
import express from "express";
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';

//importing routes
import systemAdminRoute from "./src/routes/admin/systemAdminRoute";

//regional routes
import regionalAdminRoute from "./src/routes/regional/regionalAdminRoute";
import regionalOfficialsRoute from './src/routes/regional/regionalOfficialsRoute';
import regionalCurriculum from './src/routes/regional/regionalCurriculumRoute';
import regionalCourseContent from './src/routes/regional/regionalCourseContentRoute';
import workingPathRoute from './src/routes/regional/workingPathRoute';

//school routes
import schoolAdminRoute from "./src/routes/school/schoolAdminRoute";
import schoolOfficialsRoute from './src/routes/school/schoolOfficialsRoute';
import schoolCurriculum from './src/routes/school/schoolCurriculumRoute';
import schoolCourseContent from './src/routes/school/schoolCourseContentRoute';
import schoolCompetition from './src/routes/school/schoolCompetitionRoute';
import schoolClass from './src/routes/school/schoolClassRoute';
import schoolTestBank from './src/routes/school/schoolTestBankRoute';

//initialing express
const app = express();

//3rd party middlewares
const accessLogStream = fs.createWriteStream(__dirname + '/config/access.log', { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(cors());
dotenv.config();

//applying routes
app.use('/api/admin', systemAdminRoute);
app.use('/api/reb/admin', regionalAdminRoute);
app.use('/api/reb/officials', regionalOfficialsRoute);
app.use('/api/reb/curriculum', regionalCurriculum);
app.use('/api/reb/courseContent', regionalCourseContent);
app.use('/api/reb/workingPath', workingPathRoute);
// applying school routes
app.use('/api/school/admin', schoolAdminRoute);
app.use('/api/school/officials', schoolOfficialsRoute);
app.use('/api/school/curriculum', schoolCurriculum);
app.use('/api/school/courseContent', schoolCourseContent);
app.use('/api/school/competition', schoolCompetition);
app.use('/api/school/schoolClass', schoolClass);
app.use('/api/school/schoolTestBank', schoolTestBank);



//error handling
app.use((req, res, next) => {
  const err = new Error("Not found!");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message
  });
});

export default app;
