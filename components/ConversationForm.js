export default function ConversationForm (){
    return (
     
     
      <div className="jeffery" >
        <div id="display" className="section-p1">
      <img src="/static/jeffery.svg" alt=""   width={250} height={300}  />

      <p> Want to discuss a startup collaboration? I'm most definitely game.</p>
       
     <div className="form-wrapper">
                <form  action="https://formspree.io/f/mwkjpala" method="post">
                   
              <div className="inline">
                
                        <input className="input-field " type="text" placeholder="Name" id="name" />

               
               
                  
                        <input className="input-field " type="text" placeholder="Email" id="email" />
                    
                  </div>
             
     
         
              <div className="inline">
                
<select aria-placeholder="Proect Type" className="input-field">
                <option value="-1">select Project Type</option>

                <option value="">Investor</option>
                <option value="collaboration">Collaboration</option>
              </select>

              <select aria-placeholder="Country" className="input-field">
                <option value="-1">Select your country</option>
                <option value="1">USA</option>
                <option value="2">Canada</option>
                <option value="3">UK</option>
                <option value="4">Egypt</option>
                <option value="5">Germany</option>
                <option value="6">Ghana</option>
                <option value="7">Nigeria</option>
              </select>
                
              </div>
            

                  




                
                <textarea
                    cols="55"
                    rows="10"
                    name="Comment"
              placeholder="Additional details..."
              
                  ></textarea>

                  

                             <input type="submit" name="submit" value="send"className="submit" />
                   
                </form>
            </div>
        </div>
          </div>






   
           
             
   

  );
}
