import { management } from "./management";

import headOrganizer from "./organizerTeams/head-organizer";
import developers from "./organizerTeams/developers";
import designers from "./organizerTeams/designers";
import proposal from "./organizerTeams/proposal";
import logistics from "./organizerTeams/logistics";
import media from "./organizerTeams/media";
import dbProject from "./organizerTeams/db-project";
import csProject from "./organizerTeams/cs-project";
import tnProject from "./organizerTeams/tn-project";
import dbTrainer from "./organizerTeams/db-trainer";
import csTrainer from "./organizerTeams/cs-trainer";
import tnTrainer from "./organizerTeams/tn-trainer";

const organizers = [
    headOrganizer,
    developers,
    designers,
    proposal,
    logistics,
    media,
    dbProject,
    csProject,
    tnProject,
    dbTrainer,
    csTrainer,
    tnTrainer,
];
const managementTeam = management.people;

export { organizers ,managementTeam as management};
