export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(charecter) {
        if(this.members.has(charecter)) {
            throw new Error("Такой персонаж уже добавлен, дурака ты кусок!");
        } else {
        this.members.add(charecter);
        }
    }

    addAll(...allCharecters) {
        for (let char of allCharecters) {
            this.members.add(char);
        }
    }

    toArray() {
       this.members =  Array.from(this.members);
    }
}