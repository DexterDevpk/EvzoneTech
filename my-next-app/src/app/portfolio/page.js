import GlassmorphismGrid from "@/Components/GlassmorphismGrid";
import Our_projects from "@/Components/OurProjects";
import PortfolioHead from "@/Components/PortfolioHead";


export default function page() {
  return (
    <>
    <PortfolioHead/>
    <GlassmorphismGrid/>
    <Our_projects showAll={true}/>
    </>
  )
}
