let searchRepositories = ()=>{
    let searchTerms = document.getElementById("searchTerms").value;
    $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data =>{
      $('#results').innerHTML = `<div>
          <p>name: ${data.name}, description: ${data.description}, repository owner login: ${data.owner.login}</p>
          <a href="${result.html_url}">${result.name}</a>
      </div>`;
      
    })
    
  }

$(document).ready(function (){
  
});
