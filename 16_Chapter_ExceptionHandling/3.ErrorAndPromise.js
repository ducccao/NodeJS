const p = new Promise((reso, reje) => {
  reje(new Error("Oops"));
});

p.then().catch((e) => {
  console.log(e);
});
