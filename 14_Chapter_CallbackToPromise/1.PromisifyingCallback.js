// callback-based
db.notification.email.find({ subject: "abc" }, (er, result) => {
  if (er) console.log(er);
});

let email = bluebird.promisifyAll(db.notification.email);
email
  .findAsync({ subject: "promisify callback" })
  .then((result) => {
    // normal code here
  })
  .catch(console.error);

let find = bluebird.promisify(db.notification.email.find);
find({ locationId: 168 })
  .then((result) => {
    // normal code here
  })
  .catch(console.error);
