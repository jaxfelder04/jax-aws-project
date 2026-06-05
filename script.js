let users = JSON.parse(localStorage.getItem("users")) || [];

function saveData(){

localStorage.setItem(
"users",
JSON.stringify(users)
);

updateDashboard();

displayUsers();
}

function createUser(){

let name =
document.getElementById("name").value;

let username =
document.getElementById("username").value;

let department =
document.getElementById("department").value;

let group =
document.getElementById("group").value;

if(name === "" || username === ""){

alert("Fill all fields");

return;
}

let user = {

id:Date.now(),

name:name,

username:username,

department:department,

group:group,

status:"Active"
};

users.push(user);

saveData();

document.getElementById("name").value="";
document.getElementById("username").value="";
}

function updateDashboard(){

document.getElementById("totalUsers").innerText=
users.length;

document.getElementById("activeUsers").innerText=
users.filter(
u=>u.status==="Active"
).length;

document.getElementById("lockedUsers").innerText=
users.filter(
u=>u.status==="Locked"
).length;

document.getElementById("disabledUsers").innerText=
users.filter(
u=>u.status==="Disabled"
).length;
}

function lockUser(id){

users.find(
u=>u.id===id
).status="Locked";

saveData();
}

function unlockUser(id){

users.find(
u=>u.id===id
).status="Active";

saveData();
}

function disableUser(id){

users.find(
u=>u.id===id
).status="Disabled";

saveData();
}

function resetPassword(id){

alert(
"Password Reset Successful"
);
}

function displayUsers(){

let search =
document.getElementById("search").value.toLowerCase();

let output="";

users.filter(user=>

user.name.toLowerCase().includes(search)

||

user.username.toLowerCase().includes(search)

).forEach(user=>{

output += `

<div class="user-card">

<h2>${user.name}</h2>

<p><strong>Username:</strong> ${user.username}</p>

<p><strong>Department:</strong> ${user.department}</p>

<p><strong>Security Group:</strong> ${user.group}</p>

<p class="status ${user.status.toLowerCase()}">
${user.status}
</p>

<div class="actions">

<button onclick="lockUser(${user.id})">
Lock Account
</button>

<button onclick="unlockUser(${user.id})">
Unlock Account
</button>

<button onclick="disableUser(${user.id})">
Disable Account
</button>

<button onclick="resetPassword(${user.id})">
Reset Password
</button>

</div>

</div>

`;
});

document.getElementById(
"userContainer"
).innerHTML = output;
}

updateDashboard();

displayUsers();