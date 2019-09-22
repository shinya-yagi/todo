//ユーザー登録
$('#regist').on('click', function() {
    $.ajax({
      url: 'https://samurai-yagi-todoapi.herokuapp.com/users',
      method: 'POST',
        data: {
        "username": $('#registUsername').val(),
        "password": $('#registPassword').val(),
        }
    });
    window.location.href = 'login.html';
  });

//ログイン
$('#login').on('click', function() {
    $.ajax({
      url: 'https://samurai-yagi-todoapi.herokuapp.com/sessions',
      method: 'POST',
        data: {
        "username": $('#loginUsername').val(),
        "password": $('#loginPassword').val(),
        }
        }).done(function(Headers){
        setobj(Headers); 
        window.location.href = 'index.html';
      }).fail(function(Headers) {
      alert('通信に失敗しました');
    });

  // トークン取得が成功したときの処理（ローカルストレージへの保存）
  function setobj(Headers) {
  let array = [];
  let obj = {
  'token': Headers.token,
  'username': Headers.username,
  };
  array.push(obj);

  let setjson = JSON.stringify(obj);
  window.localStorage.setItem('token', setjson);    
  }
    
});  


        
        
    
