/* =============================
 * Trait Vectors
 * Each trait is represented by a 5D vector:
 * [Social Energy, Reliability, Humor, Emotional Intelligence, Activity Level]
 * These vectors are used to build a user’s overall personality profile.
 */
const traitVectors = {
  "Chronically Online": [0.7, 0.2, 0.9, 0.1, 0.1],
  Loyal: [0.4, 1.0, 0.1, 0.6, 0.2],
  Outgoing: [1.0, 0.3, 0.5, 0.4, 0.5],
  Punctual: [0.2, 0.9, 0.1, 0.3, 0.2],
  Adventurous: [0.8, 0.3, 0.4, 0.5, 1.0],
  Listener: [0.3, 0.6, 0.2, 1.0, 0.2],
  Easygoing: [0.5, 0.5, 0.6, 0.7, 0.4],
  "Memecentral": [0.6, 0.2, 1.0, 0.3, 0.3],
  Honest: [0.3, 0.9, 0.3, 0.8, 0.3],
  Foodie: [0.5, 0.4, 0.6, 0.4, 0.4],
  "Prefers Voice Notes": [0.7, 0.3, 0.3, 0.6, 0.2],
  Empathetic: [0.3, 0.7, 0.2, 1.0, 0.2],
  Optimistic: [0.6, 0.5, 0.6, 0.7, 0.5],
  "Easily Peer-Pressured": [0.8, 0.2, 0.5, 0.3, 0.6],
  Sporty: [0.7, 0.3, 0.3, 0.2, 1.0],
};

const usersList = JSON.parse(localStorage.getItem("usersList"));
const currentUsername = localStorage.getItem("currentUser");
const currentUser = usersList[currentUsername];
const checkbox = currentUser.checkbox;

/* =============================
 * Compute the user's full personality vector
 * based on the traits they selected.
 *s
 * Input: selectedTraits - array of trait names (e.g., ["Sporty", "Empathetic"])
 * Output: summed 5D vector representing the user
 */
function getUserVector(selectedTraits) {
  const vector = new Array(5).fill(0); // Initialize zero vector

  selectedTraits.forEach((trait) => {
    const traitVec = traitVectors[trait];
    if (traitVec) {
      traitVec.forEach((val, i) => {
        vector[i] += val;
      });
    }
  });

  return vector;
}

/* =============================
 * Retrieves the main user's vector (user1) from localStorage,
 * computes their vector, removes user1 from the list,
 * and returns both the vector and the rest of the users.
 *
 * Output:
 * {
 *   vector: [calculated 5D vector],
 *   usersList: { user2: {...}, user3: {...}, ... }
 * }
 */
function computeUserVectorFromStorage() {
  if (!currentUser.checkbox) {
    console.warn(`First user (${currentUsername}) has no checkbox data.`);
    return null;
  }

  // Compute their vector
  const vector = getUserVector(currentUser.checkbox);
  return { vector, usersList };
}

/* =============================
 * Iterates over the remaining users and computes
 * a vector for each one based on their checkbox data.
 *
 * Input: usersList - object with usernames as keys
 * Output: array of objects like: [{ username: "user2", vector: [...] }, ...]
 */
function calculateOtherUserVectors(usersList) {
  const otherUserVectors = [];

  for (const username in usersList) {
    if (username === currentUsername) continue; // Skip the current user

    const userData = usersList[username];

    if (userData?.checkbox) {
      otherUserVectors.push({
        username,
        vector: getUserVector(userData.checkbox),
      });
    }
  }

  return otherUserVectors;
}

/* =============================
 * Computes the Euclidean distance between two vectors.
 *
 * Input: v1, v2 - arrays of equal length
 * Output: numeric distance (lower = more similar)
 */
function euclideanDistance(v1, v2) {
  const distance = Math.sqrt(
    /* reduce() takes the paramaters (accumulator, currentValue, currentIndex)
     * and returns the result of some function using the accumulator starting
     * at the value 0 */
    v1.reduce((sum, val, i) => sum + (val - v2[i]) ** 2, 0),
  );
  return distance;
}

/* =============================
 * Inserts a new user into a sorted array of users based on distance,
 * using binary search for efficiency.
 *
 * Input: arr - sorted array of { username, vector, distance }
 *        newItem - a user object with a distance to insert
 */
function binaryInsert(arr, newItem) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid].distance < newItem.distance) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  arr.splice(left, 0, newItem); // insert at correct index
}

/* =============================
 * The main matching function:
 * - Retrieves user1 from localStorage
 * - Computes vectors and distances to all other users
 * - Sorts other users by similarity
 *
 * Output: sorted array of matches with distances
 */
