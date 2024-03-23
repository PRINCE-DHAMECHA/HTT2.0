// CertificateForm.js
import React from 'react';

const CertificateForm = ({ onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" onChange={onChange} required />
      </div>
      <div>
        <label>CEO Name:</label>
        <input type="text" name="ceoName" onChange={onChange} required />
      </div>
      <div>
        <label>Signature:</label>
        <input type="file" name="signature" accept="image/*" onChange={onChange} required />
      </div>
      <button type="submit">Generate Certificate</button>
    </form>
  );
};

export default CertificateForm;
