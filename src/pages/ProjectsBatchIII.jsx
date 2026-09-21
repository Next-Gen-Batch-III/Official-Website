
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ProjectCard from "../components/Projects/ProjectCard";

const ProjectsBatchIII = () => {
 
  // const [search, setSearch] = useState("");
  // const navigate = useNavigate();
  // const [suggestions, setSuggestions] = useState([]);

  // const projectListBatch3 = [
  //   { title: "DOMNER", slug: "domner" },
  //   { title: "SafetyU", slug: "safetyu" },
  //   { title: "MEATEKA", slug: "meateka" },
  //   { title: "Invos", slug: "invos" },
  //   { title: "Jakkho", slug: "jakkho" },
  //   { title: "Songket", slug: "songket" },
  //   { title: "GuideMe", slug: "guideme" },
  //   { title: "LifeGoods", slug: "lifegoods" },
  //   { title: "KotChomnol", slug: "kotchomnol" },
  //   {
  //     title: "BanteayDigital",
  //     slug: "banteaydigital",
  //   },
  //   { title: "PassKru", slug: "passkru" },
  //   { title: "VEAJA", slug: "veaja" },
  //   { title: "Angket", slug: "angket" },
  //   { title: "Jorjek", slug: "jorjek" },
  //   { title: "Portify", slug: "portify" },
  //   { title: "HiORing", slug: "hioring" }

  // ];

  return (
       <div className="min-h-screen w-full flex items-center justify-center">
          <h1 className="font-semibold text-4xl">Coming soon!</h1>
      </div>
  
  //   <div className="px-8 sm:px-12 lg:px-16 max-w-full mx-auto">

  //     {/* ================= HEADER ================= */}
  //     <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 py-2 sm:py-14 md:py-16 lg:py-20">

  //       {/* Title */}
  //       <div className="flex-1 min-w-0 content-top">
  //         <h1 className="text-left md:mt-0 mt-6 text-[24px] md:text-[36px] lg:text-[40px] font-bold whitespace-nowrap">
  //           Student Project{" "}
  //           <span style={{ color: "#dd5c0b" }}>Showcase</span>
  //         </h1>

  //         <p className="text-left text-[12px] md:text-[16px] md:whitespace-nowrap">
  //           Explore innovative projects created by students during the Next-Gen Engagement Program.
  //         </p>
  //       </div>

  //       {/* Search */}
  //       <div className="flex-1 min-w-0 content-center">
  //         <div className="search-box mb-10 md:mb-0 lg:ml-28">

  //           <label className="search-icon" htmlFor="search">
  //             <svg
  //               className="w-6 h-6 text-neutral-400 ml-4"
  //               aria-hidden="true"
  //               xmlns="http://www.w3.org/2000/svg"
  //               width="24"
  //               height="24"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //             >
  //               <path
  //                 stroke="currentColor"
  //                 strokeLinecap="round"
  //                 strokeWidth="2"
  //                 d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
  //               />
  //             </svg>
  //           </label>

  //           <input
  //             id="search"
  //             type="text"
  //             placeholder=" search projects..."
  //             value={search}
  //             onChange={(e) => {
  //               const value = e.target.value;
  //               setSearch(value);

  //               if (value.trim() === "") {
  //                 setSuggestions([]);
  //                 return;
  //               }

  //               const filtered = projectListBatch3.filter((project) =>
  //                 project.title
  //                   .toLowerCase()
  //                   .startsWith(value.toLowerCase())
  //               );

  //               setSuggestions(filtered);
  //             }}
  //           />

  //           {/* Suggestions */}
  //           {suggestions.length > 0 && (
  //             <div className="suggestion-box">
  //               {suggestions.map((project, index) => (
  //                 <div
  //                   key={index}
  //                   className="suggestion-item"
  //                   onClick={() =>
  //                     navigate(`/projects/${project.slug}`)
  //                   }
  //                 >
  //                   <span
  //                     dangerouslySetInnerHTML={{
  //                       __html: project.title.replace(
  //                         new RegExp(search, "gi"),
  //                         (match) => `<mark>${match}</mark>`
  //                       ),
  //                     }}
  //                   />
  //                 </div>
  //               ))}
  //             </div>
  //           )}

  //         </div>
  //       </div>
  //     </div>

  //     {/* ================= PROJECT GRID ================= */}
  //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-[40px]">

  //       {/* DOMNER */}
  //       {"DOMNER".toLowerCase().includes(search.toLowerCase()) && (
  //         <ProjectCard
  //           image=""
  //           title="DOMNER"
  //           description=""
  //           slug="domner"
  //         />
  //       )}

  //       {/* SafetyU */}
  //       {"SafetyU".toLowerCase().includes(search.toLowerCase()) && (
  //         <ProjectCard
  //           image=""
  //           title="SafetyU"
  //           description=""
  //           slug="safetyu"
  //         />
  //       )}

  //       {/* MEATEKA*/}
  //       {"MEATEKA".toLowerCase().includes(search.toLowerCase()) && (
  //         <ProjectCard
  //           image= ""
  //           title="MEATEKA"
  //           description=""
  //           slug="meateka"
  //         />
  //       )}

  //       {/* Invos */}
  //       {"Invos".toLowerCase().includes(search.toLowerCase()) && (
  //         <ProjectCard
  //           image= ""
  //           title="Invos"
  //           description=""
  //           slug="invos"
  //         />
  //       )}

  //       {/* Jakkho */}
  //       {"Jakkho".toLowerCase().includes(search.toLowerCase()) && (
  //         <ProjectCard
  //           image=""
  //           title="Jakkho"
  //           description=""
  //           slug="jakkho"
  //         />
  //       )}

  //       {/* Songket */}
  //       {"Songket".toLowerCase().includes(search.toLowerCase()) && (
  //         <ProjectCard
  //           image= ""
  //           title="Songket"
  //           description=""
  //           slug="songket"
  //         />
  //       )}

  //       {/* GuideMe */}
  //       {"GuideMe".toLowerCase().includes(search.toLowerCase()) && (
  //         <ProjectCard
  //           image=""
  //           title="GuideMe"
  //           description=""
  //           slug="guideme"
  //         />
  //       )}

  //       {/* LifeGoods */}
  //       {"LifeGoods".toLowerCase().includes(search.toLowerCase()) && (
  //         <ProjectCard
  //           image=""
  //           title="LifeGoods"
  //           description=""
  //           slug="lifegoods"
  //         />
  //       )}

  //       {/* KotChomnol */}
  //       {"KotChomnol".toLowerCase().includes(search.toLowerCase()) && (
  //         <ProjectCard
  //           image=""
  //           title="KotChomnol"
  //           description=""
  //           slug="kotchomnol"
  //         />
  //       )}

  //       {/* BanteayDigital*/}
  //       {"BanteayDigital".toLowerCase().includes(search.toLowerCase()) && (
  //         <ProjectCard
  //           image= ""
  //           title="BanteayDigital"
  //           description=""
  //           slug="banteaydigital"
  //         />
  //       )}

  //       {/* PassKru */}
  //       {"PassKru".toLowerCase().includes(search.toLowerCase()) && (
  //         <ProjectCard
  //           image=""
  //           title="PassKru"
  //           description=""
  //           slug="passkru"
  //         />
  //       )}

  //       {/* VEAJA */}
  //       {"VEAJA".toLowerCase().includes(search.toLowerCase()) && (
  //         <ProjectCard
  //           image=""
  //           title="VEAJA"
  //           description=""
  //           slug="veaja"
  //         />
  //       )}

  //       {/*Angket */}
  //       {"Angket".toLowerCase().includes(search.toLowerCase()) && (
  //         <ProjectCard
  //           image=""
  //           title="Angket"
  //           description=""
  //           slug="angket"
  //         />
  //       )}

  //       {/* Jorjek */}
  //       {"Jorjek".toLowerCase().includes(search.toLowerCase()) && (
  //         <ProjectCard
  //           image=""
  //           title="Jorjek"
  //           description=""
  //           slug="jorjek"
  //         />
  //       )}

  //       {/* Portify*/}
  //       {"Portify".toLowerCase().includes(search.toLowerCase()) && (
  //         <ProjectCard
  //           image=""
  //           title="Portify"
  //           description=""
  //           slug="portify"
  //         />
  //       )}

  //       {/* HiORing */}
  //       {"HiORing".toLowerCase().includes(search.toLowerCase()) && (
  //         <ProjectCard
  //           image= ""
  //           title="HiORing"
  //           description=""
  //           slug="hioring"
  //         />    
  //       )}
  //     </div>
  //   </div>

  );
};

export default ProjectsBatchIII;
