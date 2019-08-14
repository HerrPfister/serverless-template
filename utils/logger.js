const logSuccess = (resource, event, data) => {
  console.group();
  console.log(`Success: ${resource.toUpperCase()} ${event}`);
  console.log(`\t> ${data ? JSON.stringify(data) : "Passed"}`);
  console.groupEnd();
};

const logFailure = (resource, event, reason) => {
  console.group();
  console.log(`Failure: ${resource.toUpperCase()} ${event}`);
  console.log(`\t> ${reason ? JSON.stringify(reason) : "Failed"}`);
  console.groupEnd();
};

module.exports = { logSuccess, logFailure };
