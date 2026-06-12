import TeamsService from "../../../shared/services/teams.service.js";
import TeamRequest from "../shared/models/request/team.request.js";

const teamsService = new TeamsService();

document
.getElementByID("teamForm")
.addEventListener("submit, createTeam");

async function createTeam (event){
    event.preventDefault();

    const name = 
    document.getElementByID("name").value;

    const description = 
    document.getElementByID("description").value;

    const teamRequest = 
    new TeamRequest(name, description);

}
    
