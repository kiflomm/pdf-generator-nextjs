import { Document, Page, Text, View, Image, StyleSheet, } from '@react-pdf/renderer'
import { QRCodeSVG } from 'qrcode.react'

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
  image: {
    width: 200,
    height: 200,
  },
})

export function PDFDocument({ imageUrl }: Readonly<{ imageUrl: string }>) {

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Generated PDF</Text>
        </View>
        <View style={styles.section}>
          <Image src={imageUrl} style={styles.image} />
        </View>
      </Page>
    </Document>
  )
}

