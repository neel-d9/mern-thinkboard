import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createNote = (req, res) => {
  res.status(201).json({ message: "note created" });
};

export const updateNote = (req, res) => {
  res.status(200).json({ message: "note updated" });
};

export const deleteNote = (req, res) => {
  res.status(200).json({ message: "note deleted" });
};
