export interface Problem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  link: string;
  videoLink?: string;
  articleLink?: string;
  pattern: string;
}

export const DSA_PATTERNS = [
  "Two Pointers",
  "Sliding Window",
  "Fast & Slow Pointers",
  "Merge Intervals",
  "Cyclic Sort",
  "In-place Reversal of a LinkedList",
  "Tree BFS",
  "Tree DFS",
  "Two Heaps",
  "Subsets",
  "Modified Binary Search",
  "Top K Elements",
  "K-way Merge",
  "0/1 Knapsack",
  "Topological Sort",
  "Backtracking",
  "Dynamic Programming",
  "Graphs",
  "Greedy",
  "Bit Manipulation",
  "Trie",
  "Stacks & Queues",
  "Heap",
  "Arrays & Hashing",
  "Math & Geometry",
  "Recursion"
];

export const PROBLEMS: Problem[] = [
  // Two Pointers
  {
    id: "tp-1",
    title: "Pair with Target Sum",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/two-sum/",
    pattern: "Two Pointers"
  },
  {
    id: "tp-2",
    title: "Remove Duplicates",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    pattern: "Two Pointers"
  },
  {
    id: "tp-3",
    title: "Squaring a Sorted Array",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/squares-of-a-sorted-array/",
    pattern: "Two Pointers"
  },
  // Sliding Window
  {
    id: "sw-1",
    title: "Maximum Sum Subarray of size K",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/maximum-subarray/",
    pattern: "Sliding Window"
  },
  {
    id: "sw-2",
    title: "Smallest Subarray with a given sum",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/minimum-size-subarray-sum/",
    pattern: "Sliding Window"
  },
  {
    id: "sw-3",
    title: "Longest Substring with K Distinct Characters",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
    pattern: "Sliding Window"
  },
  // Fast & Slow Pointers
  {
    id: "fs-1",
    title: "LinkedList Cycle",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/linked-list-cycle/",
    pattern: "Fast & Slow Pointers"
  },
  {
    id: "fs-2",
    title: "Start of LinkedList Cycle",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/linked-list-cycle-ii/",
    pattern: "Fast & Slow Pointers"
  },
  {
    id: "fs-3",
    title: "Happy Number",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/happy-number/",
    pattern: "Fast & Slow Pointers"
  },
  {
    id: "fs-4",
    title: "Middle of the LinkedList",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/middle-of-the-linked-list/",
    pattern: "Fast & Slow Pointers"
  },

  // Merge Intervals
  {
    id: "mi-1",
    title: "Merge Intervals",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/merge-intervals/",
    pattern: "Merge Intervals"
  },
  {
    id: "mi-2",
    title: "Insert Interval",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/insert-interval/",
    pattern: "Merge Intervals"
  },
  {
    id: "mi-3",
    title: "Intervals Intersection",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/interval-list-intersections/",
    pattern: "Merge Intervals"
  },

  // Cyclic Sort
  {
    id: "cs-1",
    title: "Cyclic Sort",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/missing-number/",
    pattern: "Cyclic Sort"
  },
  {
    id: "cs-2",
    title: "Find all Missing Numbers",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
    pattern: "Cyclic Sort"
  },
  {
    id: "cs-3",
    title: "Find the Duplicate Number",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/find-the-duplicate-number/",
    pattern: "Cyclic Sort"
  },

  // Tree BFS
  {
    id: "bfs-1",
    title: "Binary Tree Level Order Traversal",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    pattern: "Tree BFS"
  },
  {
    id: "bfs-2",
    title: "Reverse Level Order Traversal",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
    pattern: "Tree BFS"
  },
  {
    id: "bfs-3",
    title: "Zigzag Traversal",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
    pattern: "Tree BFS"
  },

  // Tree DFS
  {
    id: "dfs-1",
    title: "Path Sum",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/path-sum/",
    pattern: "Tree DFS"
  },
  {
    id: "dfs-2",
    title: "All Paths for a Sum",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/path-sum-ii/",
    pattern: "Tree DFS"
  },
  {
    id: "dfs-3",
    title: "Binary Tree Path Sum",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
    pattern: "Tree DFS"
  },

  // Subsets
  {
    id: "sub-1",
    title: "Subsets",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/subsets/",
    pattern: "Subsets"
  },
  {
    id: "sub-2",
    title: "Subsets With Duplicates",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/subsets-ii/",
    pattern: "Subsets"
  },
  {
    id: "sub-3",
    title: "Permutations",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/permutations/",
    pattern: "Subsets"
  },

  // Modified Binary Search
  {
    id: "bs-1",
    title: "Order-agnostic Binary Search",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/binary-search/",
    pattern: "Modified Binary Search"
  },
  {
    id: "bs-2",
    title: "Ceiling of a Number",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/search-insert-position/",
    pattern: "Modified Binary Search"
  },
  {
    id: "bs-3",
    title: "Bitonic Array Maximum",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/peak-index-in-a-mountain-array/",
    pattern: "Modified Binary Search"
  },

  // Top K Elements
  {
    id: "k-1",
    title: "Top K Frequent Numbers",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/top-k-frequent-elements/",
    pattern: "Top K Elements"
  },
  {
    id: "k-2",
    title: "Kth Largest Element in a Stream",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
    pattern: "Top K Elements"
  },
  {
    id: "k-3",
    title: "Sum of Elements",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
    pattern: "Top K Elements"
  },

  // Topological Sort
  {
    id: "ts-1",
    title: "Topological Sort",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/course-schedule/",
    pattern: "Topological Sort"
  },
  {
    id: "ts-2",
    title: "Scheduling Tasks",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/course-schedule-ii/",
    pattern: "Topological Sort"
  },
  {
    id: "ts-3",
    title: "Alien Dictionary",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/alien-dictionary/",
    pattern: "Topological Sort"
  },

  // In-place Reversal of a LinkedList
  {
    id: "lr-1",
    title: "Reverse a LinkedList",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/reverse-linked-list/",
    pattern: "In-place Reversal of a LinkedList"
  },
  {
    id: "lr-2",
    title: "Reverse a Sub-list",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/reverse-linked-list-ii/",
    pattern: "In-place Reversal of a LinkedList"
  },
  {
    id: "lr-3",
    title: "Reverse every K-element Sub-list",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    pattern: "In-place Reversal of a LinkedList"
  },

  // Two Heaps
  {
    id: "th-1",
    title: "Find the Median of a Number Stream",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/find-median-from-data-stream/",
    pattern: "Two Heaps"
  },
  {
    id: "th-2",
    title: "Sliding Window Median",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/sliding-window-median/",
    pattern: "Two Heaps"
  },
  {
    id: "th-3",
    title: "Maximize Capital",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/ipo/",
    pattern: "Two Heaps"
  },

  // K-way Merge
  {
    id: "kw-1",
    title: "Merge K Sorted Lists",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/merge-k-sorted-lists/",
    pattern: "K-way Merge"
  },
  {
    id: "kw-2",
    title: "Kth Smallest Number in M Sorted Lists",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
    pattern: "K-way Merge"
  },
  {
    id: "kw-3",
    title: "Smallest Number Range",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/",
    pattern: "K-way Merge"
  },
  // Backtracking
  {
    id: "bt-1",
    title: "Word Search",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/word-search/",
    pattern: "Backtracking"
  },
  {
    id: "bt-2",
    title: "N-Queens",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/n-queens/",
    pattern: "Backtracking"
  },
  {
    id: "bt-3",
    title: "Sudoku Solver",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/sudoku-solver/",
    pattern: "Backtracking"
  },
  // Dynamic Programming
  {
    id: "dp-1",
    title: "Longest Common Subsequence",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/longest-common-subsequence/",
    pattern: "Dynamic Programming"
  },
  {
    id: "dp-2",
    title: "Edit Distance",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/edit-distance/",
    pattern: "Dynamic Programming"
  },
  {
    id: "dp-3",
    title: "Coin Change",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/coin-change/",
    pattern: "Dynamic Programming"
  },
  // Adding more problems to Sliding Window to show variety
  {
    id: "sw-4",
    title: "Longest Repeating Character Replacement",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
    pattern: "Sliding Window"
  },
  {
    id: "sw-5",
    title: "Max Consecutive Ones III",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/max-consecutive-ones-iii/",
    pattern: "Sliding Window"
  },
  // Graphs (Continued)
  {
    id: "gr-1",
    title: "Flood Fill",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/flood-fill/",
    pattern: "Graphs"
  },
  {
    id: "gr-2",
    title: "01 Matrix",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/01-matrix/",
    pattern: "Graphs"
  },
  {
    id: "gr-3",
    title: "Rotting Oranges",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/rotting-oranges/",
    pattern: "Graphs"
  },
  {
    id: "gr-4",
    title: "Course Schedule",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/course-schedule/",
    pattern: "Graphs"
  },
  // Greedy
  {
    id: "gd-1",
    title: "Jump Game",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/jump-game/",
    pattern: "Greedy"
  },
  {
    id: "gd-2",
    title: "Gas Station",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/gas-station/",
    pattern: "Greedy"
  },
  {
    id: "gd-3",
    title: "Task Scheduler",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/task-scheduler/",
    pattern: "Greedy"
  },
  // Bit Manipulation
  {
    id: "bm-1",
    title: "Single Number",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/single-number/",
    pattern: "Bit Manipulation"
  },
  {
    id: "bm-2",
    title: "Number of 1 Bits",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/number-of-1-bits/",
    pattern: "Bit Manipulation"
  },
  {
    id: "bm-3",
    title: "Reverse Bits",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/reverse-bits/",
    pattern: "Bit Manipulation"
  },
  // Trie
  {
    id: "tr-1",
    title: "Implement Trie (Prefix Tree)",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
    pattern: "Trie"
  },
  {
    id: "tr-2",
    title: "Word Search II",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/word-search-ii/",
    pattern: "Trie"
  },
  // Subsets
  {
    id: "sub-1",
    title: "Subsets",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/subsets/",
    pattern: "Subsets"
  },
  {
    id: "sub-2",
    title: "Permutations",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/permutations/",
    pattern: "Subsets"
  },
  {
    id: "sub-3",
    title: "Letter Combinations of a Phone Number",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
    pattern: "Subsets"
  },
  // Modified Binary Search
  {
    id: "bs-1",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    pattern: "Modified Binary Search"
  },
  {
    id: "bs-2",
    title: "Find First and Last Position of Element in Sorted Array",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
    pattern: "Modified Binary Search"
  },
  {
    id: "bs-3",
    title: "Search a 2D Matrix",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/search-a-2d-matrix/",
    pattern: "Modified Binary Search"
  },
  // Two Heaps
  {
    id: "th-1",
    title: "Find Median from Data Stream",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/find-median-from-data-stream/",
    pattern: "Two Heaps"
  },
  {
    id: "th-2",
    title: "IPO",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/ipo/",
    pattern: "Two Heaps"
  },
  // Two Pointers (Continued)
  {
    id: "tp-4",
    title: "Triplet Sum to Zero",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/3sum/",
    pattern: "Two Pointers"
  },
  {
    id: "tp-5",
    title: "Triplet Sum Close to Target",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/3sum-closest/",
    pattern: "Two Pointers"
  },
  {
    id: "tp-6",
    title: "Triplets with Smaller Sum",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/3sum-smaller/",
    pattern: "Two Pointers"
  },
  {
    id: "tp-7",
    title: "Subarrays with Product Less than a Target",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/subarray-product-less-than-k/",
    pattern: "Two Pointers"
  },
  {
    id: "tp-8",
    title: "Dutch National Flag Problem",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/sort-colors/",
    pattern: "Two Pointers"
  },
  {
    id: "tp-9",
    title: "Quadruple Sum to Target",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/4sum/",
    pattern: "Two Pointers"
  },
  {
    id: "tp-10",
    title: "Comparing Strings containing Backspaces",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/backspace-string-compare/",
    pattern: "Two Pointers"
  },
  {
    id: "tp-11",
    title: "Minimum Window Sort",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/shortest-unsorted-continuous-subarray/",
    pattern: "Two Pointers"
  },
  {
    id: "tp-12",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/trapping-rain-water/",
    pattern: "Two Pointers"
  },
  {
    id: "tp-13",
    title: "Container With Most Water",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/container-with-most-water/",
    pattern: "Two Pointers"
  },

  // Sliding Window (Continued)
  {
    id: "sw-6",
    title: "Longest Substring with Same Letters after Replacement",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
    pattern: "Sliding Window"
  },
  {
    id: "sw-7",
    title: "Longest Subarray with Ones after Replacement",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/max-consecutive-ones-iii/",
    pattern: "Sliding Window"
  },
  {
    id: "sw-8",
    title: "Permutation in a String",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/permutation-in-string/",
    pattern: "Sliding Window"
  },
  {
    id: "sw-9",
    title: "String Anagrams",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
    pattern: "Sliding Window"
  },
  {
    id: "sw-10",
    title: "Smallest Window containing Substring",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/minimum-window-substring/",
    pattern: "Sliding Window"
  },
  {
    id: "sw-11",
    title: "Words Concatenation",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
    pattern: "Sliding Window"
  },

  // Fast & Slow Pointers (Continued)
  {
    id: "fs-5",
    title: "Palindrome LinkedList",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/palindrome-linked-list/",
    pattern: "Fast & Slow Pointers"
  },
  {
    id: "fs-6",
    title: "Rearrange a LinkedList",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/reorder-list/",
    pattern: "Fast & Slow Pointers"
  },
  {
    id: "fs-7",
    title: "Cycle in a Circular Array",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/circular-array-loop/",
    pattern: "Fast & Slow Pointers"
  },

  // Merge Intervals (Continued)
  {
    id: "mi-4",
    title: "Conflicting Appointments",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/meeting-rooms/",
    pattern: "Merge Intervals"
  },
  {
    id: "mi-5",
    title: "Minimum Meeting Rooms",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/meeting-rooms-ii/",
    pattern: "Merge Intervals"
  },
  {
    id: "mi-6",
    title: "Maximum CPU Load",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/range-addition-ii/",
    pattern: "Merge Intervals"
  },
  {
    id: "mi-7",
    title: "Employee Free Time",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/employee-free-time/",
    pattern: "Merge Intervals"
  },

  // Cyclic Sort (Continued)
  {
    id: "cs-4",
    title: "Find all Duplicate Numbers",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
    pattern: "Cyclic Sort"
  },
  {
    id: "cs-5",
    title: "Find the Corrupt Pair",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/set-mismatch/",
    pattern: "Cyclic Sort"
  },
  {
    id: "cs-6",
    title: "Find the Smallest Missing Positive Number",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/first-missing-positive/",
    pattern: "Cyclic Sort"
  },
  {
    id: "cs-7",
    title: "Find the First K Missing Positive Numbers",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/kth-missing-positive-number/",
    pattern: "Cyclic Sort"
  },

  // Tree BFS (Continued)
  {
    id: "bfs-4",
    title: "Level Averages in a Binary Tree",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/average-of-levels-in-binary-tree/",
    pattern: "Tree BFS"
  },
  {
    id: "bfs-5",
    title: "Minimum Depth of a Binary Tree",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
    pattern: "Tree BFS"
  },
  {
    id: "bfs-6",
    title: "Level Order Successor",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/find-bottom-left-tree-value/",
    pattern: "Tree BFS"
  },
  {
    id: "bfs-7",
    title: "Connect Level Order Siblings",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
    pattern: "Tree BFS"
  },
  {
    id: "bfs-8",
    title: "Connect All Level Order Siblings",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/",
    pattern: "Tree BFS"
  },
  {
    id: "bfs-9",
    title: "Right View of a Binary Tree",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/binary-tree-right-side-view/",
    pattern: "Tree BFS"
  },

  // Tree DFS (Continued)
  {
    id: "dfs-4",
    title: "Path with Given Sequence",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/",
    pattern: "Tree DFS"
  },
  {
    id: "dfs-5",
    title: "Count Paths for a Sum",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/path-sum-iii/",
    pattern: "Tree DFS"
  },
  {
    id: "dfs-6",
    title: "Diameter of Binary Tree",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/diameter-of-binary-tree/",
    pattern: "Tree DFS"
  },
  {
    id: "dfs-7",
    title: "Path with Maximum Sum",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    pattern: "Tree DFS"
  },

  // Subsets (Continued)
  {
    id: "sub-4",
    title: "String Permutations by changing case",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/letter-case-permutation/",
    pattern: "Subsets"
  },
  {
    id: "sub-5",
    title: "Balanced Parentheses",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/generate-parentheses/",
    pattern: "Subsets"
  },
  {
    id: "sub-6",
    title: "Unique Generalized Abbreviations",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/generalized-abbreviation/",
    pattern: "Subsets"
  },
  {
    id: "sub-7",
    title: "Evaluate Expression",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/different-ways-to-add-parentheses/",
    pattern: "Subsets"
  },
  {
    id: "sub-8",
    title: "Structurally Unique Binary Search Trees",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/unique-binary-search-trees-ii/",
    pattern: "Subsets"
  },
  {
    id: "sub-9",
    title: "Count of Structurally Unique Binary Search Trees",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/unique-binary-search-trees/",
    pattern: "Subsets"
  },

  // Modified Binary Search (Continued)
  {
    id: "bs-4",
    title: "Number Range",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
    pattern: "Modified Binary Search"
  },
  {
    id: "bs-5",
    title: "Search in a Sorted Infinite Array",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/",
    pattern: "Modified Binary Search"
  },
  {
    id: "bs-6",
    title: "Minimum Difference Element",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/find-k-closest-elements/",
    pattern: "Modified Binary Search"
  },
  {
    id: "bs-7",
    title: "Search in Rotated Array",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    pattern: "Modified Binary Search"
  },
  {
    id: "bs-8",
    title: "Rotated Array Selection",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    pattern: "Modified Binary Search"
  },

  // Bit Manipulation (Continued)
  {
    id: "bm-4",
    title: "Two Single Numbers",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/single-number-iii/",
    pattern: "Bit Manipulation"
  },
  {
    id: "bm-5",
    title: "Complement of Base 10 Number",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/complement-of-base-10-integer/",
    pattern: "Bit Manipulation"
  },
  {
    id: "bm-6",
    title: "Flip and Invert an Image",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/flipping-an-image/",
    pattern: "Bit Manipulation"
  },

  // Top K Elements (Continued)
  {
    id: "k-4",
    title: "Connect Ropes",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/minimum-cost-to-connect-sticks/",
    pattern: "Top K Elements"
  },
  {
    id: "k-5",
    title: "K Closest Points to the Origin",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/k-closest-points-to-origin/",
    pattern: "Top K Elements"
  },
  {
    id: "k-6",
    title: "Frequency Sort",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/sort-characters-by-frequency/",
    pattern: "Top K Elements"
  },
  {
    id: "k-7",
    title: "Kth Largest Element in an Array",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    pattern: "Top K Elements"
  },
  {
    id: "k-8",
    title: "Reorganize String",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/reorganize-string/",
    pattern: "Top K Elements"
  },
  {
    id: "k-9",
    title: "Kth Smallest Number",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
    pattern: "Top K Elements"
  },
  {
    id: "k-10",
    title: "Rearrange String K Distance Apart",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/rearrange-string-k-distance-apart/",
    pattern: "Top K Elements"
  },
  {
    id: "k-11",
    title: "Scheduling Tasks",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/task-scheduler/",
    pattern: "Top K Elements"
  },
  {
    id: "k-12",
    title: "Frequency Stack",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/maximum-frequency-stack/",
    pattern: "Top K Elements"
  },

  // K-way Merge (Continued)
  {
    id: "kw-4",
    title: "Kth Smallest Number in a Sorted Matrix",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
    pattern: "K-way Merge"
  },
  {
    id: "kw-5",
    title: "Smallest Range Covering Elements from K Lists",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/",
    pattern: "K-way Merge"
  },
  {
    id: "kw-6",
    title: "K Pairs with Largest Sums",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
    pattern: "K-way Merge"
  },

  // 0/1 Knapsack (Continued)
  {
    id: "kn-1",
    title: "0/1 Knapsack",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/partition-equal-subset-sum/",
    pattern: "0/1 Knapsack"
  },
  {
    id: "kn-2",
    title: "Equal Subset Sum Partition",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/partition-equal-subset-sum/",
    pattern: "0/1 Knapsack"
  },
  {
    id: "kn-3",
    title: "Subset Sum",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/partition-equal-subset-sum/",
    pattern: "0/1 Knapsack"
  },
  {
    id: "kn-4",
    title: "Minimum Subset Sum Difference",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/last-stone-weight-ii/",
    pattern: "0/1 Knapsack"
  },

  // Topological Sort (Continued)
  {
    id: "ts-4",
    title: "Minimum Height Trees",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/minimum-height-trees/",
    pattern: "Topological Sort"
  },
  {
    id: "ts-5",
    title: "All Ancestors of a Node in a Directed Acyclic Graph",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/",
    pattern: "Topological Sort"
  },

  // DP (Continued)
  {
    id: "dp-4",
    title: "House Robber",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/house-robber/",
    pattern: "Dynamic Programming"
  },
  {
    id: "dp-5",
    title: "House Robber II",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/house-robber-ii/",
    pattern: "Dynamic Programming"
  },
  {
    id: "dp-6",
    title: "Climbing Stairs",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/climbing-stairs/",
    pattern: "Dynamic Programming"
  },
  {
    id: "dp-7",
    title: "Min Cost Climbing Stairs",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/min-cost-climbing-stairs/",
    pattern: "Dynamic Programming"
  },
  {
    id: "dp-8",
    title: "Word Break",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/word-break/",
    pattern: "Dynamic Programming"
  },
  {
    id: "dp-9",
    title: "Unique Paths",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/unique-paths/",
    pattern: "Dynamic Programming"
  },
  {
    id: "dp-10",
    title: "Unique Paths II",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/unique-paths-ii/",
    pattern: "Dynamic Programming"
  },
  {
    id: "dp-11",
    title: "Minimum Path Sum",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/minimum-path-sum/",
    pattern: "Dynamic Programming"
  },
  {
    id: "dp-12",
    title: "Decoding Ways",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/decode-ways/",
    pattern: "Dynamic Programming"
  },
  {
    id: "dp-13",
    title: "Maximum Subarray",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/maximum-subarray/",
    pattern: "Dynamic Programming"
  },

  // Graphs (Continued)
  {
    id: "gr-5",
    title: "Number of Islands",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/number-of-islands/",
    pattern: "Graphs"
  },
  {
    id: "gr-6",
    title: "Max Area of Island",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/max-area-of-island/",
    pattern: "Graphs"
  },
  {
    id: "gr-7",
    title: "Surrounded Regions",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/surrounded-regions/",
    pattern: "Graphs"
  },
  {
    id: "gr-8",
    title: "Word Ladder",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/word-ladder/",
    pattern: "Graphs"
  },
  {
    id: "gr-9",
    title: "Clone Graph",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/clone-graph/",
    pattern: "Graphs"
  },
  {
    id: "gr-10",
    title: "Pacific Atlantic Water Flow",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    pattern: "Graphs"
  },
  {
    id: "gr-11",
    title: "Network Delay Time",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/network-delay-time/",
    pattern: "Graphs"
  },
  {
    id: "gr-12",
    title: "Cheapest Flights Within K Stops",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
    pattern: "Graphs"
  },

  // Greedy (Continued)
  {
    id: "gd-4",
    title: "Partition Labels",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/partition-labels/",
    pattern: "Greedy"
  },
  {
    id: "gd-5",
    title: "Best Time to Buy and Sell Stock II",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
    pattern: "Greedy"
  },
  {
    id: "gd-6",
    title: "Candy",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/candy/",
    pattern: "Greedy"
  },
  {
    id: "gd-7",
    title: "Assign Cookies",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/assign-cookies/",
    pattern: "Greedy"
  },
  {
    id: "gd-8",
    title: "Lemondade Change",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/lemonade-change/",
    pattern: "Greedy"
  },

  // Backtracking (Continued)
  {
    id: "bt-4",
    title: "Combinations",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/combinations/",
    pattern: "Backtracking"
  },
  {
    id: "bt-5",
    title: "Combination Sum",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/combination-sum/",
    pattern: "Backtracking"
  },
  {
    id: "bt-6",
    title: "Combination Sum II",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/combination-sum-ii/",
    pattern: "Backtracking"
  },
  {
    id: "bt-7",
    title: "Palindrome Partitioning",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/palindrome-partitioning/",
    pattern: "Backtracking"
  },
  {
    id: "bt-8",
    title: "Restore IP Addresses",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/restore-ip-addresses/",
    pattern: "Backtracking"
  },
  {
    id: "bt-9",
    title: "Letter Combinations of a Phone Number",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
    pattern: "Backtracking"
  },

  // Trie (Continued)
  {
    id: "tr-3",
    title: "Replace Words",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/replace-words/",
    pattern: "Trie"
  },
  {
    id: "tr-4",
    title: "Top K Frequent Words",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/top-k-frequent-words/",
    pattern: "Trie"
  },
  {
    id: "tr-5",
    title: "Map Sum Pairs",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/map-sum-pairs/",
    pattern: "Trie"
  },
  // Stacks & Queues
  {
    id: "sq-1",
    title: "Valid Parentheses",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/valid-parentheses/",
    pattern: "Stacks & Queues"
  },
  {
    id: "sq-2",
    title: "Min Stack",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/min-stack/",
    pattern: "Stacks & Queues"
  },
  {
    id: "sq-3",
    title: "Implement Queue using Stacks",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/implement-queue-using-stacks/",
    pattern: "Stacks & Queues"
  },
  {
    id: "sq-4",
    title: "Evaluate Reverse Polish Notation",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
    pattern: "Stacks & Queues"
  },
  {
    id: "sq-5",
    title: "Daily Temperatures",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/daily-temperatures/",
    pattern: "Stacks & Queues"
  },
  {
    id: "sq-6",
    title: "Largest Rectangle in Histogram",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    pattern: "Stacks & Queues"
  },
  {
    id: "sq-7",
    title: "Sliding Window Maximum",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/sliding-window-maximum/",
    pattern: "Stacks & Queues"
  },
  // Dynamic Programming (Even More)
  {
    id: "dp-14",
    title: "Longest Increasing Subsequence",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/longest-increasing-subsequence/",
    pattern: "Dynamic Programming"
  },
  {
    id: "dp-15",
    title: "Maximum Product Subarray",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/maximum-product-subarray/",
    pattern: "Dynamic Programming"
  },
  {
    id: "dp-16",
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/longest-palindromic-substring/",
    pattern: "Dynamic Programming"
  },
  {
    id: "dp-17",
    title: "Palindrome Partitioning II",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/palindrome-partitioning-ii/",
    pattern: "Dynamic Programming"
  },
  {
    id: "dp-18",
    title: "Maximal Square",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/maximal-square/",
    pattern: "Dynamic Programming"
  },
  {
    id: "dp-19",
    title: "Burst Balloons",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/burst-balloons/",
    pattern: "Dynamic Programming"
  },
  {
    id: "dp-20",
    title: "Wildcard Matching",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/wildcard-matching/",
    pattern: "Dynamic Programming"
  },
  {
    id: "dp-21",
    title: "Regular Expression Matching",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/regular-expression-matching/",
    pattern: "Dynamic Programming"
  },

  // Graphs (Even More)
  {
    id: "gr-13",
    title: "Graph Valid Tree",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/graph-valid-tree/",
    pattern: "Graphs"
  },
  {
    id: "gr-14",
    title: "Number of Connected Components in an Undirected Graph",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
    pattern: "Graphs"
  },
  {
    id: "gr-15",
    title: "Redundant Connection",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/redundant-connection/",
    pattern: "Graphs"
  },
  {
    id: "gr-16",
    title: "Is Graph Bipartite?",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/is-graph-bipartite/",
    pattern: "Graphs"
  },
  {
    id: "gr-17",
    title: "All Paths From Source to Target",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/all-paths-from-source-to-target/",
    pattern: "Graphs"
  },
  {
    id: "gr-18",
    title: "Min Cost to Connect All Points",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/min-cost-to-connect-all-points/",
    pattern: "Graphs"
  },
  {
    id: "gr-19",
    title: "Reconstruct Itinerary",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/reconstruct-itinerary/",
    pattern: "Graphs"
  },

  // Binary Tree DFS (Even More)
  {
    id: "dfs-8",
    title: "Lowest Common Ancestor of a Binary Tree",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    pattern: "Tree DFS"
  },
  {
    id: "dfs-9",
    title: "Serialize and Deserialize Binary Tree",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    pattern: "Tree DFS"
  },
  {
    id: "dfs-10",
    title: "Binary Tree Maximum Path Sum",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    pattern: "Tree DFS"
  },
  // Heap (General)
  {
    id: "hp-1",
    title: "Last Stone Weight",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/last-stone-weight/",
    pattern: "Heap"
  },
  {
    id: "hp-2",
    title: "Kth Largest Element in an Array",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    pattern: "Heap"
  },
  {
    id: "hp-3",
    title: "Task Scheduler",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/task-scheduler/",
    pattern: "Heap"
  },
  {
    id: "hp-4",
    title: "K Closest Points to Origin",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/k-closest-points-to-origin/",
    pattern: "Heap"
  },
  // Arrays & Hashing
  {
    id: "ah-1",
    title: "Contains Duplicate",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/contains-duplicate/",
    pattern: "Arrays & Hashing"
  },
  {
    id: "ah-2",
    title: "Valid Anagram",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/valid-anagram/",
    pattern: "Arrays & Hashing"
  },
  {
    id: "ah-3",
    title: "Two Sum",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/two-sum/",
    pattern: "Arrays & Hashing"
  },
  {
    id: "ah-4",
    title: "Group Anagrams",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/group-anagrams/",
    pattern: "Arrays & Hashing"
  },
  {
    id: "ah-5",
    title: "Top K Frequent Elements",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/top-k-frequent-elements/",
    pattern: "Arrays & Hashing"
  },
  {
    id: "ah-6",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/product-of-array-except-self/",
    pattern: "Arrays & Hashing"
  },
  {
    id: "ah-7",
    title: "Valid Sudoku",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/valid-sudoku/",
    pattern: "Arrays & Hashing"
  },
  {
    id: "ah-8",
    title: "Longest Consecutive Sequence",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/longest-consecutive-sequence/",
    pattern: "Arrays & Hashing"
  },
  {
    id: "ah-9",
    title: "Encode and Decode Strings",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/encode-and-decode-strings/",
    pattern: "Arrays & Hashing"
  },
  // Math & Geometry
  {
    id: "mg-1",
    title: "Rotate Image",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/rotate-image/",
    pattern: "Math & Geometry"
  },
  {
    id: "mg-2",
    title: "Spiral Matrix",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/spiral-matrix/",
    pattern: "Math & Geometry"
  },
  {
    id: "mg-3",
    title: "Set Matrix Zeroes",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/set-matrix-zeroes/",
    pattern: "Math & Geometry"
  },
  {
    id: "mg-4",
    title: "Pow(x, n)",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/powx-n/",
    pattern: "Math & Geometry"
  },
  {
    id: "mg-5",
    title: "Multiply Strings",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/multiply-strings/",
    pattern: "Math & Geometry"
  },
  // Recursion
  {
    id: "rc-1",
    title: "K-th Symbol in Grammar",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/k-th-symbol-in-grammar/",
    pattern: "Recursion"
  },
  {
    id: "rc-2",
    title: "Splitting a String Into Descending Consecutive Values",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/",
    pattern: "Recursion"
  },
  {
    id: "rc-3",
    title: "Find Kth Bit in Nth Binary String",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/",
    pattern: "Recursion"
  },
  {
    id: "rc-4",
    title: "Elimination Game",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/elimination-game/",
    pattern: "Recursion"
  }
];
