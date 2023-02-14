// async code - because it does not finish immediately
const fetchData = (callback) => {
  setTimeout(() => {
    callback("done");
  }, 1000);
};

setTimeout(() => {
  console.log("timer is done");
  fetchData((text) => {
    console.log(text);
  });
}, 2000);

// synchronious - because it happens one after the other immediately
console.log("hello");
console.log("hi");

// Javascript will run synchronious first then run async
