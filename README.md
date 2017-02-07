# Helper-bug-repro

This is a working minimal reproduction of a bug in the Meteor Atmosphere package [`dburles:collection-helpers`](https://github.com/dburles/meteor-collection-helpers) described/reported on these issues:

https://github.com/dburles/meteor-collection-helpers/issues/73

https://github.com/vsivsi/meteor-file-collection/issues/152

To run, clone this repo, go to its root directory and run `meteor`.

It will throw an error in the console when the bug is encountered: 

```
Error: Post-helper find with document selector is wrong
  at server/main.js:79:13
  at Function.time (/Users/vsi/helper-bug/.meteor/local/build/programs/server/profile.js:301:28)
  at /Users/vsi/helper-bug/.meteor/local/build/programs/server/boot.js:304:13
  at /Users/vsi/helper-bug/.meteor/local/build/programs/server/boot.js:345:5
  at Function.run (/Users/vsi/helper-bug/.meteor/local/build/programs/server/profile.js:480:12)
  at /Users/vsi/helper-bug/.meteor/local/build/programs/server/boot.js:343:11
```
