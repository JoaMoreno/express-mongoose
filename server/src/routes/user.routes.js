const { Router } = require("express")
const router = Router()

const userCtrl = require("../controller/auth.controller");

router.get("/profile", userCtrl.profile);
router.post("/singup", userCtrl.createData);
router.post("/login", userCtrl.login)
router.delete("/:id", userCtrl.deleteData);

// DEV
router.get("/", userCtrl.getAllData)

module.exports = router;