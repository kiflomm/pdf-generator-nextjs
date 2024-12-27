import  DownloadButton  from "@/components/PdfDownloadButton"
export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">PDF Generator</h1>
      <DownloadButton />
    </main>
  )
}

