
//src/app/api/graphql/route.ts
import { createYoga } from 'graphql-yoga'
import { schema } from '@/lib/schema'

const yoga = createYoga({ schema })

export async function GET(request: Request) {
  return yoga.handleRequest(request, {})
}

export async function POST(request: Request) {
  return yoga.handleRequest(request, {})
}