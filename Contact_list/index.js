const express = require('express'); 
const path = require('path');
const port =8000;


const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views')); 
app.use(express.urlencoded()); 
app.use(express.static('assets'));
// app.use(function(req,res,next){
//   req.my="nitin";
//    next();

// });
//    app.use(function(req,res,next){
//    console.log('middle ware 2 called',req.my);
//    next();

// });
  var ContactList= [
    {
      name:'nitin',
      phone:'765859385795'

    },
    {
      name : 'leetcode',
      phone: '657687456485'
    },
    {
      name : 'gfg',
      phone: '64867873487'
    }
  ]

app.get('/',function(req,res){
  console.log('getttt',req.my)
  return res.render('home',{ 
      title:'contact list',
      Contact_list: ContactList
      
      }); 

}); 

app.get('/practise',function(req,res){
     return res.render('practise',{
   title:'playing with ejs' 


     });
});

  app.post('/create-contact',function(req,res){

    ContactList.push(req.body) ;

    return res.redirect('back');
     

}); 
app.get('/delete-contact/',function(req,res){
  console.log(req.query);
  let phone =req.query.phone;
  let contactIndex = ContactList.findIndex(contact =>contact.phone==phone);
  if(contactIndex!=-1)  {
   ContactList.splice(contactIndex,1);
  }
  return res.redirect('back');

});





app.listen(port,function(err){

    if(err) {
        console.log('Error',err);
    } 
    console.log('yup  ! my express server is running on port',port);

});