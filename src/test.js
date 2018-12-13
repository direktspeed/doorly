import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'doorly/models/test';

F.attach(QUnit);

QUnit.module('doorly functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('doorly main page shows up', function() {
  F('title').text('doorly', 'Title is set');
});
