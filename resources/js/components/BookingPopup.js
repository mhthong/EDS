// resources/js/components/BookingPopup.js
import React, { useState } from 'react';

export default function BookingPopup() {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div>
            <button onClick={togglePopup}>Hiển thị Popup</button>
            {showPopup && (
                <div className="popup">
                    Nội dung của popup
                </div>
            )}
        </div>
    );
}
