# PDF Generator with Next.js

This repository demonstrates how to generate PDFs in a Next.js application using `@react-pdf/renderer` with additional features like QR code generation.

## Features

- Generate downloadable PDFs using React components
- Dynamic QR code generation and embedding in PDFs
- Client-side PDF download functionality
- Image embedding support in PDFs
- Clean and modern UI using custom button components

## How It Works

The application consists of several key components:

1. **PdfDownloadButton Component**
   - Handles the client-side PDF generation and download functionality
   - Uses `PDFDownloadLink` from `@react-pdf/renderer` to create downloadable PDFs
   - Implements client-side rendering checks for Next.js compatibility

2. **QR Code Generation**
   - Utilizes the `qrcode` library to generate QR codes dynamically
   - Converts QR codes to data URLs for embedding in PDFs

3. **PDF Document Structure**
   - Custom PDF layout defined in `PDFDocument` component
   - Supports embedding both QR codes and images
   - Responsive design within PDF format


## Dependencies

- Next.js
- @react-pdf/renderer
- qrcode
- Custom UI components

## Usage

The PDF download button can be integrated into any page of your Next.js application. When clicked, it generates a PDF with the specified content, including QR codes and images, which can then be downloaded by the user.

## Notes

- PDF generation happens client-side to ensure compatibility with Next.js
- QR codes are generated dynamically on component mount
- The application uses modern React patterns including hooks (useState, useEffect)
