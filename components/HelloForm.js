export default function HelloForm (){
    return (
     
  <div className="jeffery">
      <div id="display" className="section-p1">
        <img src="/static/jeffery.svg" alt="" width={250} height={300}  />

        <p> Thanks for taking the time to reach out. How can I help you today?</p>
         
      
            <div className="form-wrapper">
                <form  action="https://formspree.io/f/mwkjpala" method="post">
                   
                  
                  
             
                        <input className="input-field" type="text" placeholder="Name" id="name" />
                      
                
                 
                        <input className="input-field" type="text" placeholder="Phone" id="phone"   />
       
               

                  
                        <input className="input-field" type="text" placeholder="Email" id="mail" />
                  

            
               
                   
                <textarea
                    cols="70"
                    rows="15"
                  
                placeholder="Type your message..."
              
                  ></textarea>

               

                             <input type="submit" name="submit" value="Submit" className="submit" />
               
                </form>
                  
            </div>
            </div>
      </div>

 
   
           
   

  );
}
