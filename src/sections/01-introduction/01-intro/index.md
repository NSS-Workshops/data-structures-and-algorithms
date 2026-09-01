# Welcome to the Data Structures and Algorithms course!

This course is here to help you circle back and solidify your foundations, whether you're preparing for interviews or leveling up your software skills. Each week, you'll get hands-on practice solving problems, sharpening your analytical thinking, and exploring how different data structures work and when to use them. You'll also learn how to evaluate the efficiency of algorithms and tackle some classic ones that will hone your logic and creativity—all in a realistic, interview-style setting.

Think of this course as stepping back into the kitchen not just to cook, but to sharpen your knives and restock your toolkit. While your original bootcamp focused on building real-world projects, this course takes a step back to focus on the smaller building blocks—the foundational pieces that power those projects. Instead of complete full applications, we’ll dissect how smaller pieces work under the hood. You'll strengthen your understanding of core data structures and algorithms, and you will write cleaner, faster, and more efficient code. 

The goal is to return to project work with deeper insight, sharper skills, and the confidence to tackle hard problems.

## 👥 Who This Course Is For
This course is designed for bootcamp grads preparing for technical interviews, and for anyone looking to build steady, meaningful progress toward mastery and confidence in solving problems with code.

We assume you’re comfortable with at least one programming language. While we’ll use JavaScript to demonstrate concepts, the skills and strategies you’ll learn apply across languages—Python, Java, C#, and beyond.

We’ll strip things down to the essentials—no frameworks, no extras—just the core problem-solving skills that work across any language, tech stack, or domain. Whether you’re heading into embedded systems, web development, cloud infrastructure, or data engineering, this foundation travels with you. It’s powerful precisely because it doesn’t assume where your path leads—it prepares you for all of it.

As an adult learner, you stay engaged when content feels relevant. That’s why every topic in this course connects directly to real-world coding and interview situations. Research shows that relevance, hands-on learning, and self-direction are key to lasting understanding. You’ll learn by doing, reviewing, and reflecting—because experience-based learning sticks.


The coding exercises in this course are intentionally challenging. They’re meant to stretch your brain and create the kind of struggle that actually makes things stick. That discomfort you feel when you’re stuck? That’s your brain learning.

Resist the urge to short-circuit the process by immediately turning to an AI tool or searching for the solution. These are well-known problems — yes, models have seen them before — but you haven’t fully worked through them yet. Don’t cheat yourself out of the learning that comes from wrestling with a tough problem.

You are not looking for perfection. You are looking for progress. The next 10 weeks are your chance to level up, one challenge at a time. Lean into it. You've got this.

And if something ever feels unclear or disconnected, speak up. We’re here to help you see the value, not just the challenge. This is your journey. Let’s make it purposeful, practical, and—yes—even enjoyable. 😊

## 🧪 A Quick Example of what you will learn
Imagine two surveys—one with 10,000 responses, the other with 12,000. You need to check whether any participants responded to both. There are multiple ways to solve this, but some scale better than others.
By the end of this course, you’ll have the tools to analyze both, see the performance trade-offs, and confidently choose the better approach using Big‑O thinking. 

```javascript
function hasCommonRespondent(surveyAResponses, surveyBResponses) {
  for (let i = 0; i < surveyAResponses.length; i++) {
    for (let j = 0; j < surveyBResponses.length; j++) {
      if (surveyAResponses[i] === surveyBResponses[j]) {
        return true;
      }
    }
  }
  return false;
}
```

```javascript
function hasCommonRespondent(surveyAResponses, surveyBResponses) {
  const respondedToA = new Set();

  for (const respondent of surveyAResponses) {
    respondedToA.add(respondent);
  }

  for (const respondent of surveyBResponses) {
    if (respondedToA.has(respondent)) {
      return true;
    }
  }

  return false;
}
```

## 🧠 How Do You Choose?
Do you go with the version that’s shorter? The one that’s easier to read? What about one that uses less memory, or the one that should run faster? How much faster is “faster”? And on whose machine are we measuring on?

These are the kinds of questions engineers face all the time, and the answers aren’t always clear at first. That’s why, throughout the course, we’ll guide you in learning how to think about performance using Big‑O. It’s a way to describe how code scales, no matter what machine you’re on or how fast it runs. It helps cut through the guesswork so you can make thoughtful decisions before you even hit "run."

By the end, you won’t just be picking solutions that feel right, you’ll be able to explain why one is better with confidence.

## ⏰ Time Commitment & Course Duration

**Expected Weekly Commitment:** ~10 hours per week
**Expected Weekly async Commitment:** ~6 hours per week async self study / prep
**Expected Weekly in class  Commitment:** ~4 hours per week two time 2 hours on zoom
**Course Duration:** 10 weeks
**Total Course Hours:** ~100 hours

**Class times on zoom Mondays and Wednesdays 5:30-7:30pm**

**First class on zoom starts on May 18th**
**Last class will be Wednesday, July 22**


## Attendance

We will be taking attendance in this class. 

