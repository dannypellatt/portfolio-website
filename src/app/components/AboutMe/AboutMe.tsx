import React from 'react';
import Image from 'next/image';

const AboutMeSection = () => {
  return (
    <div className="my-16 mx-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 bg-base-100">
      {/* Left Column */}
      <div className="col-span-1">
        <h1 className='md:mt-4 mb-8 text-3xl md:text-5xl font-semibold'>
          About Me.
        </h1>
        <div className="carousel carousel-center max-w-full mx-auto space-x-4 rounded-box mt-8">
          <div id='slide1' className="carousel-item w-full bg-base-300">
            <div className="card w-full bg-base-300">
              <figure>
                <Image src="/banjoAndMeCoding.JPG" alt="Coding with my dog" layout="responsive" width={700} height={475} />
              </figure>
              <div className="p-4 sm:card-body">
                <h2 className="card-title">Latest Adventures in Coding</h2>
                <p>In recent years, I&rsquo;ve been lucky enough to work with some amazing people (and one very cute dog) on diverse projects. Part developer, part product manager, I&rsquo;ve used my business and coding expertise to help companies create successful solutions. <strong>Scroll right to see my whole story. -❯</strong></p>
                <div className="absolute bottom-0 right-0 pb-2 pr-2">
                  <a href="#slide2" className="btn btn-sm btn-circle">❯</a>
                </div>
              </div>
            </div>
          </div> 
          <div id='slide2' className="carousel-item w-full">
            <div className="card w-full bg-base-300 shadow-xl">
              <figure>
                <Image src="/gradphoto.jpeg" alt="Graduation photo" layout="responsive" width={700} height={475} />
              </figure>
              <div className="p-4 sm:card-body">
                <h2 className="card-title mt-2">From Rocks to Rock &apos;n&apos; Roll</h2>
                <p>Growing up in the south of England, I was the first in my family to attend college. While studying, I discovered a love for software through analyzing geophysical data. Although I graduated in 2014 with a BS in Geology, my path took an unexpected turn shortly after when I was signed as a singer-songwriter, allowing me to play music around the world.</p>
                <div className="absolute bottom-0 right-0 pb-2 pr-2">
                  <a href="#slide3" className="btn btn-sm btn-circle">❯</a>
                </div>
              </div>
            </div>
          </div> 
          <div id='slide3' className="carousel-item w-full">
            <div className="card w-full bg-base-300">
              <figure>
                <Image src="/MeMusic.jpg" alt="Playing music" layout="responsive" width={700} height={475} />
              </figure>
              <div className="p-4 sm:card-body">
                <h2 className="card-title">The Accidental Developer</h2>
                <p>After a few years writing and performing, I returned to England and started my own music business, which led me to learn <i>just enough</i> HTML, CSS, and JavaScript to build my own website. This hands-on experience sparked a new passion for web development, and I began helping friends and family with their web projects.</p>
                <div className="absolute bottom-0 right-0 pb-2 pr-2">
                  <a href="#slide4" className="btn btn-sm btn-circle">❯</a>
                </div>
              </div>
            </div>
          </div> 
          <div id='slide4' className="carousel-item w-full">
            <div className="card w-full bg-base-300 shadow-xl">
              <figure>
                <Image src="/movingToAmerica.jpeg" alt="Moving to America" layout="responsive" width={700} height={475} />
              </figure>
              <div className="p-4 sm:card-body">
                <h2 className="card-title">Stars, Stripes, and Syntax</h2>
                <p>In 2021, I got my green card and moved to the US, ready for a new career. I realized that the creativity, perseverance, and continuous learning that fueled my love of music were the same qualities needed in software development. This insight motivated me to dive deeper into coding.</p>
                <div className="absolute bottom-0 right-0 p-2">
                  <a href="#slide5" className="btn btn-sm btn-circle">❯</a>
                </div>
              </div>
            </div>
          </div> 
          <div id='slide5' className="carousel-item w-full">
            <div className="card w-full bg-base-300 shadow-xl">
              <figure>
                <Image src="/gandalf.jpeg" alt="Gandalf" layout="responsive" width={700} height={475} />
              </figure>
              <div className="p-4 sm:card-body">
                <h2 className="card-title">A Coding Makeover</h2>
                <p>Determined to transition into tech, I immersed myself in online courses and attended a bootcamp. Here, I mastered ASP.NET Core, C#, SQL, Git, OOP, TDD, debugging, and web development. It was a challenging but rewarding journey, building a solid foundation for my new career.</p>
                <div className="absolute bottom-0 right-0 pb-2 pr-2">
                  <a href="#slide6" className="btn btn-sm btn-circle">❯</a>
                </div>
              </div>
            </div>
          </div> 
          <div id='slide6' className="carousel-item w-full">
            <div className="card w-full bg-base-300 shadow-xl">
              <figure>
                <Image src="/MeComputer.JPG" alt="Me at a Computer" layout="responsive" width={700} height={475} />
              </figure>
              <div className="p-4 sm:card-body">
                <h2 className="card-title">It&apos;s Official Mum, I&apos;m a Developer!</h2>
                <p>After bootcamp, I quickly landed a job as a .NET full-stack developer. My education didn&apos;t stop there — I pursued certifications in React, Python, JavaScript, TypeScript, and more. This commitment to continuous learning keeps me adaptable and ready for new challenges, and allows me to create impactful software solutions.</p>
                <div className="absolute bottom-0 right-0 pb-2 pr-2">
                  <a href="#slide1" className="btn btn-sm btn-circle">❮</a>
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div className='py-6'>
      <a href="/Danny Pellatt - Full Stack Web Developer.pdf" target="_blank" rel="noopener noreferrer">
        <button className="btn btn-xs btn-lg bg-base-100 border border-black text-black float-right rounded-full hover:text-base-100 hover:bg-black">
          See my resume
        </button>
      </a>
    </div>
      </div>
      
      {/* Right Column */}

      <div className="col-span-1">
        <p className="mt-4 mb-8">
          Full stack <strong>Software Developer & Product Manager</strong> with extensive experience designing, planning, developing, and launching software. I&apos;ve had the privilege of working on some amazing products, at various <strong>veterinary companies</strong>, a <strong>software startup</strong>, a <strong>financial trust company</strong>, and more.
          Over the years, I&apos;ve used many different tools and techniques, some of the most memorable include:
        </p>
        <div role="tablist" className="tabs tabs-lifted">
          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Development" defaultChecked={true}/>
          <div role="tabpanel" className="tab-content bg-base-300 border-base-300 rounded-box p-6">
            <ul>
              <li className="mb-4"><strong>Programming Languages: </strong>HTML, CSS, JavaScript, TypeScript, C#, Python, SQL, JSON, XML, Python</li>
              <li className="mb-4"><strong>Frameworks and Libraries: </strong>React, Next.js, .NET, jQuery, Bootstrap, Tailwind CSS, Angular, Entity Framework, Dapper, Blazor/Mudblazor, Vue.js</li>
              <li className="mb-4"><strong>Databases and APIs: </strong>MySQL, PostgreSQL, Microsoft SQL Server, SQLite, MongoDB, RESTful APIs, Postman, SOAP, AirTable, GraphQL, Swagger/OpenAPI</li>
              <li className="mb-4"><strong>Development Tools and Environments: </strong>Visual Studio Code, Visual Studio, Git, Docker, Kubernetes, AWS, Netlify, GitHub Pages, npm/yarn, Webpack, Babel, Jenkins</li>
              <li className=""><strong>Testing and Debugging: </strong>Unit testing (with NUnit, Jest), Integration testing, Debugging tools (Chrome DevTools, Visual Studio Debugger)</li>
            </ul>
          </div>

          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Processes"/>
          <div role="tabpanel" className="tab-content bg-base-300 border-base-300 rounded-box p-6">
            <ul>
              <li className="mb-4"><strong>Agile and Scrum: </strong>Agile methodologies, Scrum framework, Sprint planning, User stories and backlog management, Daily stand-ups</li>
              <li className="mb-4"><strong>Project Management Tools: </strong>JIRA, Trello, Notion, Asana</li>
              <li className="mb-4"><strong>Documentation and Reporting: </strong>Technical documentation, User manuals, Status reports, Requirement specifications</li>
              <li className="mb-4"><strong>Product Lifecycle Management: </strong>Requirements gathering, Stakeholder management, Risk management, Time management, Quality assurance, Milestone tracking</li>
              <li className=""><strong>Product Management Experience: </strong>Market research, Competitive analysis, Product roadmap development, MVP definition, Customer interviews & feedback analysis, Feature prioritization, Cross-functional team collaboration, public speaking</li>
            </ul>
          </div>

          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="UI/UX" />
          <div role="tabpanel" className="tab-content bg-base-300 border-base-300 rounded-box p-6">
            <div>
              <ul>
                <li className="mb-4"><strong>UI/UX Design Principles: </strong>User-centered design, Interaction design, Visual design, Accessibility standards (WCAG)</li>
                <li className="mb-4"><strong>Design Tools: </strong>Figma, Sketch, Adobe XD, Canva</li>
                <li className="mb-4"><strong>Prototyping and Wireframing: </strong>Wireframe creation, User testing and feedback</li>
                <li className="mb-4"><strong>Responsive Design: </strong>Mobile-first design, Cross-browser compatibility, Media queries, Fluid grids</li>
                <li className="mb-4"><strong>Front-End Development: </strong>Component-based architecture, State management (Redux, Context API)</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-8 mb-6">On a more personal note, my passions include:</p>
        <ul className="sm:ml-4">
          <li className="mb-4">
            <strong>Learning</strong> - Isn&apos;t <em>everything</em> fascinating!? In 2021 I won
            a tv quiz show due to a penchant for (previously) useless general knowledge.
          </li>
          <li className="mb-4">
            <strong>Music</strong> - I play 7 instruments and love to write songs.
          </li>
          <li className="mb-4">
            <strong>Nature &amp; Travel</strong> - I&apos;ve visited 12 US national parks, 42 states and over 30 countries.
          </li>
          <li className="mb-4">
            <strong>Food &amp; Cooking</strong> - I promise not all English food is terrible...
            just most of it.
          </li>
          <li className="mb-4">
            <strong>Dogs</strong> - All dogs. Small dog? Lovely. Big Dog? Amazing. Just let
            me pet them. I have a very loving German Shorthaired Pointer
            called Banjo. <label htmlFor="my_modal_7" className="text-blue-700 cursor-pointer hover:text-blue-400">(Puppy Tax)</label>
          </li>
        </ul>
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <Image src="/banjoAndMeCoding.JPG" alt="Coding with my dog on my lap" layout="responsive" width={700} height={475} />
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
        </div>
      </div>

    </div>
  );
};

export default AboutMeSection;
