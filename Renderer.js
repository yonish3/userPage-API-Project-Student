// Fill in the functions for your Renderer Class

class Renderer {
    _renderUsers(users) {
       const source = $('#users-template').html()
       const template = Handlebars.compile(source)
       const newHTML = template({userImg:users[0].picture.medium, firstName: users[0].name.first, lastName: users[0].name.last,userLocation:users[0].location.city});
       $('.user-container').append(newHTML);
    }

    _renderFriends(users) {
       users.shift()
       const source = $('#friends-template').html()
       const template = Handlebars.compile(source)
       const newHTML = template({users});
       $('.friends-container').append(newHTML);   
    }

    _renderQuote(quoteInfo) {
        const source = $('#quote-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({quote:quoteInfo});
        $('.quote-container').append(newHTML);
    }

    _renderPokemon(pokemonInfo) {
        const source = $('#pokemon-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({pokemon:pokemonInfo.img,pokemonName:pokemonInfo.name});
        $('.pokemon-container').append(newHTML);
    }

    _renderMeat(meatText) {
        const source = $('#aboutMe-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({aboutMe:meatText});
        $('.meat-container').append(newHTML);
    }

    render(data){
        //invokes all the individual _render methods
        this._renderUsers(data.users)
        this._renderFriends(data.users)
        this._renderQuote(data.kenyaQuotes)
        this._renderPokemon(data.pokemon)
        this._renderMeat(data.aboutMe[0])
    }
}

