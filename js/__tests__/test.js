import Team from "../classTeam";
import Charecter from "../classCharecter";

test("Проверка на работоспособность",() => {
    const team = new Team();
    let magicMan = new Charecter("dan", "magic", 250,20,100);
    let bowMan = new Charecter("quirl", "bowman", 250, 50, 80);
    team.addAll(magicMan, bowMan, magicMan);
    expect(team.members.size).toBe(2);
})

test("проверка на массив", () => {
    const team = new Team();
    let magicMan = new Charecter("dan", "magic", 250,20,100);
    team.add(magicMan);
    console.log(Array.isArray(team.members));
    team.toArray();
    expect(Array.isArray(team.members)).toBe(true);

}) 

test("Проверка добавления", () => {
    const team = new Team();
    let magicMan = new Charecter("dan", "magic", 250,20,100);
    team.add(magicMan);

    expect(() => {
        team.add(magicMan);
    }).toThrow();
    
})