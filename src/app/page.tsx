import Link from 'next/link'
import Image from 'next/image'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import { auth } from '@clerk/nextjs/server'

export default function Home() {
  const { userId }: { userId: string | null } = auth()
  return (
    <main className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-6 ">
      <Image src="/intro.png" height={200} width={200} alt="Home" />
      <div className="text-xl font-semibold text-center flex items-center justify-center">
        Building habits just made easy <br /> with HABBY
      </div>
      {userId ? (
        <Link
          className="p-3 bg-[#5F33E1] max-w-96 w-full flex flex-row  gap-3 items-center justify-center rounded-full text-center text-white font-semibold"
          href="/home"
        >
          <span>Get Habby</span>
          <Image src="/arrow-right.png" alt="Arrow" height={40} width={20} />
        </Link>
      ) : (
        <Link
          className="p-3 bg-[#5F33E1] max-w-96 w-full flex flex-row  gap-3 items-center justify-center rounded-full text-center text-white font-semibold"
          href="/sign-in"
        >
          <span>Get Started</span>
          <Image src="/arrow-right.png" alt="Arrow" height={40} width={20} />
        </Link>
      )}
    </main>
  )
}
