import { SceneWrapper } from '@/components/scene-wrapper'
import { RoadmapContent } from '@/components/roadmap-content'
import { Nav } from '@/components/nav'

export default function RoadmapPage() {
  return (
    <>
      <SceneWrapper />
      <div className="relative z-10">
        <Nav />
        <RoadmapContent />
      </div>
    </>
  )
}

