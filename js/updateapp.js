let getjson = window.localStorage.getItem('token');
let obj = JSON.parse(getjson);
// obj['キー1']などで取り出し可能に

$(function(){
  $.ajax({
      url : 'https://samurai-yagi-todoapi.herokuapp.com/tasks/'+ window.location.search.substring(4),
      method : 'GET',
      "headers": {
      "Authorization": obj['token'],
    }, 
  }).done(function(data){
        setDescription(data); 
      }).fail(function(data) {
      alert('通信に失敗しました');
    });

  // データ取得が成功したときの処理（タスク一覧の取得）
  function setDescription(data) {
    $('#title').val(data.title);
    $('#description').val(data.description);
    $('#priority').val(data.priority);
  }
});  

//タスク削除
$('#delete').on('click', function() {
    $.ajax({
      url: 'https://samurai-yagi-todoapi.herokuapp.com/tasks/' + window.location.search.substring(4),
      method: 'DELETE',
      "headers": {
      "Authorization": obj['token'],
    }, 
    });
    window.location.href = 'index.html';
    });

//タスク更新
$('#update').on('click', function() {
    $.ajax({
      url: 'https://samurai-yagi-todoapi.herokuapp.com/tasks/' + window.location.search.substring(4),
      method: 'PUT',
      "headers": {
      "Authorization": obj['token'],
    }, 
        data: {
        "title": $('#title').val(),
        "description": $('#description').val(),
        "priority": $('select').val(),
        }
      });
    window.location.href = 'index.html';
    });
    
