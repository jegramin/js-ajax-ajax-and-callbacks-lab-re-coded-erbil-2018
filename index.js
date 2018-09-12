let searchRepositories = ()=>{
    let searchTerms = document.getElementById("searchTerms").value;
    $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data =>{
      $('#results').innerHTML = `<div>
          <p>name: ${data.name}, description: ${data.description}, repository owner login: ${data.owner.login}</p>
          <a href="${data.html_url}">${data.name}</a>
          <a href="" onclick="showCommits()">Show Commits</a>
      </div>`;
      
    })
    
  }
  function showCommits(){
    $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`, data => {
    $('#details').html(data)
  }).
  }

$(document).ready(function (){
  
});