Practice pairing sessions will take place during the second class of each week, giving us time in the first session to solidify concepts you’ve reviewed asynchronously through group activities and discussion.
After the second class session each week, we’ll email the pairings for the following week. 

We’ll exclude students from the pairings if we know ahead of time they’ll be absent. 
To help us plan accurately, please let us know at **least one week in advance** if you’ll be out, so we can adjust the pairings accordingly and ensure your partner isn’t left without someone to work with.

Let us know in the cohorts channel if and when you are going to be out. The slack channel has your instructors pinned so please @ all instructors listed there.

## 🗓️ Course Structure
- Live Zoom Sessions: 2 sessions per week, each 2 hours long 
(the zoom link is pinned at the top of your cohorts slack channel)

- Slack Channel: Is used for discussions, announcements
- Slack Channel: Join the conversation, ask questions, and stay updated.
Look for: #dsa-{your cohort number} — for example, Cohort One = #dsa-01

### Class Session Format (Repeats weekly):
(Please note that pair coding sessions will begin in Week 2 to give you plenty of time to prepare.)
#### Day 1
- **Full 2 hours** Instructor-led walkthroughs, quizzes, discussions, live demonstrations, reviews, and collaborative group work.

#### Day 2
- **45 minutes:** Weekly tech interview practice in breakout rooms.
- **5 minutes:** Break
- **45 minutes:** Weekly tech interview practice in breakout rooms (switch roles).
- **5 minutes:** Break
- **20 minutes:** Review/discuss the problems as a group

In addition to our synchronous Zoom sessions, this course includes an asynchronous component, which we estimate will take about 6 hours per week.
Each Monday, we’ll review the week’s material together — with the expectation that you’ve already worked through it and are ready to ask questions, share insights, and dig deeper into anything that felt unclear.
A key part of your asynchronous time should be spent reading, working the coding exercises and reflecting on the core concepts. The other part should be dedicated to preparing for the weekly pair coding assignment, which will be sent to you by email. As the interviewer, your preparation is essential — it ensures a more productive and realistic practice experience for both you and your partner.