function computeSortedMatches() {
  const result = computeUserVectorFromStorage();

  // If there is no user then return an empty array
  if (!result) return [];

  const { vector: mainVector, usersList } = result; // Defining it like this so that I can access each part more easily. Learned this from PPL while using OCaml :)
  const otherUsers = calculateOtherUserVectors(usersList);

  const sortedMatches = [];

  for (const other of otherUsers) {
    const distance = euclideanDistance(mainVector, other.vector);
    
    // Checking output for debugging
    console.log(distance);

    binaryInsert(sortedMatches, {
      username: other.username,
      distance: distance,
    });

    // Checking output for debugging
    console.log(sortedMatches);
  }

  return sortedMatches;
}

/* =============================
 * Normalizes the distances of the top matches to a 0–1 scale.
 *
 * This function retrieves the top sorted matches using `computeSortedMatches`,
 * calculates the minimum and maximum distances, and scales each match's distance
 * such that:
 *   - 0 represents a perfect match (exact same vector as the current user)
 *   - 1 represents the furthest match in the top list
 *   - All other distances are scaled proportionally between 0 and 1
 *
 * If all distances are equal but non-zero, normalization defaults all distances to 1
 * to ensure no false 0 values are introduced.
 *
 * Returns: {Array<Object>} An array of objects, each containing:
 *   - `username` {string}: The username of the match
 *   - `distance` {number}: The normalized distance (0–1, where 0 = perfect match)
 */
function normalizeTopMatches() {
  const matches = computeSortedMatches();

  // If there are no matches return an empty array
  if (!matches || matches.length === 0) return [];

  const distances = matches.map((match) => match.distance);
  const min = Math.min(...distances);
  const max = Math.max(...distances);

  // Handle the edge case where all distances are the same and non-zero
  const range = max - min;

  return matches.map((match) => {
    const originalDistance = match.distance;

    // If this is a perfect match, keep it as 0
    if (originalDistance === 0) {
      return {
        username: match.username,
        distance: 0,
      };
    }

    // If all distances were the same but non-zero, treat them as distance 1
    if (range === 0) {
      return {
        username: match.username,
        distance: 1,
      };
    }

    // Otherwise, normalize as usual
    return {
      username: match.username,
      distance: (originalDistance - min) / range,
    };
  });
}

/* =============================
 * Returns a dictionary of the 10 closest users to the main user.
 * Each entry includes the distance and a matchBool flag.
 *
 * Output:
 * {
 *    user2: { distance: 1.12, matchBool: false},
 *    user5: { distance: 1.26, matchBool: false},
 *    ...
 * }
 */
function getTopMatchesDict() {
  const sortedMatches = normalizeTopMatches();
  const topTenMatches = sortedMatches.slice(0, 10);

  //Checking outputs for debugging
  console.log(sortedMatches);
  console.log(topTenMatches);

  const userData = {};

  topTenMatches.forEach((match) => {
    userData[match.username] = {
      distance: match.distance,
      matchBool: false,
    };
  });

  return userData;
}

/* =============================
 * Converts the top matches object into a nested array format.
 *
 * This function takes an object where each key is a username
 * and each value is an object containing at least a `distance` field.
 * It returns an array of [username, distance] pairs, suitable for
 * simplified display or plotting.
 *
 * Example input:
 * {
 *   user1: { distance: 0.23, matchBool: false },
 *   user2: { distance: 0.44, matchBool: false },
 * }
 *
 * Output:
 * [
 *   ["user1", 0.23],
 *   ["user2", 0.44]
 * ]
 *
 * Returns: {Array<Array>} A nested array where each subarray contains:
 *   - `username` {string}: The user's ID
 *   - `distance` {number}: The normalized distance to the current user
 */
function getNestedArray(userData) {
  const distancesArray = [];

  // Loop through each entry in the userData object
  // Object.entries() gives us both the username and their associated data
  for (const [username, data] of Object.entries(userData)) {
    // Push a [username, distance] pair to the result array
    distancesArray.push([username, data.distance]);

    // Checking output for debugging
    console.log([username, data.distance]);
  }
  return distancesArray;
}

// The intended execution for the file. This gets accessed when debugging is off
const userMatches = getTopMatchesDict();
const userDistances = getNestedArray(userMatches);

//Checking outputs of the algorithm for debugging
console.log(userMatches);
console.log(userDistances);

// Adding the userMathes and userDistances to the local storage
localStorage.setItem("userData", JSON.stringify(userMatches));
localStorage.setItem("userDistances", JSON.stringify(userDistances));