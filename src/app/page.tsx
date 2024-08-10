import Image from "next/image";
import Socials from './components/socials'
import AboutMe from "./components/aboutme";
import WorkExperience from "./components/workexperience";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="flex flex-col p-6 md:p-24 text-black bg-white">
      <div className="flex flex-col space-y-6">

        <div className="flex flex-col md:flex-row md:space-x-10 bg-white shadow rounded-lg p-6 mt-10 text-black">
          <div className="flex justify-center md:justify-start">
            <Image className="rounded" src="/images/me.jpg" width="200" height="250" alt="" />
          </div>
          <div className="flex flex-col mt-6 md:mt-0">
            <h1 className="text-2xl font-bold">Baraka Mulungula</h1>
            <h3 className="text-lg leading-loose">J.B. Speed School of Engineering, University of Louisville</h3>
            <h4 className="text-lg leading-loose">Computer Science/Computer Engineering</h4>
            <h5 className="leading-loose">Woodford R Porter Scholar</h5>
            <span className="flex items-center mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
              Louisville, KY, United States
            </span>
            <Socials />
          </div>
        </div>

        <AboutMe />
        <WorkExperience />

        <div className="mt-10 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-2">Certifications</h2>
          <div className="bg-white shadow rounded-lg p-6 mb-6 text-black">
            <ul className="mt-3 list-disc pl-5">
              <li>AWS Cloud Practitioner Essentials</li>
              <li>Comptia A+</li>
            </ul>
          </div>
          <hr />
        </div>

        <Skills />
      </div>
    </main>
  );
}
