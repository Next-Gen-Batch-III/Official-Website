import Skeleton from "@/components/ui/Skeleton";
import EdgeContainer from "@/components/ui/EdgeContainer";

const PeopleCardSkeleton = () => (
    <div className="mx-auto w-full max-w-[18rem] aspect-[5/8]">
        <EdgeContainer edges={["bottom-right"]} edgesSize="40px">
            <Skeleton className="w-full h-full rounded-none" />
        </EdgeContainer>
    </div>
);

export default PeopleCardSkeleton;
