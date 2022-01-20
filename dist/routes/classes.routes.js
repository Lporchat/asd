"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classesRoutes = void 0;
const express_1 = require("express");
const ensureAuthenticate_1 = require("../middleware/ensureAuthenticate");
const listClasseIdController_1 = require("../modules/classes/usecase/listClasseIdController");
const listClassesAllController_1 = require("../modules/classes/usecase/listClassesAllController");
const putClassesController_1 = require("../modules/classes/usecase/putClassesController");
const userCreateController_1 = require("../modules/user/usecase/createUser/userCreateController");
const createClassController = new userCreateController_1.ClassesCreateController();
const listClassesAllController = new listClassesAllController_1.ListClassesAllController();
const listClasseIDController = new listClasseIdController_1.ListClasseIDController();
const putClassesAllController = new putClassesController_1.PutClassesAllController();
const classesRoutes = (0, express_1.Router)();
exports.classesRoutes = classesRoutes;
classesRoutes.post('/', ensureAuthenticate_1.ensureAuthenticated, createClassController.handle);
classesRoutes.get('/', ensureAuthenticate_1.ensureAuthenticated, listClassesAllController.handle);
classesRoutes.get('/:id', ensureAuthenticate_1.ensureAuthenticated, listClasseIDController.handle);
classesRoutes.put('/:id', ensureAuthenticate_1.ensureAuthenticated, putClassesAllController.handle);
