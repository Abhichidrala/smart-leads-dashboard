import express from "express";

import {
  createLead,
  deleteLead,
  getLeadById,
  getLeads,
  updateLead,
} from "../controllers/leadController";

const router = express.Router();

router.post("/", createLead);

router.get("/", getLeads);

router.get("/:id", getLeadById);

router.put("/:id", updateLead);

router.delete("/:id", deleteLead);

export default router;