import express from "express";
import {
  addContact,
  getContacts,
  getSingleContact,
  updateContact,
  deleteContact
} from "../controllers/contactController.js";

const router = express.Router();

router.post("/add-contact", addContact);
router.get("/get-contacts", getContacts);
router.get("/get-contact/:id", getSingleContact);
router.put("/update-contact/:id", updateContact);
router.delete("/delete-contact/:id", deleteContact);

export default router;