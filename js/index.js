import Team from "./classTeam";
import Charecter from "./classCharecter";

let Magician = new Charecter("Dan","magician", 250,20,100);
let magTeam = new Team();

magTeam.add(Magician);
magTeam.add(Magician);
magTeam.add(Magician);

console.log(magTeam);