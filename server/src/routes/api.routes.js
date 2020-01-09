const { Router } = require("express")
const router = Router()

const blogCtrl = require("../controller/data.controller");
//=========================== DATA ===========================//
// "CRUD" Data
router.get("/", blogCtrl.getAllData);
router.post("/", blogCtrl.createData);
router.put("/:id", blogCtrl.editData);
router.delete("/:id", blogCtrl.deleteData);

// "CRUD" Comments
// Method PUT!!!! 
router.put("/add/:id", blogCtrl.editComments);
router.delete("/delete/:id", blogCtrl.deleteComments);

module.exports = router;