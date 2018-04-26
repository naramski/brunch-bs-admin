
exports.npm = {
  globals: {
    $ : 'jquery',
    jQuery : 'jquery',
    dt : 'datatables.net-bs4'
  }
};

exports.files = {
  javascripts: {
    joinTo: {
      'js/vendor.js': /^(?!app)/,
      'js/app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'css/app.css'}
};

/*
exports.paths = {
  public: 'src/main/resources/static'
};*/

exports.plugins = {
  babel: {presets: ['latest']},
  sass: {
    options: {
      includePaths: ['node_modules/bootstrap/scss', 'node_modules/font-awesome/scss' ],
      precision: 8
    }
  },
  copycat: {
	"fonts": [
      "node_modules/font-awesome/fonts"
    ]
  },
  pug: { 
  }
};

exports.modules = {
  autoRequire: {
    'js/app.js': ['initialize' ]
  }
};
