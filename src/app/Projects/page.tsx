import Image from "next/image";
import Project from "../components/project";
export default function Home() {
  const projects = [1, 2, 3]
  return (
    <>

      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
        <h1>Projects</h1>
        {
          projects.map((ele, index) => <Project key={index} />)
        }
      </main>
    </>
  );
}
