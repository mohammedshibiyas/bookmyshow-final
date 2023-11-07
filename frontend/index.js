async function getdata(){
    const task=await fetch("http://localhost:3004/api/movies")
    const data=await task.json();
    console.log(data);
    s="";
    data.map(dt=>{s
        s+=` <div class="movies">
        <div class="row">
            
            <div class="col-lg rec-movie">
               <a href="./pages/movei-details.html?id=${dt._id}" title="link"> <img src="${dt.Movie_poster}" alt=""></a>
                <p class="movies-p1">${dt.Movie_Title}</p>
                <p class="movies-p2">${dt.Category}</p>
            </div>
        </div>
    </div>`
    })


document.getElementById("list-data").innerHTML=s;

const key=localStorage.key(0);
const value=JSON.parse(localStorage.getItem(key));
fetch("http://localhost:3004/api/home",{
    headers:{Authorization:`Bearer ${value}`},
})
.then((res)=>res.json())
.then((data)=>{
    const{msg}=data;
    document.getElementById("name").innerHTML=msg
    ?`${msg}<button class="sign-in" onclick="del()" >Logout</button> <button class="sign-in">
     <a href="./pages/register-movie.html" id="reg">Register</a><button>`
    :` <a href="./pages/create.html"><button class="sign-in">Login</button></a>`;
})
.catch((error)=>{
    console.log(error);
})

   
}

getdata();
function del(){
  var confirmed=confirm("do you want to logout")
  if(confirmed)
  {
    localStorage.clear();
    location.reload()
  }
    
}