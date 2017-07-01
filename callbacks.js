function usecallback(callback) {
  if (typeof(callback) === "function") {
    callback();
  }
}

function c() {
  console.log("hi");
  console.log("bye");
}

usecallback(c);
