//your JS code here. If required.
const form = document.getElementById('voteForm');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

form.addEventListener("submit",function(e){
	e.preventDefault();
	const name=nameInput.value.trim();
	const age= Number(ageInput.value.trim());

	if(!name || !age){
		alert("Please enter valid details");
		return;
	}
	const check=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age>=18){
				resolve(`Welcome, ${name}. You can vote.`);
			}else{
				reject(`Oh sorry ${name}. You aren't old enough.`);
			}
		},4000);
	})
	check.then(message=>alert(message)).catch(err=>alert(err));
})