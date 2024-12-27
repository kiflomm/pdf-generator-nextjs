import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  qrCode: {
    width: 200,
    height: 200,
  },
})

interface PDFDocumentProps {
  qrCodeDataUrl: string       // This will be a data URL of the QR code image 
  imageUrl: string
}

export function PDFDocument({ qrCodeDataUrl, imageUrl }: Readonly<PDFDocumentProps>) {
  

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src={imageUrl} style={{ width: '100%', height: '100%' }} />
        </View>
        <View style={styles.section}>
          <Image src={qrCodeDataUrl} style={styles.qrCode} />
        </View>
      </Page>
    </Document>
  )
}

