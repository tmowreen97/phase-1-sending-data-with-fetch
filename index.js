// Add your code here

function submitData(userName, userEmail){
  const configurationObj = {
    method : 'POST',
    headers: {
      'Content-Type':'application/json',
      Accept : 'application/json',
    },
    body: JSON.stringify({
      'name' : `${userName}`,
      'email': `${userEmail}`,
    })
  };
  return fetch('http://localhost:3000/users', configurationObj)
  .then(res => res.json())
  .then(data => addElement(data.id))
  .catch(function(error){
    alert ("Unauthorized Access")
    addElement(error.message)
  })}

//Add Element to DOM
function addElement(newID){
  document.getElementsByTagName('body')[0].innerHTML= newID
  console.log(document.querySelector('body'))
}
submitData('MichaelScott', 'MikeRules@yahoo.com')
console.log(document.querySelector('body'))
  