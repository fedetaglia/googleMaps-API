App.SeatItemView = Backbone.View.extend({

  template: _.template("<div id='<%= id %>' class='seat glyphicon glyphicon-plane <%= reseverd %>'></div>"),
  resevation: _.template("<div id='res-<%= id %>'><h5>Seat</h5><p>row: <%= row %> <%= column%></p></div>"),
  events: {
    'click .free' : 'pend',
    'click .pend' : 'free'
  },

  render: function(){
    var html = this.template(this.model.toJSON());
    this.$el.html(html);
    return this;
  },

  pend: function(e){
    this.$el.children().first().toggleClass('free')
    this.$el.children().first().toggleClass('pend') 
    App.seatsArray.push(this.model)
    App.toggleSelection();
  },

  free: function(){
    this.$el.children().first().toggleClass('free')
    this.$el.children().first().toggleClass('pend') 
    var i = App.seatsArray.indexOf(this.model)
    if(i != -1) {
      App.seatsArray.splice(i, 1);
    }
    App.toggleSelection();
  }

})