'use client'
import QRCode from 'qrcode'
import { useState, useEffect } from 'react'
import { PDFDocument } from '@/actions/PDFDocument'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { Button } from '@/components/ui/button'



const PdfProp = () => {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("")
  async function generateQRCodeDataUrl(data: string): Promise<string> {
    try {
      const dataUrl = await QRCode.toDataURL(data)
      return dataUrl
    } catch (error) {
      console.error('Error generating QR code: ', error)
      throw error
    }
  }
  
  useEffect(() => {
    const generateQRCode = async () => {
      const dataUrl = await generateQRCodeDataUrl('https://example.com')
      setQrCodeDataUrl(dataUrl)
    }
    generateQRCode()
  }, [])


  return <PDFDocument qrCodeDataUrl={qrCodeDataUrl} imageUrl="./getcho.jpg" />
}

export default function PdfDownloadButton() {
    const [client, setClient] = useState(false)

    useEffect(() => {
      setClient(true)
    }, [])

  return ( 
        client && 
        <PDFDownloadLink document={<PdfProp />} fileName="example.pdf">
            <Button>Download PDF</Button>
        </PDFDownloadLink>
  )
}