import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Typography, Container, Box } from "@mui/material";

function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [noteId, setNoteId] = useState("");
  const [sharableLink, setSharableLink] = useState("");

  const createNote = async () => {
    try {
      const response = await axios.post(
        "https://sharenottest123.onrender.com/api/notes",
        {
          content,
        }
      );

      const uniqueId = response.data.uniqueId;
      setNoteId(uniqueId); // Save the unique ID for the note
      //   setSharableLink(`http://localhost:3000/note/${uniqueId}`); // Create sharable link
      setSharableLink(`${window.location.origin}/note/${uniqueId}`); // Use current origin for
      alert("Note created successfully");
    } catch (error) {
      console.error("Error creating note:", error);
      alert("Error creating note");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        mt={4}
        p={3}
        bgcolor="background.paper"
        borderRadius={2}
        boxShadow={3}
      >
        <Typography variant="h4" gutterBottom>
          Create Note
        </Typography>

        {/* Title field */}
        {/* <TextField
          fullWidth
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        /> */}

        {/* Content field */}
        <TextField
          fullWidth
          label="Content"
          variant="outlined"
          multiline
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          margin="normal"
        />

        {/* Create Note Button */}
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={createNote}
          sx={{ mt: 2 }}
        >
          Create Note
        </Button>

        {/* Display Note ID and Sharable Link */}
        {noteId && (
          <Box mt={4}>
            {/* <Typography variant="h6">
              Note Created! Unique ID: {noteId}
            </Typography> */}
            <Typography variant="body1" mt={2}>
              <strong>Sharable Link:</strong>
            </Typography>
            <Typography variant="body1" color="primary">
              <a href={sharableLink} target="_blank" rel="noopener noreferrer">
                {sharableLink}
              </a>
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default CreateNote;
