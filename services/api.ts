import { Candidate } from '@/types/candidates';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchCandidates(): Promise<Candidate[]> {
  const res = await fetch(`${BASE_URL}/api/candidates`);
  return res.json();
}

export async function createCandidate(data: Partial<Candidate>) {
  const res = await fetch(`${BASE_URL}/api/candidates`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return res.json();
}