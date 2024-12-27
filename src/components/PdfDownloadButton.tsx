'use client'
import { PDFDownloadLink } from "@react-pdf/renderer"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { PDFDocument } from "@/actions/PDFDocument"
import { Button } from "./ui/button"

export const DownloadButton = ({imageUrl} : {imageUrl:string}) =>{
    const [isClient,setIsClient] = useState(false)

    //this was needed to prevent bug of react pdf ,which
    // ensures components renders only on client

    useEffect(() => {
        setIsClient(true)
    },[])

    return isClient ? (
        <PDFDownloadLink 
            fileName={'student-list'} 
            document = {
                <PDFDocument 
                    imageUrl={imageUrl}
                />   
            }
        >
            <Button>Download PDF</Button>
        </PDFDownloadLink>
    ):(<Loader2 size={32} />)
}