let searchRepositories = ()=>{
    let searchTerms = document.getElementById("searchTerms").value;
    $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data =>{
      $('#results').innerHTML = `<p>name: ${data.name}, description: ${data.description}, repository owner login: ${data.owner.login}</p>`;
    })
    
  }

$(document).ready(function (){
  
});
