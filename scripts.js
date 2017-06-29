function usecallback(callback) {
  callback();
}

function c() {
  console.log("hi");
}

usecallback(c);