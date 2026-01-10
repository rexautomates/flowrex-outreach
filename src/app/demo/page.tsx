export default function DemoPage() {
  const videoUrl = 'https://player.vimeo.com/video/1153111301'

  return (
    <main className="flex flex-col min-h-screen items-center justify-center px-4 py-8 md:py-12">
      <div className="max-w-4xl w-full px-4 relative z-10 flex flex-col items-center justify-center text-center mb-8 md:mb-12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white tracking-tight mb-6">
          AI SDR Demo
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 tracking-tight">
          Qualify leads + book meetings automatically.
        </p>
      </div>

      {/* Video Container */}
      <div className="w-full max-w-5xl px-4 mb-8 md:mb-12">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-2xl border border-white/10">
          {/* Responsive 16:9 Video Embed */}
          <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
            <iframe
              src={videoUrl}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              title="AI SDR Demo Video"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

