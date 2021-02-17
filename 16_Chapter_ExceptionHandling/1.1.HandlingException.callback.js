// sync

function doSomeSynchronousOperation(req, res) {
  if (req.body.username === "") {
    throw new Error("User Name cannot be empty");
  }
  return true;
}

try {
  // synchronous code
  doSomeSynchronousOperation(req, res);
} catch (e) {
  //exception handled here
  console.log(e.message);
}

// async
function asyncFunc(req, res, cb) {
  setTimeout(function () {
    return cb(null, []);
  }, 100);
}

try {
  asyncFunc(req, res, function (er, res) {
    throw new Error(er);
  });
} catch (er) {
  console.log(er);
}
