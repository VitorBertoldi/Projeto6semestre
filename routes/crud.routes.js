
import {
    addStudent,
    selectStudent,
    selectStudentbyId,
    atualizarStudent,
    deleteStudent
} from "../controller/crud.controller.js";
import express from "express";

const crudRoutes = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  const router = express.Router();

  router.post("/students", addStudent);

  router.get("/students", selectStudent);

  router.get("/students/:id", selectStudentbyId);

  router.put("/students/:id", atualizarStudent);

  router.delete("/students/:id", deleteStudent);

  app.use('/api/crud',
    //[middleware.authJwt.verifyTokenCredentials],
    router
  );
};

export default crudRoutes;
