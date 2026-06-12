import TeamsService from "../../../shared/services/teams.service.js";

const teamsService = new TeamsService();

document
.getElementByID("teamForm")
.addEventListener("submit, createTeam");

buildTable();