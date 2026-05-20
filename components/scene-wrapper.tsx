export function SceneWrapper() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-[#080514]">
      {/* Aurora orbs — large, deeply blurred, very low opacity */}
      <div
        className="absolute rounded-full animate-orb-1"
        style={{
          width: '700px',
          height: '700px',
          top: '-15%',
          left: '30%',
          background: 'radial-gradient(circle, rgba(109,40,217,0.18) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute rounded-full animate-orb-2"
        style={{
          width: '550px',
          height: '550px',
          bottom: '5%',
          right: '10%',
          background: 'radial-gradient(circle, rgba(79,70,229,0.14) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />
      <div
        className="absolute rounded-full animate-orb-3"
        style={{
          width: '450px',
          height: '450px',
          top: '45%',
          left: '-8%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.11) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Vignette — darkens edges so text stays readable everywhere */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 40%, transparent 30%, #080514 100%)',
        }}
      />
    </div>
  )
}
