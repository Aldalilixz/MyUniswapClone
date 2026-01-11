import Image from 'next/image'

export default function FloatingIcon() {
    return (
        <div className="z-0">
            {/* first icon floating */}
            <div
                className="absolute top-20 left-20 w-25 h-25 cursor-pointer transition-all duration-700"
                style={{
                    animation: 'floatAndRotate 6s linear infinite',
                    filter: 'blur(10px)'
                }
                }
                onMouseEnter={(e) => e.currentTarget.style.filter = 'blur(0px)'}
                onMouseLeave={(e) => e.currentTarget.style.filter = 'blur(10px)'}
            >
                <div className="w-full h-full rounded-full flex items-center justify-center">
                    <Image
                        src="/iconTokens/eth.png"
                        alt="Token"
                        fill
                        className="rounded-full"
                    />
                </div>
            </div>

            {/* second icon floating */}
            <div
                className="absolute top-30 right-32 w-25 h-25 cursor-pointer transition-all duration-700"
                style={{
                    animation: 'floatAndRotate2 8s linear infinite',
                    filter: 'blur(10px)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.filter = 'blur(0px)'}
                onMouseLeave={(e) => e.currentTarget.style.filter = 'blur(10px)'}
            >
                <div className="w-full h-full rounded-full flex items-center justify-center">
                    <Image
                        src="/iconTokens/eth.png"
                        alt="Token"
                        fill
                        className="rounded-full"
                    />
                </div>
            </div >

            {/* third icon floating */}
            < div
                className="absolute bottom-14 left-1/3 w-25 h-25 cursor-pointer transition-all duration-700"
                style={{
                    animation: 'floatAndRotate3 7s linear infinite',
                    filter: 'blur(10px)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.filter = 'blur(0px)'}
                onMouseLeave={(e) => e.currentTarget.style.filter = 'blur(10px)'}
            >
                <div className="w-full h-full rounded-full flex items-center justify-center">
                    <Image
                        src="/iconTokens/eth.png"
                        alt="Token"
                        fill
                        className="rounded-full"
                    />
                </div>
            </div >

            {/* 4th icon floating */}
            < div
                className="absolute bottom-6 right-15 w-25 h-25 cursor-pointer transition-all duration-700"
                style={{
                    animation: 'floatAndRotate 7s linear infinite',
                    filter: 'blur(10px)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.filter = 'blur(0px)'}
                onMouseLeave={(e) => e.currentTarget.style.filter = 'blur(10px)'}
            >
                <div className="w-full h-full rounded-full flex items-center justify-center">
                    <Image
                        src="/iconTokens/eth.png"
                        alt="Token"
                        fill
                        className="rounded-full"
                    />
                </div>
            </div >

            {/* 5th icon floating */}
            < div
                className="absolute bottom-1/3 left-0 w-25 h-25 cursor-pointer transition-all duration-700"
                style={{
                    animation: 'floatAndRotate 7s linear infinite',
                    filter: 'blur(10px)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.filter = 'blur(0px)'}
                onMouseLeave={(e) => e.currentTarget.style.filter = 'blur(10px)'}
            >
                <div className="w-full h-full rounded-full flex items-center justify-center">
                    <Image
                        src="/iconTokens/eth.png"
                        alt="Token"
                        fill
                        className="rounded-full"
                    />
                </div>
            </div >

            <style jsx>{`
        @keyframes floatAndRotate {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
          }
          100% {
            transform: translateY(0px) rotate(360deg);
          }
        }

        @keyframes floatAndRotate2 {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(-180deg);
          }
          100% {
            transform: translateY(0px) rotate(-360deg);
          }
        }

        @keyframes floatAndRotate3 {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-18px) rotate(180deg);
          }
          100% {
            transform: translateY(0px) rotate(360deg);
          }
        }
      `}</style>
        </div>
    );
}