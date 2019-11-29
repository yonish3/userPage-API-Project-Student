//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {users:[],kenyaQuotes:{},pokemon:{},aboutMe:{}}
    }

    loadData(){
        //you should make all your API requests here
        //each request should update the `data` object accordingly
        $.ajax({
            url: 'https://randomuser.me/api/?results=7',
            dataType: 'json',
            success: (data) => {
              this.data.users=data.results
              //console.log(this.data.users);
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
          });

          $.ajax({
            method: "GET",
            url: 'https://api.kanye.rest/?format=text',
            dataType: 'text',
            success: (data) => {
              this.data.kenyaQuotes=data
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
          });

          let pokemonNum = Math.floor((Math.random() * 94.9) + 1)

          $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${pokemonNum}`,
            dataType: 'json',
            success: (data) => {
              this.data.pokemon.img=data.sprites.front_default
              this.data.pokemon.name=data.name
              //console.log(this.data.pokemon.sprites.front_default);
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
          });
          
          $.ajax({
            method: "GET",
            url: `https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1`,
            dataType: 'json',
            success: (data) => {
              this.data.aboutMe=data
             // console.log(this.data.aboutMe);
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
          });
          
        
    }
}
