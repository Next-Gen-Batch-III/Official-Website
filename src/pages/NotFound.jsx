import { Link, useNavigate } from "react-router-dom";
import EdgeContainer from "@/components/ui/EdgeContainer";

const NotFound = ({
  status = "404",
  badge = "404 // ROUTE_NOT_FOUND",
  title = "Page Not Found",
  message = "The link you followed may be broken, or the page may have been moved or removed.",
}) => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: "Overview", path: "/overview", desc: "Learn about the program" },
    { name: "Journey", path: "/journey", desc: "Timeline & milestones" },
    { name: "Projects", path: "/projects/batch-iii", desc: "Batch III showcase" },
    { name: "News", path: "/news", desc: "Latest updates & articles" },
    { name: "FAQ", path: "/faq", desc: "Common questions answered" },
  ];

  return (
    <main className="min-h-[75vh] flex flex-col items-center justify-center section-padding bg-white font-sans text-brand-primary">
      <div className="max-w-3xl w-full flex flex-col items-center text-center">
        {/* Hero Status Code Visual */}
        <div className="relative my-2 select-none">
          <h1 className="text-7xl sm:text-9xl md:text-[11rem] font-bold font-cadt text-brand-primary tracking-tighter leading-none">
            {status === "404" ? (
              <>
                4<span className="text-brand-secondary-orange">0</span>4
              </>
            ) : (
              status
            )}
          </h1>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-brand-secondary-orange to-transparent" />
        </div>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary mt-6 mb-3">
          {title}
        </h2>
        <p className="text-neutral-600 max-w-md text-sm sm:text-base leading-relaxed mb-8">
          {message}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          {/* Back to Home Button */}
          <Link to="/" className="group">
            <div className="relative w-fit h-fit">
              <div className="absolute inset-0">
                <EdgeContainer
                  edges={["bottom-right"]}
                  edgesSize="10px"
                  borderColor="#808080"
                  borders={["bottom", "right", "left", "top"]}
                  bordersWidth={0}
                >
                  <div className="w-full h-full min-h-10 min-w-36 bg-neutral-500 opacity-100" style={{ backgroundColor: "#808080" }} />
                </EdgeContainer>
              </div>
              <div className="relative transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                <EdgeContainer edges={["bottom-right"]} edgesSize="10px">
                  <div className="px-6 py-2.5 bg-brand-secondary-orange text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Back to Home
                  </div>
                </EdgeContainer>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
