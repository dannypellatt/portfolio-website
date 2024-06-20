import { useState } from 'react';

const tabs = [
  {
    id: 1,
    imageSrc: '/project-imgs/epr.jpg',
    altText: 'Tab 1',
    title: "Enterprise Practice Report",
    description: "A subscription-based online database of major players in the pet health industry.",
    longDescription: "I led the transformation of the Enterprise Practice Report into a dynamic, subscription-based online database. By migrating to advanced software, establishing data integrity protocols, and redesigning the user interface, I created a seamless user experience. Utilizing web-scraping and AI, I automated data collection and enrichment, ensuring accurate information. This project resulted in a profitable resource with over 50,000 subscribers, providing enhanced industry insights.",
    outcomes: "",
    brief: "Online Directory",
    tools: ["Airtable", "Softr", "CodeChimp", "Clay", "Notion", "ChatGPT"],
  },
  {
    id: 2,
    imageSrc: '/project-imgs/dataco.jpg',
    altText: 'Tab 2',
    title: "DataCo",
    description: "An integration and migration platform that uniformly presents data from any PIMS source.",
    longDescription: "A .NET application that collects information reports from various veterinary practice's with different management software, and converts it into uniform data. Making the most of data sharding, cloud storage, and no UI to maximise transfer speeds. Partners gain real-time insights into the status of connected practices, known issues, and all communications, with the ability to instantly onboard and self-install practices if desired.",
    brief: "Integration Platform",
    tools: [".NET", "C#", "MySQL", "Angular", "Git", "Kubernetes", "Azure Cloud Services", "Azure Pipelines", "Entity Framework"],
  },
  {
    id: 3,
    imageSrc: '/project-imgs/outlier.jpg',
    altText: 'Tab 4',
    title: "Outlier Advisors",
    description: "An easily editable website for a consultancy company in the pet health industry",
    longDescription: "I was hired to design, create, and launch a business website. The owner of the company's first priority was being able to edit the website herself, at a moment's notice. I chose Weebly for it's ease of use for non-technical users, as well as it's design and cost. I used plugins in order to achieve specific needs, such as a LinkedIn feed directly within the site.",
    brief: "Weebly Website",
    tools: ["Weebly", "Wireframing", "Canva", "Graphic Design", "Best Fit for Client", "Social Media Integration", ],
  },
  {
    id: 4,
    imageSrc: '/project-imgs/tvcc.jpg',
    altText: 'Tab 5',
    title: "The Vintage Crockery Cupboard",
    description: "A one-page website for a party rental company, meant to generate customer inquiries",
    longDescription: "This client needed a fully responsive website with SEO in mind. It had to conform to exisiting design guidelines, enhancing the brand. The main purpose was to allow customers to find and easily reach the business.",
    brief: "Bootstrap Website",
    tools: ["HTML", "CSS", "JavaScript", "Bootstrap", "Canva", "Netlify", ],
  },
  {
    id: 5,
    imageSrc: '/project-imgs/petlog-temp.jpg',
    altText: 'Tab 6',
    title: "PetLog",
    description: "A Proof of Concept app designed to track a pet's health through daily reports.",
    longDescription: "I designed and built the PetLog app for a veterinary practice group interested in exploring its potential use. The app enables users to log various metrics about their pets to detect changes, aid recovery, and preempt illness. I utilized React's Next.js with Tailwind CSS for the front end, connecting to a Postgres database by leveraging React Server Components, achieving fast, dynamic rendering of CRUD operations. It also featured user authentication to support multiple accounts.",
    brief: "Pet Health App",
    tools: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Server Components", "Postgres Database", "Vercel", "OAuth"],
  },
  {
    id: 6,
    imageSrc: '/project-imgs/prism-mock.jpg',
    altText: 'Tab 3',
    title: "Prism",
    description: "A pricing scenario tool that allows retailers to predict revenue before adjusting stock prices.",
    longDescription: "I was part of a small team within a software company creating a tool on behalf of large retail group, with a collection of outlets around the US. It allowed the business to adjust their pricing in different locations depending on local factors, as well as plan sales strategies, and track changes in holistic purchasing habits.",
    brief: "Pricing Tool",
    tools: [".NET", "C#", "MySQL", "Blazor", "MudBlazor", "Git", ],
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="relative w-full p-0 mb-4 bg-base-100">
      <div className="overflow-x-auto hide-scrollbar w-full relative">
        <div className="flex justify-start xl:justify-center space-x-2 w-full">
          {tabs.map((tab) => (
            <div key={tab.id} className="flex flex-col items-center flex-shrink-0">
              {/* Option Card */}
              <div className='cursor-pointer' onClick={() => setActiveTab(tab.id)}>
                <img
                  src={tab.imageSrc}
                  alt={tab.altText}
                  className={`w-40 h-24 sm:w-60 sm:h-30 ${activeTab === tab.id ? '' : ''}`}
                />
                <p className="mt-4 text-center font-semibold">{tab.brief}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 p-4">
        {/* In Depth Project Card */}
        <div className="card w-full rounded-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className='p-8 bg-base-300 rounded-xl order-2 md:order-1'>
            <div>
              <h2 className="card-title text-2xl md:text-4xl font-semibold pb-4">{activeTabData?.title}</h2>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-normal">{activeTabData?.description}</p>
            </div>
            <div>
              <p className="pt-8">{activeTabData?.longDescription}</p>
            </div>
          </div>

          <div className="m-4 justify-center order-1 md:order-2">
            {activeTabData && (
              <img
                src={activeTabData.imageSrc}
                alt={activeTabData.altText}
                className="w-full h-auto"
              />
            )}
            <div className="m-4 flex flex-wrap justify-center md:justify-center">
              {activeTabData?.tools && activeTabData.tools.map((tool, index) => (
                <span key={index} className="badge badge-neutral m-1">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;