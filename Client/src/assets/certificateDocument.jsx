import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 50,
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    marginBottom: 10
  },
  value: {
    fontSize: 16,
    marginBottom: 20
  },
  signature: {
    width: 200,
    height: 50
  }
});

const CertificateDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Certificate of Achievement</Text>
      <View>
        <Text style={styles.label}>Recipient Name:</Text>
        <Text style={styles.value}>{data.name}</Text>
      </View>
      <View>
        <Text style={styles.label}>CEO Name:</Text>
        <Text style={styles.value}>{data.ceoName}</Text>
      </View>
      <View>
        <Text style={styles.label}>Signature:</Text>
        <Image src={data.signature} style={styles.signature} />
      </View>
    </Page>
  </Document>
);

export default CertificateDocument;
