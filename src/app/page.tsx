import TokenInput from "@/features/swap/components/TokenInput";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex-row w-lg h-lg">
        <TokenInput
          id="amount-sell"
          label="Sell"
          placeholder="0"
          height={44}
        />
        <TokenInput
          id="amount-buy"
          label="Buy"
          placeholder="0"
          textEnd="$0"
          height={44}
        />
      </div>

    </div>
  )
}