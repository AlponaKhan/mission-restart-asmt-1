Question Answer:

1) What is the difference between null and undefined?
Ans:
Null: নাল হলো কোনো ভেরিয়েবল এর মান ইচ্ছাকৃতভাবে খালি ডিকলেয়ার করা। একজন ডেভলপার কোনো ভেরিয়েবল এর মান নাল হিসেবে সেট করতে পারে।
Undefined:undefined হলো কোনো ভেরিয়েবল ডিকলেয়ার করা হয়েছে কিন্তু এর কোনো মান নেই বা পাওয়া যায়নি। 

2) What is the use of the map() function in JavaScript? How is it different from forEach()?
Ans:
map(): map() কোনো অ্যারের প্রতিটি উপাদানের উপর কাজ করে একটি নতুন অ্যারে রির্টান করে। map() অরজিন্যাল ডাটাকে মডিফাই করে না।
forEach(): forEach() কোনো অ্যারের উপর কাজ করে কিন্তু কোনোকিছু রির্টান করে না। forEach() অরজিন্যাল ডাটাকে মডিফাই করে।

3) What is the difference between == and ===?
Ans:
== শুধু মান চেক করে।
=== মান চেক করার পাশাপাশি ডেটা টাইপও চেক করে।

4) What is the significance of async/await in fetching API data?
Ans:
async/await ধারাবাহিকভাবে কাজ করে। সিকোয়েন্স মেনটেন করে একটি কাজ শেষ হলে আরেকটি কাজ করে। প্রথম কাজটি শেষ না হওয়া পর্যন্ত ওয়েট করে।

5) Explain the concept of Scope in JavaScript (Global, Function, Block).
Ans:
Global Scope এ কোনো ভ্যারিএবল ডিকলেয়ার করলে যে কোনো স্কোপ থেকে এক্সেস করা যায়।
Function Scope এ কোনো ভ্যারিএবল ডিকলেয়ার করলে শুধুমাত্র সেই ফাংশন থেকে এক্সেস করা যায়। এটি একটি লোকাল স্কোপ।
Block Scope কোনো একটি স্কোপের ভেতর ডিকলেয়ার করা হয়। যেমনঃ if,for loop