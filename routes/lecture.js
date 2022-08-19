const lecturerRoute = require('express').Router()
const { LecturerController } = require('../controllers')

lecturerRoute.get('/', LecturerController.getLecturers)
lecturerRoute.post('/create', LecturerController.create)
lecturerRoute.get('/information/:UserId', LecturerController.getInformation)
lecturerRoute.delete('/delete/:id', LecturerController.delete)
lecturerRoute.put('/update/:id', LecturerController.update)
lecturerRoute.get('/search', LecturerController.search)


module.exports = lecturerRoute