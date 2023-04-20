$('input').keyup(()=>
{
const firstname =$('#fname').val()
const emailname =$('#email').val()
const contactno =$('#cno').val()
const instname =$('#InstName').val()
const coursename =$('#CourseName').val()

if (!firstname||!emailname||!contactno||!instname||!coursename){
  $("#modify-cols-btn").attr("disabled",true);
  $('#modify-cols-btn').css("cursor", "not-allowed")
  // console.log("disabled");
}
 else
 {
  $("#modify-cols-btn").attr("disabled",false);
  $('#modify-cols-btn').css("cursor", "pointer")
 } 
})

// $('#modify-cols-btn').click(()=>{ 
  // alert("form submited")
//   const firstname =$('#fname').val()
//   console.log(firstname);
  // alert("form submited 2")
//   const emailname =$('#email').val()
//   const contactno =$('#cno').val()
//   const instname =$('#InstName').val()
//   const coursename =$('#CourseName').val()

//   console.log(emailname);
//   console.log(contactno);
//   console.log(instname);
//   console.log(coursename);

//   var formdata={
//     fname:firstname,
//     email:emailname,
//     cno:contactno,
//     InstName:instname,
//     CourseName:coursename
//   }
//   console.log(formdata);
//   $.ajax({
//     headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     type: "post",
//     url: 'https://script.google.com/macros/s/AKfycbzn6mDP9mFj-_e6d5OQz7wKm47GK48wjTgJUm89HH_QbRKsCEEyVPWSp2SJTqcE3Eubew/exec',
//     data: formdata,
//     // dataType: "dataType",
//     dataType: "json",
//     success: function (response) {
//       console.log("success");
//       console.log(response);
//     },
//     error: function (error) {
//       console.log("error");
//       console.log(error);
//   }
//   })
// });


