
document.getElementById('tax').onclick = function () {
    let firstname = document.getElementById("FirstName").value
    let YourJob = document.getElementById("YourJob").value
    let salary = +(document.getElementById("salary").value)
    let taxerate = +(document.getElementById("taxerate").value)
    let taxes = salary * (taxerate/100)


      let outputDiv =  document.getElementById("result")
      let line1 = document.createElement('p')
      line1.className = "p1" ;
      let line2 = document.createElement('p')
      line2.className = "p2" ;
      line1.textContent = "welcome " + firstname 
      line2.textContent = "your salary as " + YourJob + " is " + taxes

      outputDiv.innerHTML = ""
      outputDiv.appendChild(line1);
      outputDiv.appendChild(line2);


}



    //document.getElementById("result").innerHTML = taxes
