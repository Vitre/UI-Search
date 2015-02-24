
Package.describe({
  name    : 'semantic:ui-search',
  summary : 'Semantic UI - Search: Single component release',
  version : '1.10.1',
  git     : 'git://github.com/Semantic-Org/UI-Search.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'search.css',
    'search.js'
  ], 'client');
});
