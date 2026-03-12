import Contact from "../models/Contact.js";


/* ================================
   CREATE CONTACT
================================ */

export const addContact = async (req, res) => {
  try {
    const { firstName, lastName, fullName, subject, email, phoneNumber, message } = req.body;

    const trimmedFullName = fullName?.trim() || "";
    const fallbackNameParts = trimmedFullName ? trimmedFullName.split(/\s+/) : [];
    const normalizedFirstName = firstName?.trim() || fallbackNameParts[0] || "";
    const normalizedLastName = lastName?.trim() || fallbackNameParts.slice(1).join(" ");
    const normalizedFullName =
      trimmedFullName || [normalizedFirstName, normalizedLastName].filter(Boolean).join(" ");
    const normalizedSubject = subject?.trim() || "General Inquiry";
    const normalizedEmail = email?.trim() || "";
    const normalizedPhoneNumber = phoneNumber?.trim() || "";
    const normalizedMessage = message?.trim() || "";

    if (!normalizedFullName || !normalizedFirstName || !normalizedSubject || !normalizedEmail || !normalizedMessage) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const contact = await Contact.create({
      fullName: normalizedFullName,
      firstName: normalizedFirstName,
      lastName: normalizedLastName,
      subject: normalizedSubject,
      email: normalizedEmail,
      phoneNumber: normalizedPhoneNumber,
      message: normalizedMessage,
    });

    res.status(201).json({
      success: true,
      data: contact,
      message: "Contact created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



/* ================================
   GET ALL CONTACTS
================================ */

export const getContacts = async (req, res) => {
  try {

    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



/* ================================
   GET SINGLE CONTACT
================================ */

export const getSingleContact = async (req, res) => {
  try {

    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      success: true,
      data: contact,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



/* ================================
   UPDATE CONTACT
================================ */

export const updateContact = async (req, res) => {
  try {

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact updated successfully",
      data: contact,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



/* ================================
   DELETE CONTACT
================================ */

export const deleteContact = async (req, res) => {
  try {

    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};