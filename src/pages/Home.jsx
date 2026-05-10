import EdgeContainer from "@/components/ui/EdgeContainer";
import heroImage1 from "@/assets/images/home/heroImage1.webp";
import heroImage2 from "@/assets/images/home/heroImage2.webp";
import heroImage3 from "@/assets/images/home/heroImage3.webp";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/cards/ProjectCard";
const Home = () => {
  const people = [
    { id: 1, name: "John Doe", role: "Developer" },
    { id: 2, name: "Jane Smith", role: "Designer" },
    { id: 3, name: "Bob Johnson", role: "Manager" },
    { id: 4, name: "Alice Williams", role: "Developer" },
  ];
  const projects = [
    { id: 1, title: "Project A", description: "Description of Project A", image: "https://placehold.co/600x400/png" },
    { id: 2, title: "Project B", description: "Description of Project B", image: "https://placehold.co/600x400/png" },
  ];
  const news = {title: "Next-Gen Engagement Program Launches Batch 3 with Exciting Opportunities", description: "The Next-Gen Engagement Program is thrilled to announce the launch of Batch 3, featuring three dynamic departments: Code, Connectivity, and Commerce. This new batch promises to deliver unparalleled opportunities for learning, networking, and real-world application. Participants will have access to cutting-edge resources, mentorship from industry experts, and a vibrant community of like-minded individuals. Whether you're looking to enhance your coding skills, build meaningful connections, or explore innovative commerce strategies, Batch 3 of the Next-Gen Engagement Program has something for everyone. Don't miss out on this chance to be part of the next generation of innovators and leaders!"};
  return (
    <div className="home flex flex-col">
      <section id="hero" className="flex flex-col gap-10 bg-brand-primary text-white px-5 py-10 lg:px-20">
        <div className="grid grid-col-2 lg:grid-cols-3 gap-10 items-end">
          <div className="col-span-2">
            <h1 className="font-bold text-2xl lg:text-[2.5rem]">Next-Gen engagement Program <br/> 
            Batch 3 - 3 Departments</h1>
          </div>
          <div className="hidden lg:block row-span-2">
            <img src={heroImage3} alt="hero image 3" className="w-full h-auto" />
          </div>
          <div>
            <img src={heroImage1} alt="hero image 1" className="w-full aspect-video object-cover" />
          </div>
          <div>
            <img src={heroImage2} alt="hero image 2" className="w-full aspect-video object-cover" />
          </div>
        </div>
        <div className="button-container flex gap-5 justify-end">
          <Button>JOIN THE PROGRAM</Button>
          <Button variant="primary">REGISTER FOR EVENTS</Button>
        </div>
      </section>


      <section className="flex flex-col gap-5 px-5 py-10 lg:px-20">
        <div>
          <h2 className="text-[2.5rem] font-bold text-brand-secondary-orange border-b border-black pb-4">Why join Next-Gen engagement?</h2>
          <p className="text-lg pt-4">Step into a next-generation ecosystem that redefines learning through collaboration, innovation, and real-world experience.</p>
        </div>
        <div className="flex flex-col gap-20 mt-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-center justify-between md:gap-20">
            <div className="w-fit h-fit">
              <EdgeContainer edges={["top-right"]} edgesSize="60px">
                <img src="https://placehold.co/600x400/png" alt="" className="w-full h-full object-cover"/>
              </EdgeContainer>
            </div>
            <div className="flex gap-12">
              <div className="hidden md:flex items-center">
                <svg 
                    width="full"
                    height="full" 
                    viewBox="0 0 100 100" 
                    fill="none" 
                    className="min-w-20 max-w-25 md:block"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="50" cy="50" r="48" fill="currentColor" className="text-brand-secondary-orange" />
                    <path d="M38 35L23 50L38 65" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M62 35L77 50L62 65" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M55 30L45 70" stroke="white" strokeWidth="6" strokeLinecap="round"/>
                  </svg>
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="text-4xl font-bold text-brand-secondary-orange">Code</h2>
                <p className="text-[1.25rem] ">Developing technical expertise and problem-solving skills</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse gap-5 md:flex-row md:items-center justify-between md:gap-20">
            <div className="flex gap-12">
              <div className="hidden md:flex items-center">
                <svg 
                  width="full" 
                  height="full" 
                  viewBox="0 0 200 200" 
                  fill="none" 
                  className="min-w-20 max-w-25 md:block"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="100" r="90" fill="#F58A27"/>

                  <circle 
                    cx="100" 
                    cy="100" 
                    r="55" 
                    stroke="white" 
                    strokeWidth="6" 
                    strokeDasharray="0 15" 
                    strokeLinecap="round" 
                    opacity="0.8"
                  />

                  <circle cx="100" cy="100" r="8" stroke="white" strokeWidth="3" className="text-brand-secondary-orange"/>

                  <path 
                    d="M100 92V72M94 104L80 115M106 104L120 115" 
                    stroke="white" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                  />

                  <g transform="translate(100, 52)">
                    <circle cx="0" cy="0" r="20" stroke="white" strokeWidth="3" fill="#f88d2a" className="text-brand-secondary-orange"/>
                    <circle cx="0" cy="-4" r="6" stroke="white" strokeWidth="3"/>
                    <path d="M-10 10C-10 5 -5 3 0 3C5 3 10 5 10 10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  </g>

                  <g transform="translate(62, 118)">
                    <circle cx="0" cy="0" r="20" stroke="white" strokeWidth="3" fill="#f88d2a" className="text-brand-secondary-orange"/>
                    <circle cx="0" cy="-4" r="6" stroke="white" strokeWidth="3"/>
                    <path d="M-10 10C-10 5 -5 3 0 3C5 3 10 5 10 10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  </g>

                  <g transform="translate(138, 118)">
                    <circle cx="0" cy="0" r="20" stroke="white" strokeWidth="3" fill="#f88d2a" className="text-brand-secondary-orange"/>
                    <circle cx="0" cy="-4" r="6" stroke="white" strokeWidth="3"/>
                    <path d="M-10 10C-10 5 -5 3 0 3C5 3 10 5 10 10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  </g>
                </svg>

              </div>
              <div className="flex flex-col gap-5">
                <h2 className="text-4xl font-bold text-brand-secondary-orange">Connectivity</h2>
                <p className="text-[1.25rem]">Building networks, collaboration and knowledge sharing</p>
              </div>
            </div>
            <div className="w-fit h-fit">
              <EdgeContainer edges={["top-right"]} edgesSize="60px">
                <img src="https://placehold.co/600x400/png" alt="" className="w-full h-full object-cover"/>
              </EdgeContainer>
            </div>
          </div>
          <div className="flex flex-col gap-5 md:flex-row md:items-center justify-between md:gap-20">
            <div className="w-fit h-fit">
              <EdgeContainer edges={["top-right"]} edgesSize="60px">
                <img src="https://placehold.co/600x400/png" alt="" className="w-full h-full object-cover"/>
              </EdgeContainer>
            </div>
            <div className="flex gap-12">
              <div className="hidden md:flex items-center">
                <svg 
                  width="full" 
                  height="full"
                  viewBox="0 0 200 200" 
                  fill="none" 
                  className="min-w-20 max-w-25 md:block"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="100" r="90" fill="#f88d2a"/>

                  <rect x="55" y="150" width="90" height="4" rx="2" fill="white"/>             
                  <rect x="65" y="130" width="12" height="20" rx="2" fill="white"/>
                  <rect x="83" y="115" width="12" height="35" rx="2" fill="white"/>
                  <rect x="101" y="105" width="12" height="45" rx="2" fill="white"/>
                  <rect x="119" y="90" width="12" height="60" rx="2" fill="white"/>

                  <path 
                    d="M55 125C75 125 95 110 135 65" 
                    stroke="white" 
                    strokeWidth="6" 
                    strokeLinecap="round"
                  />
                  <path 
                    d="M115 68L138 62L135 85" 
                    stroke="white" 
                    strokeWidth="6" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-5 grow-0">
                <h2 className="text-4xl font-bold text-brand-secondary-orange">Commerce</h2>
                <p className="text-[1.25rem]">Encourage innovation, entrepreneurship and real-world application</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="student-projects bg-brand-primary flex flex-col gap-5 px-5 py-10 lg:px-20">
        <div>
          <h2 className="text-[2.5rem] font-bold text-brand-secondary-orange border-b border-brand-secondary-orange pb-4">Student Projects</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
      <section className="our-people flex flex-col gap-5 px-5 py-10 lg:px-20">
        <Title>Our People</Title>
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {people.map((person, index) => (
                <div key={index} className="flex">
                  <EdgeContainer edges={["bottom-right"]} edgesSize="40px">
                    <img src="https://placehold.co/400x600/png" alt="" className="w-full h-full object-cover"/>
                  </EdgeContainer>
                </div>
              ))}
            </div>    
            <div className="flex justify-end">
              <Button variant="primary" shadowColor="#666666">All People</Button>
            </div>      
          </div>
      </section>
      <section className="news flex flex-col gap-5 px-5 py-10 lg:px-20">
        <Title>News & Updates</Title>
        <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="w-fit h-fit">
                <EdgeContainer edges={["bottom-right"]} edgesSize="40px" borders={["bottom", "right"]} bordersWidth="4">
                  <img src="https://placehold.co/600x400/png" alt="" className="w-full h-full object-cover"/>
                </EdgeContainer>
              </div>
              <div className="flex flex-col justify-between gap-5 h-full">
                <div>
                  <h3 className="text-2xl font-bold">{news.title}</h3>
                  <p>{news.description}</p>                 
                </div>
                <div className="flex justify-end">
                  <Button variant="primary" shadowColor="#666666">Read More</Button>
                </div>
              </div>
        </div>
      </section>
    </div>
    );
}

const Title = ({children}) => {
  return (
    <div>
        <h2 className="text-[2.5rem] font-bold text-brand-secondary-orange border-b border-black pb-4">{children}</h2>      
    </div>
  );
}

export default Home;