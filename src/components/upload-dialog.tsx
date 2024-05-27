"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import UploadForm from "@/components/upload-form"

export function FileUploadDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          Upload PDF
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Upload files</DialogTitle>
          <DialogDescription>
            Drag and drop your files here or click to browse.
          </DialogDescription>
        </DialogHeader>
        <UploadForm />
      </DialogContent>
    </Dialog>
  )
}
