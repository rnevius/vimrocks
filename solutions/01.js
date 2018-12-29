// let @s = "4jd2j2kOsetup: function() {},Pf 2jcthis."
//
// 1. Cut the contents of the test
// 2. Create a setup function and paste from the default register
// 3. Visually select `var ` and `c`hange to `this.`

(function(namespace) {
  buster.testCase("test", {

    setup: function() {
      this.controller = {};
      this.panel = panel.create();
      this.listener = this.spy();
    },

    "test should do stuff": function() {
      // ...
    },

  });
}());

