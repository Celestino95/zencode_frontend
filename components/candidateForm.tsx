'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createCandidate } from "@/services/api"

export default function CandidateModal({ onSuccess }: any) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: ""
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await createCandidate(form)
    setForm({ name: "", email: "", phone: "", position: "" })
    onSuccess()
    console.log("Submit clicado")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Novo Candidato</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastrar Candidato</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Nome</Label>
            <Input name="name" value={form.name} onChange={handleChange} required />
          </div>

          <div>
            <Label>Email</Label>
            <Input name="email" value={form.email} onChange={handleChange} required />
          </div>

          <div>
            <Label>Telefone</Label>
            <Input name="phone" value={form.phone} onChange={handleChange} />
          </div>

          <div>
            <Label>Cargo</Label>
            <Input name="position" value={form.position} onChange={handleChange} />
          </div>

          <Button type="submit" className="w-full">
            Salvar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}