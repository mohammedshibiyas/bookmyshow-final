

const url=window.location.href
const search=new URLSearchParams(url.split("?")[1]);
const id=search.get("id");
console.log(id);


fetch(`http://localhost:3004/api/moviedetails/${id}`,{
    method:"POST"
}) .then((res) => res.json())
.then((data) => {
  console.log(data);



  document.getElementById("form").innerHTML = `
  <form action="../index.html" id="frm"> <label for="">Movie Title</label>
  <div><input type="text" value=${data.Movie_Title} placeholder="Enter the Movie Name" class="m-name" id="movie-name"></div>
  <label for="">Movie Category</label>
  <div><input type="text" value="${data.Category}" placeholder="Enter the Category of Movie" class="m-name" id="category"></div>
  <div class="row">
    <div class="col-lg-6"><label for="">Rating</label>
    <div><input type="text" placeholder="Rating Out of 10" value=${data.Rating} class="rating" id="rating"></div></div>
    <div class="col-lg-6">
      <label for="">Release Date</label>
      <div><input type="date" value=${data.Release_Date} placeholder="dd/mm/yy"class="r-date" id="r-date"></div>
    </div>
  </div>
  <label for="" class="lng">Languages</label>
<div><input type="text" title="lnag" value=${data.Languages} placeholder="Available languagees" class="languages" id="languages"></div> 
 <textarea name="dscrpn" id="description" cols="31" rows="7" title="des" placeholder="Enter the short description about the movie"></textarea> 
 <div>
  <label for="">Upload Movie Banner</label>
  <input type="file" title="file" class="file" id="upload-banner">
  <div class="view-banner" id="upload-banner">
  <img src="${data.Movie_banner}">
  </div>
 </div> 
 <div>
  <label for="">Upload Movie Poster</label>
  <input type="file" title="file" class="file" id="upload-poster">
  <div class="view-poster" id="upload-poster">
  <img src="${data.Movie_poster}">
  </div>
 </div> 
 <div class="sbmt-btn">
  <button id="submit-btn">Submit</button></form>`


 
})

