import { SceneWrapper } from '@/components/scene-wrapper'
import { MainContent } from '@/components/main-content'
import { Nav } from '@/components/nav'

export default function Home() {
  return (
    <>
      <SceneWrapper />
      <div className="relative z-10">
        <Nav />
        <MainContent />
      </div>
    </>
  )
}

