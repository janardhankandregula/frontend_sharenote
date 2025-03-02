// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// function GetNote() {
//   const [retrievedNote, setRetrievedNote] = useState(null);
//   const { uniqueId } = useParams(); // Access the unique ID from the URL

//   useEffect(() => {
//     const fetchNote = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/api/notes/${uniqueId}`
//         );
//         setRetrievedNote(response.data);
//       } catch (error) {
//         console.error("Error retrieving note:", error);
//         alert("Note not found");
//       }
//     };

//     if (uniqueId) {
//       fetchNote();
//     }
//   }, [uniqueId]);

//   return (
//     <div>
//       {retrievedNote ? (
//         <>
//           <h2>{retrievedNote.title}</h2>
//           <p>{retrievedNote.content}</p>
//         </>
//       ) : (
//         <p>Loading note...</p>
//       )}
//     </div>
//   );
// }

// export default GetNote;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  CircularProgress,
  Paper,
  Button,
} from "@mui/material";

function GetNote() {
  const [retrievedNote, setRetrievedNote] = useState(null);
  const { uniqueId } = useParams(); // Access the unique ID from the URL

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(
          `https://sharenottest123.onrender.com/api/notes/${uniqueId}`
        );
        setRetrievedNote(response.data);
      } catch (error) {
        console.error("Error retrieving note:", error);
        alert("Note not found");
      }
    };

    if (uniqueId) {
      fetchNote();
    }
  }, [uniqueId]);

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Box
        sx={{
          padding: 3,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        {retrievedNote ? (
          <>
            <Typography variant="h4" gutterBottom>
              {retrievedNote.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {retrievedNote.content}
            </Typography>
            <Button variant="contained" color="primary" href="/" sx={{ mt: 2 }}>
              Go Back
            </Button>
          </>
        ) : (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default GetNote;
