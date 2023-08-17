import React, { useState } from 'react';
import Modal from './Modal'; // Tạo một component Modal hoặc Popup tương tự

function BookingForm({ showrooms, groupServices, services }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ... Other component logic

  return (
    <div>
      {/* ... Your existing JSX code */}

      {/* Button to open the modal */}
      <button onClick={() => setIsModalOpen(true)}>Open Popup</button>

      {/* Modal */}
      {isModalOpen && (
        <Modal>
          {/* Content of the modal */}
          <h2>Popup Content</h2>
          {/* ... Additional content */}
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        </Modal>
      )}
    </div>
  );
}

export default BookingForm;
