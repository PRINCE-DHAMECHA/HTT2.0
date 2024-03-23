import React, { useState } from 'react';
import CertificateForm from '../components/CertificateForm';
import CertificatePreview from './CertificatePreview';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CertificateDocument from '../assets/certificateDocument';

const Certificate = () => {
  const [formData, setFormData] = useState({
    name: '',
    ceoName: '',
    signature: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? URL.createObjectURL(files[0]) : value
    });
  };

  return (
    <div>
      <h1>Certificate Generator</h1>
      <CertificateForm onChange={handleChange} />
      <CertificatePreview data={formData} />
      <PDFDownloadLink
        document={<CertificateDocument data={formData} />}
        fileName="certificate.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF'
        }
      </PDFDownloadLink>
    </div>
  );
};

export default Certificate;
