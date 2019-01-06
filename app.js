new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {

            var damage = this.calculateDamage(3,10); //between min = 3 and max=10
            this.monsterHealth -= damage;
            
            if (this.checkWin()) {
                return;
            }

            this.monsterAttacks();           

        },
        specialAttack: function () {
            var damage = this.calculateDamage(10,20); //between min = 10 and max=20
            this.monsterHealth -= damage;
            
            if (this.checkWin()) {
                return;
            }

           this.monsterAttacks();
            
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.monsterAttacks();           
        },
        giveUp: function () {
            this.gameIsRunning = false;
            
        },
        monsterAttacks: function () {
            damage =this.calculateDamage(5,12); //between min = 5 and max=12
            this.playerHealth -= damage;
            this.checkWin();
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if(confirm("You won! New Game?")) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;    
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if(confirm("The monster won! New Game?")) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;    
                }
                return true;
            }
            return false;
        }
    },
});