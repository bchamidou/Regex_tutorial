# Regex Tutorial

This assignment is to create a tutorial that explains how a specific regular expression, or regex, functions by breaking down each part of the expression and describing what it does. 

Regular expressions, commonly referred to as regex or regexp, are powerful tools used in text processing and pattern matching. They provide a concise and flexible way to search, validate, and manipulate text based on specific patterns.

Understanding regular expressions is essential for web developers, data analysts, and anyone working with textual data. In this tutorial, we will explore the fundamental concepts of regex and how to use them effectively.

Whether you're a beginner looking to get started with regex or an experienced developer aiming to deepen your knowledge, this tutorial will guide you through the key concepts and practical examples.

Let's dive into the world of regular expressions and unlock their potential for text manipulation and pattern matching.

***
## Summary

Briefly summarize the regex you will be describing and what you will explain. Include a code snippet of the regex. Replace this text with your summary.

we will focus on the regex pattern /^([A-Za-z]+)\s(\d+)$/. This regex pattern is designed to match and capture a specific format: a sequence of alphabetical characters followed by a space and then a sequence of digits. We will break down each component of this regex and explain its purpose..
***
## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Bracket Expressions](#bracket-expressions)
- [Character Classes](#character-classes)
- [The OR Operator](#the-or-operator)
- [Flags](#flags)
- [Character Escapes](#character-escapes)

***
## Regex Components
***
### Anchors

The caret ^ and dollar $ characters have special meaning in a regexp. They are called “anchors”.
The caret ^ matches at the beginning of the text, and the dollar $ – at the end.
Both anchors together ^...$ are often used to test whether or not a string fully matches the pattern. For instance, to check if the user input is in the right format.

/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
the anchors are the ^ and the $. This code specifically is saying that we are looking for something that starts with

^([a-z0-9_\.-]+)
we will define what everything inside the parentheses later in this tutorial, but what the anchor means is that if we are to find a match it has follow those initial guidelines. It also has to end with

.([a-z\.]{2,6})$.
So, it must start and end with the given parameters within the code. If it does not, then it is not a match.

***
### Quantifiers

A quantifier is used to determine how many times a specific character or group of characters needs to be present in order to have a match. 
For instance,this regex includes the quantifier + means that it has to contain at least one of this in order to have a match.The + operator will connect the users email name + email service + .com ,the following quantifier {2,6} will allow a match range of 2-6 characters for the character set of [a-z\.].
This ([a-z0-9_\.-]+) will match any string that contains a-z, 0-9,_,.,or -. 

***
### Grouping Constructs

Contininuing with the code for matching an email:

/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ 

Capturing group #1 in this expression is ([a-z0-9_\.-]+) that matches the user email name.
The second capturing group is ([\da-z\.-]+) which will match the email service.
Then lastly, capture group #3 is ([a-z\.]{2,6}) to capture the .com.

When matching, we have to make sure we are following the guidelines of the group before moving on to the next group

***
### Bracket Expressions

Bracked expressios for email validation includes the character sets of [a-z0-9_\.-], which is matching any letter a-z and is case senstive. It also matches a character 0-9 and matches the characters "_" , "-" , and "."; [\da-z\.-], which is matching a single digit from 0-9, any character a-z (case senstive), and the characters "." and "-".; [a-z\.] matches any character a-z(case senstive) and the character ".".

***
### Character Classes

we can find and remove anything that’s not a number. Character classes can help with that.
A character class is a special notation that matches any symbol from a certain set.
For the start, let’s explore the “digit” class. It’s written as \d and corresponds to “any single digit”.
\d is present in the given matching email code and what it will match a single letter character, a-z, after the @ sign in the email address. Basically ensuring that a letter is matched after the @ in the email and not a number or special character.

***
### The OR Operator

This is a regex for matching a hex code that uses the OR Operator. What this will do is it will match where it starts with the # and that has to come first followed by one of the following:

[a-z\.]{2,6} Matches any character from a-z but the length range must between 2 to 6.

***
### Flags

A regex flag is not used in the matching email code that is being used for this tutorial. A regular expression typically comes in the form: /regex/

Where the slashes denote where the regular expresssion starts and ends. A flag can be used after the slash to give more guidelines for our matching. The flags are:

g which stands for "global" which will allow for matching all the instances within a string that follow the matching guidelines set in the regular expression.

m which stands for "multiline" which will search line by line rather than searching through a string as a whole.

i which stands for "insensitive" will make the regular expression case-insensitive, so capitals and lower-case letters will not deture the matching.

s Enables “dotall” mode, that allows a dot . to match newline character \n (covered in the chapter Character classes).

***
### Character Escapes

A character escape represents a character that may not be able to be conveniently represented in its literal form.
Character escapes are useful when you want to match a character that is not easily represented in its literal form. 
\f, \n, \r, \t, \v
\d,  

\c followed by a letter from A to Z or a to z
Represents the control character with value equal to the letter's character value modulo 32.

***
## Author

Cheik H BAGAGNAN
GitHub profile 
https://github.com/https://github.com/bchamidou