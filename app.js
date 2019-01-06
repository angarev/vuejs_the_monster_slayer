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

            var damage = Math.max(Math.floor(Math.random() * 10) + 1, 3); //between min = 3 and max=10
            this.monsterHealth -= damage;

            if (this.monsterHealth <= 0) {
                alert("You won!");
                this.gameIsRunning = false;
                return;
            }
            

            damage = Math.max(Math.floor(Math.random() * 12) + 1, 5); //between min = 5 and max=12
            this.playerHealth -= damage;

            if (this.playerHealth <= 0) {
                alert("The monster won!");
                this.gameIsRunning = false;
                return;
            }
        },
        specilAttack: function () {
            
        },
        heal: function () {
            
        },
        giveUp: function () {
            
        }
    },
});