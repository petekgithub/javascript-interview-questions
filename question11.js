/**
 * No Pairs Allowed
 *
 * For each word in a list of words, if any two adjacewnt characters are equal, change one of them. Determine the minimum number of
 * substitutions so the final string contains no adjacent equal characters.
 *
 *  Ex:
 * words=["add","boook","break"]
 * add: change one d
 * boook: change the middle o
 * break: no changes
 *
 * result: [1,1,0]
 */

// I need to iterate through each word in the list and check
function minimalOperations(words) {
  return words.map((word) => {
    let final = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === word[i - 1]) {
        final++;
        i++;
      }
    }
    return final;
  });
}

console.log("result: " + minimalOperations(["add", "boook", "break"]));
