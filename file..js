<script>
//   function submitHandler(){
    
    // var name = document.getElementById("name").value;
    // var email = document.getElementById("email").value;
    // var regex = /^[a-zA-Z ]{2,30}$/;
    // if (regex.test(name)) {
    //       console.log(11111);
    //     }
    //     else{
    //     document.getElementById("nameError").innerText="only alphabates accept"
    //     }
//         event.preventDefault();
// const formData = new FormData(event.target);
// formDataList.innerHTML = ''; // clear previous form data
// for (const [name, value] of formData.entries()) {
//   const li = document.createElement('li');
//   li.textContent = `${name}: ${value}`;
//   formDataList.appendChild(li);

//   }
  const form = document.getElementById('my-form');
const formDataList = document.getElementById('form-data');

form.addEventListener('submit', event => {
event.preventDefault();
const formData = new FormData(event.target);
formDataList.innerHTML = ''; // clear previous form data
// var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var regex = /^[a-zA-Z ]{2,30}$/;
//     if (regex.test(name)) {
//       document.getElementById("nameError").remove();
//         }
//         else{
//         document.getElementById("nameError").innerText="only alphabates accept"
//         }
for (const [name, value] of formData.entries()) {
  const li = document.createElement('li');
  li.textContent = `${name}: ${value}`;
  formDataList.appendChild(li);
}
});
</script>