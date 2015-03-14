var data = [
  {id:'1', name:'Big Bird', type:'bird'},
  {id:'2', name:'Snuffleupagus', type: 'elephant'}
];

module.exports = {
  name:'sesame-street',
  retriever: function(next) {
    next(null, data);
  },
  trigger: function(next) {
    next();
  },
  fn: {
    first: function() {
      var self = this;
      return self[0];
    }
  }
};