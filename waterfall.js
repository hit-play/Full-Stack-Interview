/***
 * Complete code to run array of tasks in series
 * Example:
 * const steps = [
 *                   () => console.log("start"),
 *                   () => sleep(1000),
 *                   () => console.log("step 1"),
 *                   () => sleep(2000),
 *                   () => console.log("step 2"),
 *                   () => sleep(3000),
 *                   () => console.log("end")
 *               ];
 * output:
 * start
 * step 1
 * step 2
 * end
 */

const steps = [
  () => console.log("start"),
  () => sleep(1000),
  () => console.log("step 1"),
  () => sleep(2000),
  () => console.log("step 2"),
  () => sleep(3000),
  () => console.log("end")
];

const waterfall = (tasks) => {
  tasks.myForeach(async (fn) => {
    await fn();
  });
};

waterfall(steps);
