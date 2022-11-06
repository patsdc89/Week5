class Character {
    constructor(name, race) {
        this.name = name;
        this.race = race; {
    }
}

    describe() {
        return '${this.name} plays ${this.race}.'; {
    }

class Race {
    constructor(name) {
        this.name = name;
        this.character = [];
    }
}

addCharacter(Character) {
    if (character instanceof Character) {
        this.characters.push(character);
    } else {
        throw new Error('You can only add an instance of Character. Argument is not a character: ${character}');{
    }
}

describe() {
    return '${this.name} has ${this.characters.length} characters.'; 
    }
}

class Menu {
    constructor() {
        this.race = [];
        this.selectedRace = null;
    }
}

start () {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
        switch (selection) {
            case '1':
                this.createRaces();
                break;
            case '2':
                this.viewRaces();
                break;
            case '3':
                this.deleteRaces();
            case '4':
                this.displayRaces();
                break;
            default:
                selection = 0; 
        }
        selection = this.showMainMenuOptions();
    }
}

    alert('Goodbye!');
}

showMainMenuOptions() {
    return prompt(' 
    0) exit
    1) create new Race
    2) view Race 
    3) delete Race 
    4) dislay all Races
;
}

showRaceMenuOptions(raceinfo) {
    return prompt('
    0) back
    1) create player
    2) delete player
    ----------------------
    ${raceInfo}
    ');
}

displayRaces() {
    let raceString = '';
    for (let i = 0; i <this.racess.length; i++) {
        raceString += i + ') ' + this.races[i].name + \n''; 
        }
        alert(raceString);
}

createRace() {
    let name = prompt('Enter name for new race:');
    this.racess.push(new Race(name));
}

viewRace() {
    let index = prompt(Enter the index of the this.race you wish to view:'); 
    if (index > -1 && index < this.races.length) {
        this.selectedRace = this.races.[index];
        let description = 'Race Name: ' + this.selectedRaces + \n'';

        for (let i = 0; i < this.selectedRaces.character.length; i++) {
            description += i + ') ' + this.selectedRaces.characters[i].name
               + ' - ' + this.selectedRaces.character[i].position + \n'';
        }  

        let selection = this.showRacesMenuOptions(description);
        switch (selection) {
            case '1':
                this.createCharacter();
                break;
            case '2':
                this.deleteCharacter() 
        }
    }    
}
    deleteRace() {
        let index = prompt('Enter the index of the race you wish to delete:');
        if (index > -1 && index < this.races.length) {
            this.race.splice(index, 1); 
        }
    }

    createCharacter() {
        let name = prompt('Enter name for new character:');
        let race = prompt('Enter race for new character:');
        this.selectedRace.character.push(new Character(name race)); 
    
    }

    deleteCharacter() {
        let index = prompt('Enter the index of the character you wish to delete:');
        if (index > -1 && index < this.selectedRace.characters.length) {
            this.selectedRace.characters.splice(index, 1:);
            }
    }    
    }




    let menu = new Menu();
    menu.start();

