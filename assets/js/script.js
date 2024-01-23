document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Display the collected information in an alert
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  
    // You can add further actions here, like sending the data to a server using AJAX or fetching an API.
  });
  
  function sendMail(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    };
  
  const serviceID="service_wwipaoq";
  const templateID="template_jyddb4j";


   emailjs
   .send(serviceID,templateID,params)
   .then((res)=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        // alert("your message sent successfully");
    }
   )
   .catch((err)=> console.log(err));
}