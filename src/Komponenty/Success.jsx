import React from "react";

export const Success = ({ count }) => {
  return (
    <div className="success-block">
      <img src="src/assets/success.svg" alt="Success" />
      <h3>Z powodzeniem!</h3>
      <p>Zaproszenie zostało wysłane do wybranych {count} użytkowników.</p>
      <button
        onClick={() => window.location.reload()}
        className="send-invite-btn"
      >
        Z powrotem
      </button>
    </div>
  );
};
