define('npm/@ali/pi-weex/index', function(require, exports, module) {
  module.exports = {
    data: function() {
      return {
        modsdata: [],
        pageData: {}
      };
    },
    init: function() {
      console.log('init');
    },
    created: function() {
      console.log('created');
    },
    ready: function() {
      console.log('ready');
    },
    methods: {
      
    }
  };
  module.exports.style = {};
  module.exports.template = {
    'type': 'div',
    'style': {
    },
    'events': {
    },
    children: [{
      'type': 'list',
      'children': [
        {
          'type': (function() {
            return 'cell';
          }),
          'repeat': function() {
            return this.modsdata;
          },
          'append': 'tree',
          'children': [
            {
              'id': (function() {
                return this.moduleId || '';
              }),
              'type': (function() {
                return this.name; 
              }),
              'attr': {
                'id': function() {
                  return this.moduleId || ''; 
                },
                'index': function() { 
                  return this.index || 0; 
                },
                'name': function() { 
                  return this.name || ''; 
                },
                'data': function() {
                  return this.data || {}; 
                },
                'attrs': function() {
                  return this.attrs || {};
                },
                'pageData': function() {
                  return this.pageData || {};
                }
              }
            }
          ]
        }
      ]
    }]
  };
});