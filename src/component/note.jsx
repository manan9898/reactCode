import React from 'react';
import Draggable from 'react-draggable';
import './Note.css'; // Assuming you'll style it separately

const Note = ({ id, text, position, notes, setPosition }) => {
    const handleDrag = (e, ui) => {
        const { x, y } = ui;
      
        // Check if `notes` is defined and is an array
        if (Array.isArray(notes)) {
          // Check collision with other notes
          const collision = notes.some(note => {
            if (note.id !== id) {
              const dx = position.x - note.position.x;
              const dy = position.y - note.position.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              return distance < 150; // Adjust this value as per your preference
            }
            return false;
          });
      
          if (!collision) {
            setPosition(id, { x, y });
          }
        }
      };

  return (
    <Draggable
      defaultPosition={{ x: position.x, y: position.y }}
      onStop={handleDrag}
      bounds="parent" // Restrict dragging within parent container
    >
      <div className="note">
        <textarea
          className="note-text"
          value={text}
          onChange={(e) => {}}
          placeholder="Write your note here..."
        />
      </div>
    </Draggable>
  );
};

export default Note;
