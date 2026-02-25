import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { Candidate } from "@/types/candidates"

export default function CandidateTable({
  candidates
}: {
  candidates: Candidate[]
}) {
  return (
    <Table className="mt-6">
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Telefone</TableHead>
          <TableHead>Cargo</TableHead>
          <TableHead>Data</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {candidates.map((candidate) => (
          <TableRow key={candidate.id}>
            <TableCell>{candidate.name}</TableCell>
            <TableCell>{candidate.email}</TableCell>
            <TableCell>{candidate.phone}</TableCell>
            <TableCell>{candidate.position}</TableCell>
            <TableCell>
              {new Date(candidate.createdAt).toLocaleDateString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}