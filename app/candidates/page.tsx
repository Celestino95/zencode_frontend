'use client'

import { useEffect, useState } from "react"
import { fetchCandidates } from "@/services/api"
import { Candidate } from "@/types/candidates"
import CandidateModal from "@/components/candidateForm"
import CandidateTable from "@/components/CandidateTable"

export default function CandidatesPage() {
  const [candidates, setCandidates] = useState<Candidate[]>([])
  const [loading, setLoading] = useState(true)

  async function loadCandidates() {
    setLoading(true)
    const data = await fetchCandidates()
    setCandidates(data)
    setLoading(false)
  }

  useEffect(() => {
    loadCandidates()
  }, [])

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Gestão de Candidatos
        </h1>

        <CandidateModal onSuccess={loadCandidates} />
      </div>

      {loading ? (
        <p className="mt-6">Carregando...</p>
      ) : (
        <CandidateTable candidates={candidates} />
      )}
    </div>
  )
}