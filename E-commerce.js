
//   login area
document.getElementById('login-button').addEventListener('click',()=>{
    let loginEmail=document.getElementById('login-email').value;
    let loginPwd=document.getElementById('login-pwd').value;
    if(loginEmail==""){
        document.getElementById('login-eerr').style.display='block'
        document.getElementById('login-email').style.border='2px solid red'
    }
    else{
        document.getElementById('login-eerr').style.display='none'
          document.getElementById('login-email').style.border='2px solid gray'
    }
    if(loginPwd==""){
        document.getElementById('login-perr').style.display='block'
        document.getElementById('login-pwd').style.border='2px solid red'
    }
    else{
        document.getElementById('login-perr').style.display='none'
          document.getElementById('login-pwd').style.border='2px solid gray'
    }
    if(login-email!="" && login-pwd!="" ){
        alert('s')
    }
})
// account area
 document.getElementById('account-button').addEventListener('click',()=>{
    let accountName=document.getElementById('user-name').value;
    let accountEmail=document.getElementById('account-email').value;
    let accountPwd=document.getElementById('account-pwd').value;
    let accountConfirmPwd=document.getElementById('account-confirm-pwd').value;
    if(accountName==""){
        document.getElementById('username-error').style.display='block';
        document.getElementById('user-name').style.border='2px solid red';
    }
    else{
        document.getElementById('username-error').style.display='none';
        document.getElementById('user-name').style.border='2px solid gray';
    }
    if(accountEmail==""){
        document.getElementById('account-eerr').style.display='block';
        document.getElementById('account-email').style.border='2px solid red';
    }
    else{
        document.getElementById('account-eerr').style.display='none';
        document.getElementById('account-email').style.border='2px solid gray';
    }
    if(accountPwd==""){
        document.getElementById('account-perr').style.display='block';
        document.getElementById('account-pwd').style.border='2px solid red';
    }
    else{
        document.getElementById('account-perr').style.display='none';
        document.getElementById('account-pwd').style.border='2px solid gray';
    }
    if(accountConfirmPwd==""){
        document.getElementById('account-cerr').style.display='block';
        document.getElementById('account-confirm-pwd').style.border='2px solid red';
    }
    else{
        document.getElementById('account-cerr').style.display='none';
        document.getElementById('account-confirm-pwd').style.border='2px solid gray';
    }
    if(user-name!="" && account-email!="" && account-pwd!="" && account-button!=""){
        alert('sucessful')
    }
 })