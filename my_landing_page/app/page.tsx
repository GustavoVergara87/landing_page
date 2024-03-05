import { Header } from '@/components/Header/Header'
import { ProjectCard } from '@/components/ProjectCard/ProjectCard'
import React from 'react'
import profilePic from "@/public/profile.jpg";

const professionalProjects = [
  {
    title: 'Landing page for pharmaceutical company',
    link: '',
    description: "Responsive landing page featuring scroll animations, parallax effects, modal portals, and a contact form. Tested across multiple browsers and devices, including Chrome, Edge, Firefox, Safari, and their smartphone counterparts.",
    appliedTechnologies: `NextJS 14, React, TypeScript, Contentstack (headless CMS), StoryBook, Tailwind CSS, GraphQL, Vanilla JS, Figma, SonarQube (Code Quality Analysis Tool)`,
    ides: 'Visual Studio Code'
  },
  {
    title: 'Real estate business site re-design',
    link: '',
    description: "Complete redesign of the site, needing to be pixel-perfect. Focus was on optimizing image loading speeds. Built fairly complex UI components such as a responsive main menu, carousels, infinite carousels and an interest calculator.",
    appliedTechnologies: `NextJS 14, React, TypeScript, Contentstack, StoryBook, Tailwind CSS, GraphQL, Figma`,
    ides: 'Visual Studio Code'
  },
  {
    title: 'Customer Service Platform for an e-commerce',
    link: '',
    description: "Refactoring an undocumented, 3-year-old codebase left without ownership. Needed to apply best practices and code optimization for speed and improved readability. My major contributions were optimizations in unit test speed and bug fixes using Chrome DevTools.",
    appliedTechnologies: `React, Redux, Context, Unit Testing (ReactTestingLibrary), TypeScript, Chrome DevTools, SQL Server, proprietary UI library, SonarQube`,
    ides: 'Visual Studio Code'
  },
]

const academicProjects = [
  {
    title: 'El Buen Sabor',
    link: 'github.com/GustavoVergara87/BuenSaborVUE',
    description: "A responsive online food shopping site featuring food catalog management (including images, descriptions, recipes, and cooking time estimations), user management (with Google login, role assignment, JWT, and route protection), basic checkout (integrated with MercadoLibre Checkout Pro), bill management, historical sale prices, and stock management.",
    appliedTechnologies: `Vue (frontend), .Net (backend), Vuex, SignalR, JWT, SQL Server, HTML5, CSS`,
    ides: 'Visual Studio, Visual Studio Code, DataGrip'
  },
  {
    title: 'Movie Catalog',
    link: 'github.com/GustavoVergara87/MovieCatalog',
    description: 'React: CRUD and search functions exercise',
    appliedTechnologies: 'React with Hooks (frontend), NodeJS (backend), MySQL',
    ides: 'Visual Studio Code'
  },
  {
    title: '2D Spaceship vs aliens',
    link: 'github.com/GustavoVergara87/Spaceships',
    description: 'Collaborative project exercise: POC of a 2D game featuring basic sprite animation, collision detection, and image manipulation.',
    appliedTechnologies: 'Python, GitHub',
    ides: 'PyCharm'
  },
  {
    title: 'Student Registration',
    link: 'github.com/GustavoVergara87/StudentRegistration',
    description: 'Java CRUD MVC exercise',
    appliedTechnologies: 'Java, MySql',
    ides: 'NetBeans'
  },
]

function Home () {
  return (<>
    <main className='flex gap-4 max-w-[1500px] mx-auto mb-[10vh]'>

      <aside className='bg-dark-red w-[35%] flex flex-col text-white pb-24'>
        <div className='bg-[conic-gradient(from_0_at_0%_0%,gray_135deg,transparent_135.1deg,transparent_360deg)] aspect-square w-full relative' >
          <div className='bg-black absolute top-0 left-0  right-0 bottom-0 m-auto w-[calc(100%-60px)] aspect-square rounded-full border-white border-[10px]'
            style={{
              backgroundImage: `url(${profilePic.src})`,
              backgroundSize: "101%",
              backgroundPosition: "22px 60%",
            }}
          ></div>
        </div>
        <div className=' p-8 flex flex-col gap-y-8 [&_ul]:list-disc [&_ul]:list-inside'>
          <p>
            Proactive, self-taught, and a team player, I view every challenge as a learning opportunity. I have received recognition from both colleagues and clients for the value I contribute as a React Frontend Developer. I successfully completed tasks such as refactoring legacy code, writing unit tests, performing performance analysis and improvements using Chrome DevTools, and implementing a number of nice-to-have features that enhanced user experience. I am both grateful and proud to have been promoted to Engineer Level II in my first year at K+C.
          </p>

          <section>
            <h2>Degree & Certifications</h2>
            <ul className='flex flex-col gap-3'>
              <li className='mt-[0.4rem]'> <div className=' inline-block align-top'>
                <p>
                  <strong>University Technical Programmer</strong>
                </p>
                <p>
                  National Technological University
                </p>
              </div>
              </li>

              <li> <div className='inline-block align-top'>
                <p>
                  <strong>React, HTML, CSS, JS, Testing, Clean Code </strong>
                </p>
                <p>
                  Udemy Courses
                </p>
              </div>
              </li>
            </ul>
          </section>
          <section>
            <h2>Technologies I use frequently</h2>
            <ul>
              <li>NextJS 14</li>
              <li>React</li>
              <li>Typescript</li>
              <li>Tailwind CSS</li>
              <li>StoryBook</li>
              <li>GraphQL</li>
              <li>Vanilla JS</li>
              <li>GitHub</li>
            </ul>
          </section>
          <section>
            <h2>Languages</h2>
            <ul>
              <li>Spanish - Native</li>
              <li>English – B2</li>
            </ul>
          </section>
          <section>
            <h2>Other skills</h2>
            <ul>
              <li>Math knowledge up to calculus</li>
              <li>Vector design, image and video manipulation</li>
            </ul>
          </section>
          <section>
            <h2>Contact info & links</h2>
            <nav className='[&>a]:flex [&>a]:items-center [&>a]:gap-4 [&>a>i]:min-w-[1rem]'>
              <a href='+54 261 – 658 1482' ><i className="fa fa-phone"></i>+54 261 – 658 1482</a>
              <a href='gustavovergara87@outlook.com'><i className="fa-regular fa-envelope" />gustavovergara87@outlook.com</a>
              <a href='github.com/GustavoVergara87'><i className="fa-brands fa-github" />github.com/GustavoVergara87</a>
              <a href='linkedin.com/in/GustavoVergara87'><i className="fa-brands fa-linkedin" />linkedin.com/in/GustavoVergara87</a>
            </nav>
          </section>
        </div>
      </aside>


      <div className='w-2/3 ml-5 [&_section]:mt-16'>
        <Header />

        <div className='ml-6'>
          <section>
            <h3 className=' text-zinc-600'>Professional Projects</h3>
            {professionalProjects.map(project => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </section>
          <section >
            <h3 className=' text-zinc-600'>Academic Projects</h3>
            {academicProjects.map(project => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </section>
        </div>
      </div>

    </main>
  </>
  )
}

export default Home