          $(()=>{

        $('#form_remember_btn').prop('checked', false);
 
                if ( localStorage.chkbx && localStorage.chkbx !="") {
                    $('#form_remember_btn').attr('checked','checked');
                    $('#form_name').val(localStorage.firstname);
                    $('#form_lastname').val(localStorage.lastname);
                    $('#form_tlf').val(localStorage.number);
                    $('#form_message').val(localStorage.message);
                    
                } else {
                    $('#form_remember_btn').prop('checked', false);
                    $('#form_name').val('');
                    $('#form_lastname').val('');
                    $('#form_tlf').val('');
                    $('#form_message').val('');
                }
        
           // arbejd videre her
         $(".form_val").on("input", function(){

                  $('#form_remember_btn').prop('checked', false);   // removeAttr('checked')
                   console.log("are we here --- indeed we are");
            });  
  
      $('#form_remember_btn').on("click",function() {
                
      
             $('#form_remember_btn').prop('checked', true);
          
            if($(this).prop("checked") == true){
               // save username and password
                console.log("are we here ");
                        
                        localStorage.setItem("firstname",$('#form_name').val());   // just to show that more than one way to set localeStorage.
                        localStorage.lastname = $('#form_lastname').val();
                        localStorage.email = $('#form_email').val();
                        localStorage.number = $('#form_tlf').val();
                        localStorage.message = $('#form_message').val();
                        localStorage.chkbx = $('#form_rember_btn').val();
                    } else {
                        localStorage.firstname = '';
                        localStorage.lastname = '';
                        localStorage.email = '';
                        localStorage.number = '';
                        localStorage.message = '';
                        localStorage.chkbx = '';
                    }
              });
        
      
        
            
        var DataToLocalStorageFromEachLoop = [];
        var DataToLocalStorage = {};
        var DataFromLocalSorage ={};
        
          
          
        var data = $(".form_contactInfoClass").serializeArray();
               $("#snackbar").hide();
       
     
        $("#form_submit_btn").click(function(e){
          e.preventDefault();
               
           DataFromLocalStorage = JSON.stringify(data);
           localStorage.setItem("Data_Form",DataFromLocalStorage);
              
            console.log(data);                         // Printing Original Object
            console.log(DataFromLocalStorage);         // Printing the Object - Stringfied by Json
            console.log(localStorage.getItem("Data_Form")); // Printing The Object - Stringfied by Json - from Local Storage
            
           console.log("------------------------------------");
            

$( "#snackbar" ).animate({
  opacity: "show"
}, {
  duration: "slow",
});
        
            $( "#snackbar" ).delay(2000).animate({
  opacity: "hide"
}, {
  duration: "slow",
});
            
        
       });
    });  
             
        