let searchRepositories = ()=>{
    let searchTerms = document.getElementById("searchTerms").value;
    $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data =>{
      $('#results').innerHTML = data;
    })
    
  }

$(document).ready(function (){
  
});
