import { useLocation } from 'react-router-dom';

// Data imports
import { news } from '../data/news';
import { projects } from '../data/projects';
import { people } from '../data/people';
import { organizers } from '../data/organizers';
import { management } from '../data/management';

// Component imports
import ProjectCard from '../components/cards/ProjectCard';
import NewsCard from '../components/layout/news/NewsCard';
import PeopleCard from '../components/cards/PeopleCard';

export default function Search() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get('q') || '';
  const lowercaseQuery = q.toLowerCase();

  const isCategorySearch = (keywords) => keywords.some(kw => lowercaseQuery === kw || lowercaseQuery === kw + 's');

  const showAllNews = isCategorySearch(['news', 'article']);
  const showAllProjects = isCategorySearch(['projects']);
  const showAllPeople = isCategorySearch(['people', 'person', 'team', 'member']);
  const showAllManagement = isCategorySearch(['management', 'manager', 'director']);
  const showAllOrganizers = isCategorySearch(['organizer']);

  const matchedNews = showAllNews ? news : (news || []).filter(n => 
    n.headline?.toLowerCase().includes(lowercaseQuery) ||
    n.subtitle?.toLowerCase().includes(lowercaseQuery) ||
    n.article?.toLowerCase().includes(lowercaseQuery)
  );

  const matchedProjects = showAllProjects ? projects : (projects || []).filter(p => 
    p.title?.toLowerCase().includes(lowercaseQuery) ||
    p.description?.toLowerCase().includes(lowercaseQuery)
  );

  let allPeople = [];
  const organizerPeople = [];
  
  organizers.forEach(group => {
    if(group.people) organizerPeople.push(...group.people);
  });
  
  (people || []).forEach(group => {
    if(group.people) allPeople.push(...group.people);
  });
  
  (management.people || []).forEach(person => {
    allPeople.push(person);
  });
  
  allPeople.push(...organizerPeople);
  
  allPeople = Array.from(new Map(allPeople.map(item => [item.name, item])).values());
  
  const matchedPeople = showAllPeople ? allPeople : showAllManagement ? (management.people || []) : showAllOrganizers ? (organizerPeople) : allPeople.filter(p => {
    const roleString = Array.isArray(p.role) ? p.role.join(' ') : (p.role || '');
    return p.name?.toLowerCase().includes(lowercaseQuery) ||
           roleString.toLowerCase().includes(lowercaseQuery);
  });


  return (
    <main className="min-h-screen lg:px-20 px-5 font-cadt">
      <h1 className="text-3xl font-bold mb-10 text-gray-800">
        Search Results for: <span className="text-brand-secondary-orange">"{q}"</span>
      </h1>
      
      {matchedProjects.length === 0 && matchedNews.length === 0 && matchedPeople.length === 0 && (
         <div className="flex flex-col items-center justify-center py-20 text-gray-500">
            <svg className="w-16 h-16 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
            </svg>
            <p className="text-xl">No results found.</p>
         </div>
      )}

      {matchedProjects.length > 0 && (
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6 pb-2 text-gray-800 border-b-2 border-brand-secondary-orange inline-block">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedProjects.map(project => (
              <ProjectCard key={project.id || project.slug} project={project} />
            ))}
          </div>
        </section>
      )}

      {matchedNews.length > 0 && (
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6 pb-2 text-gray-800 border-b-2 border-brand-secondary-orange inline-block">News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedNews.map(n => (
              <NewsCard 
                key={n.id || n.slug} 
                slug={n.slug} 
                thumbnail={n.thumbnail} 
                headline={n.headline} 
                date={n.date} 
              />
            ))}
          </div>
        </section>
      )}

      {matchedPeople.length > 0 && (
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6 pb-2 text-gray-800 border-b-2 border-brand-secondary-orange inline-block">People</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {matchedPeople.map((person, index) => (
              <PeopleCard 
                key={index}
                name={person.name}
                role={person.role}
                image={person.image}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}