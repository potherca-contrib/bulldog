(function($) {
  window.bulldog = {};
  bulldog.version = "0.2.0";
  $(document).ready(startApp);

  function startApp() {
    localStorage.clear();

    todoTxt.build(function(tasks) {
      window.app = new bulldog.Router(tasks);
      Backbone.history.start();
      app.navigate('/');
    });

    $('.modal-footer .version').text('v' + bulldog.version);
    $('.modal a').attr('target','_blank');
  }
}(jQuery));