###  How to reach us
Got a question? The \`#help\` channel on Slack is the perfect place to ask!

### 🧪 What to Expect from Paired Practice
Each week, starting with week two, you’ll team up with a classmate to practice a mock coding interview. You’ll take turns being the interviewer and the interviewee, working through a problem together in a breakout room. Don’t worry—this isn’t about getting everything right. It’s a safe space to mess up, try things, struggle a bit, and learn by doing. The key is to show up, stay engaged, and lean into the challenge. Even if you don’t solve the problem, just working through it will help you get more comfortable, build confidence, and make the eventual solution stick. This time is meant to help you grow, so use it well!
- The goal is to practice thinking out loud and solving problems under pressure
- Build confidence giving and receiving feedback
- Get comfortable with the interview format
You’ll receive all prep details ahead of time, including the problem (for the interviewer only). During the session, you’ll follow a simple process, switch roles halfway, and reflect together at the end.


### Asynchronous Self-Study
Your time to become curious about material and we encourages you to engage with material on your own schedule before applying it during live sessions. This approach allows for:
- **Flexible pacing** that accommodates your schedule
- **Deep engagement** with concepts before group discussions
- **Prepared participation** in collaborative activities

## 🎯 Course Goals

By the end of this course, you will be able to:

- **Understand fundamental data structures** and when to use each one
- **Analyze algorithm efficiency** using Big O notation
- **Implement core algorithms** for searching, sorting, and problem-solving
- **Recognize common patterns** in algorithmic problem-solving
- **Choose appropriate data structures** for different scenarios
- **Solve complex problems** by combining multiple techniques
- **Communicate your solutions clearly** during technical interviews

### Learning Framework

This course is structured around the first three levels of **Bloom's Taxonomy**:
- **Remember**: Recall key concepts and definitions
- **Understand**: Explain principles and relationships
- **Apply**: Implement solutions and solve problems

### How to Use Learning Objectives

Each chapter begins with specific learning objectives that serve as your roadmap. Use these objectives to:

- **Focus your attention** on the most important concepts
- **Self-assess your understanding** before moving to the next chapter
- **Review and reinforce** key concepts when needed
- **Track your progress** throughout the course

## 📚 Course Structure

This course is organized into 10 progressive modules, each building upon the previous ones:

### Module/Week 1: Just Enough Math
Mathematical concepts and problem-solving fundamentals

### Module/Week 2: Algorithmic Thinking & Big-O
Problem-solving fundamentals and Big(o) notation

### Module/Week 3: Arrays & Two Pointers
Linear data structures and optimization techniques

### Module/Week 4: 2D Arrays & Grid Navigation
Working with matrices and spatial problems

### Module/Week 5: Linked Lists & Pointer Manipulation
Dynamic data structures and node-based operations

### Module/Week 6: Stacks & Queues
LIFO and FIFO data structures for sequence management

### Module/Week 7: Maps & Sets
Hash-based data structures for fast lookups and uniqueness

### Module/Week 8: Sliding Window Technique
Optimizing subarray and substring problems

### Module/Week 9: Sorting & Binary Search
Fundamental algorithms for ordered data

### Module/Week 10: Combining Patterns & Interview Readiness
Integrating multiple techniques and putting it all together for technical interviews

## 🚀 How to Approach the Course

### Sequential Learning
Work through the modules in order. Each chapter builds on concepts from previous ones, so skipping ahead or moving ahead may leave gaps in your understanding. If you finish the prescribed material look for the supplemental material provided to more deeply engage with the content. Find practice problem on the internet let your favorite LLM quiz you or give you extra practice problems for the given module theme. 

### Active Engagement
To get the most out of this course, don’t just passively read, actively engage with the material. Take notes as you go to process and retain key ideas. Work through each example step by step, making sure you understand not just what the code does, but why it works. Complete every exercise before moving on, even if it feels tough, that’s where the learning happens. And don’t be afraid to experiment with the code. Tweak it, break it, fix it. The more you interact with it, the deeper your understanding will grow.

### Anatomy of Each Module

Each module follows a consistent structure designed to help you build understanding step-by-step. Below is an overview of the key components you'll find in every module, along with suggestions for how to make the most of each part.

#### 1. Learning Objectives

These outline the core skills and concepts you'll be expected to understand and apply by the end of the module. Refer to them as a guide to focus your study and self-assess your progress.

#### 2. Concept and Exercise Pages

These are the heart of the module. Each concept is introduced with brief explanations, code examples, and short exercises to test your understanding as you go. We recommend:

* Actively working through the examples
* Attempting each exercise before checking the solution

#### 3. Info Sheet
Included in the Data Structures modules, the Info Sheet serves as a quick-reference guide or cheat sheet. It typically contains a table of common operations and their associated Big O time complexities. Use it to:

- Get a high-level overview of how different operations perform
- Compare the efficiency of different data structures
- Refresh your memory before paired practice interviews

#### 4. Supplemental Materials

Each module includes additional resources to deepen your understanding, such as podcasts, readings, visual diagrams. To get the most out of them:

* **Listen to the podcast(s)** and jot down your takeaways
* **Read the supplemental materials** to reinforce and expand on your core learning
* **Engage with the visual guides** they’re here to help you build a solid mental model of each concept. Don’t just watch the animations passively; take the time to connect each step of the animation to the corresponding line in the algorithm. The more actively you map the motion to the logic, the more deeply it will stick.

#### 5. Glossary

Each module has a glossary of important terms. Build your vocabulary and fluency by:

* Reviewing terms from the current module
* Revisiting earlier terms periodically to keep them fresh
* Using flashcards or memory techniques to master essential concepts

#### 6. Checkpoints

These are short quizzes or reflection activities to help you evaluate your understanding before moving on. They’re not graded, but they are important. Use them to:

* Check for gaps in your knowledge
* Confirm you’re ready to tackle the next set of challenges
* Identify topics to revisit in your async or pair prep time

## 💾 Saving Your Work

**Important**: To preserve your progress and code solutions, you must push your work to GitHub regularly.

### Setting Up Your Repository
1. **Create a new repository** on GitHub for this course
2. **Clone the repository** to your local machine
3. **Copy all code you complete ** to your repository
4. **Commit and push** your initial setup

### Regular Saves
- **Commit your progress** after completing each chapter
- **Push to GitHub** at least once per study session
- **Include meaningful commit messages** describing what you learned
- **Save your exercise solutions** and any additional notes

Example commit workflow:
```bash
git add .
git commit -m "Complete Chapter 3: Arrays and Two Pointers - learned about sliding window technique"
git push origin main
```

## 📝 Note-Taking Strategy

Effective note-taking will significantly enhance your learning experience:

### What to Note
- **Key concepts** and their definitions
- **Algorithm implementations** with your own comments
- **Time and space complexity** analysis
- **Common pitfalls** and how to avoid them
- **Personal insights** and "aha!" moments
- **Questions** that arise during your study

### Note-Taking Tips
- **Use your own words** to explain concepts
- **Draw diagrams** for visual data structures
- **Create summary sheets** for each chapter
- **Link concepts** between different chapters
- **Include code snippets** with explanations

## 🎓 Success Tips

1. **Be patient with yourself** - These concepts take time to master
2. **Practice consistently** - Regular study is more effective than cramming
3. **Don't just memorize** - Focus on understanding the underlying principles
4. **Ask questions** - Engage with the material actively
5. **Apply knowledge** - Try to see these patterns in real-world problems
6. **Review regularly** - Spaced repetition strengthens long-term retention

## Ready to Begin?

You're about to embark on a journey that will transform how you think about problem-solving and software development. 
The concepts you'll learn here form the foundation of computer science and will serve you throughout your career.

Remember: every expert was once a beginner. Take your time, stay curious, and enjoy the process of learning!

Let's start with some essential mathematical foundations in the next chapter.
