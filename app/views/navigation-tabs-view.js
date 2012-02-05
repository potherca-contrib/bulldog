(function($, namespace) {
  namespace.NavigationTabsView = function() {
    var baseOptions = {
      tagName: 'ul',
      className: 'nav nav-tabs tabs'
    };
    var self = new (Backbone.View.extend(baseOptions))();
    var agent = new bulldog.NavigationTabsAgent(self);

    var $el;

    self.render = function() {
      $el = $(self.el);

      $el.unbind('click', self.selectTab);
      $el.empty();

      var locals = agent.getLocals();
      $el.append(JST["tabs"](locals));

      $el.bind('click', self.selectTab);

      return self;
    };

    self.selectTab = function(newTab) {
      agent.selectTab(newTab);
      self.trigger('tabsUpdated');
    };

    return self;
  }
}(jQuery, bulldog));