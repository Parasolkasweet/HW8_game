
// Основанный на истории о походе героев в поисках сокровища.
// Давайте представим, что у нас есть классы Hero (герой) и Treasure (сокровище), и мы хотим создать
// экземпляры этих классов и взаимодействовать с ними.

// В этом уроке мы создаем двух героев (hero1 и hero2) и сокровище (treasure). Герои могут атаковать
// друг друга и исцелять себя, а также находить и собирать сокровище. Вся эта функциональность реализована
// с помощью методов классов Hero и Treasure

// Homework
// Продолжить то, что начали во время урока. Добавить кнопки для исцеления для каждого героя, также когда здоровье у героя меньше или равно 0, значит другой выигрывает. Дополнительно можете визуализировать создать героев с помощью инпутов, добавить имена на экране, количество здоровье и т.д



class Hero {
    constructor(name, health){
        this.name = name;
        this.health = health;
    }

    attack(target){
        console.log(`${this.name} атакует ${target.name}!`);
        
        target.health -= 10;
        
        console.log(`${target.name} получает урон. Здоровье: ${target.health}%`);
    }

    heal(){
        console.log(`${this.name} исцеляет себя!`);
        
        this.health += 5;
        
        console.log(`${this.name} исцелен. Здоровье: ${this.health}%`);
    }
}

class Treasure {
    constructor(value){
        this.value = value;
    }

    collect(hero){
        console.log(`${hero.name} находит сокровище стоимостью ${this.value}$`);
    }
}

const hero1 = new Hero("Герой 1", 100);
const hero2 = new Hero("Герой 2", 80);
const treasure = new Treasure(500);

hero1.attack(hero2);
hero2.heal(); // 5%

treasure.collect(hero1)

//============================================================

function finishGame(event){
    if(event.key === "a" || event.key === "A"){
        // console.log(`Keydown on ${event.key}`);
        hero1.attack(hero2);
    }else if(event.key === "b" || event.key === "B"){
        // console.log(`Keydown on ${event.key}`);
        hero2.attack(hero1);
    }
    // Добавить кнопки для исцеления для каждого героя, также когда здоровье у героя меньше или равно 0, значит другой выигрывает. 
    if(event.key === "c" || event.key === "C"){
        // console.log(`Keydown on ${event.key}`);
        hero1.heal();
    }else if(event.key === "d" || event.key === "D"){
        // console.log(`Keydown on ${event.key}`);
        hero2.heal();
    }
    gameOver();
}

document.addEventListener("keydown", finishGame);

function gameOver() {
    if(hero1.health <= 0) {
        console.log(`${hero2.name} won`);
        document.removeEventListener("keydown", finishGame);
    } else if(hero2.health <= 0) {
    console.log(`Game over, ${hero1.name} won`); 
    document.removeEventListener("keydown", finishGame)
    }
}


