
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); 
   
    const name = document.getElementById('name').value.trim();
    const aadhaar = document.getElementById('aadhaar').value.trim();
    const pan = document.getElementById('pan').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const dob = document.getElementById('DOB').value.trim();
    const marks = [
        document.getElementById('sub1').value.trim(),
        document.getElementById('sub2').value.trim(),
        document.getElementById('sub3').value.trim(),
        document.getElementById('sub4').value.trim(),
        document.getElementById('sub5').value.trim(),
        document.getElementById('sub6').value.trim()
    ];

    
    if (!name || !aadhaar || !pan || !mobile || !dob || marks.includes("")) {
        alert("Please fill all the fields");
        return;
    }

   
    const nameParts = name.split(" ");
    const firstName = nameParts[0];
    const middleName = nameParts[1];
    const lastName = nameParts[2];

  
   
    marks.sort((a, b) => Number(b) - Number(a)); 
    const bestMarks = marks.slice(0, 5).map(Number); 
    let totalMarks = 0;
    for (let i = 0; i < bestMarks.length; i++)
    {
        totalMarks += bestMarks[i]; 
    }
    const percentage = (totalMarks / 500) * 100;
 


  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Registration Details</h3><br><br>
        <p><strong>First Name:</strong> ${firstName}</p><br>
        <p><strong>Middle Name:</strong> ${middleName}</p><br>
        <p><strong>Last Name:</strong> ${lastName}</p><br>
        <p><strong>Aadhar Number:</strong> ${aadhaar}</p><br>
        <p><strong>PAN Card:</strong> ${pan}</p><br>
        <p><strong>Mobile Number:</strong> ${mobile}</p><br>
        <p><strong>Date of Birth:</strong> ${dob}</p><br>
        <p><strong>Marks (Best of 5):</strong</p><br>
        <p><strong>Total Marks:</strong> ${totalMarks}</p><br>
        <p><strong>Percentage:</strong> ${percentage}%</p><br>
    `;
});
