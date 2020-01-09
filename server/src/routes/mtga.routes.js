const { Router } = require("express")
const router = Router()

const mtgaCtrl = require("../controller/mtga.controller");

router.get("/", mtgaCtrl.getAllData);
router.post("/", mtgaCtrl.createData);
router.get("/:id", mtgaCtrl.getData);
router.delete("/:id", mtgaCtrl.deleteData);

module.exports = router;