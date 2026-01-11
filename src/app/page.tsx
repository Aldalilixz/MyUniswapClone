"use client"
import FloatingIcon from "@/features/swap/components/FloatingIcon";
import TokenInput from "@/features/swap/components/TokenInput";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen min-h-screen">
      <FloatingIcon />
      <p className="text-[42px] font-medium py-5">Swap anytime, anywhere.</p>
      <div className="w-lg bg-black rounded-4xl">
        <TokenInput
          id="amount-sell"
          label="Sell"
          placeholder="0"
        />
        <TokenInput
          id="amount-buy"
          label="Buy"
          placeholder="0"
          textEnd="$0"
        />
      </div>
    </div>
  )
}