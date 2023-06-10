const nums = process.argv;

for (let i = 2; i < nums.length; i++) {
  if (nums[i] >= 0 && (typeof Number(nums[i]) === "number")) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, nums[i] * 1000);
  }
}