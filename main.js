// Create instances of your classes
// Create the loadData and renderData functions - these should use the relevant instance

const apiManager = new APIManager()
const renderer= new Renderer()

$('#loadUser').on('click',function(){
    
    apiManager.loadData()
    })

$('#displayUser').on('click',function(){
    $(".user-container").empty()
    $(".quote-container").empty()
    $(".pokemon-container").empty()
    $(".meat-container").empty()
    $(".friends-container").empty() 
    renderer.render(apiManager.data)

    })

