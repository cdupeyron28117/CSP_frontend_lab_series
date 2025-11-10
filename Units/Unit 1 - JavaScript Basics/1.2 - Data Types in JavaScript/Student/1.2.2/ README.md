# Lab 1.2 – Data Types

## 🎯 Learning Goals
- Identify and use JavaScript primitive data types.  
- Check variable types using `typeof` and explain the results.  
- Convert values explicitly with `Number()`, `String()`, and `Boolean()`.  

---

## 📖 Pre-Lab Reading
- Open the included PDF: `1_2_Data_Types.pdf`  
- Sections: *Primitive Data Types*, *Type Checking*, *Type Conversion*, *NaN*, *Template Literals*  

---

## 🧰 Setup
- Open this lab in **VS Code**.  
- Open `src/index.html` in Chrome → **DevTools → Console** to view output.  
- Edit only: `src/Lab1_2_DataTypes.js`.

---

## 📝 Tasks
1. **Primitive Types**  
   - Declare one variable for each primitive type: `string`, `number`, `boolean`, `null`, and `undefined`.  
   - Print each variable and its type using `typeof`.

2. **Typeof Check**  
   - Compare `typeof null` and `typeof undefined`.  
   - Explain in a comment why the results differ.

3. **Concatenation vs Addition**  
   - Use `"5"` and `5` to demonstrate the difference between concatenation and numeric addition.  
   - Print both results and explain the behavior.

4. **Explicit Conversions**  
   - Convert different values using `Number()`, `String()`, and `Boolean()`.  
   - Print each result and describe what you notice.

5. **NaN and isNaN()**  
   - Try converting a non-numeric string such as `"hello"` to a number.  
   - Use `isNaN()` to check the result and comment on the output.

6. **Template Literals**  
   - Create variables `name` and `age`.  
   - Print:  
     ```js
     Hello, my name is ${name} and I am ${age} years old.
     ```

---

## 🚀 Stretch Goals (optional)
- Compare `parseInt()` vs `Number()` with various strings.  
- Test `Boolean("")`, `Boolean("0")`, and `Boolean("false")`; record your observations in comments.  

---

## 🎟 Exit Ticket
Answer in 2–3 sentences each:
1. Which data type(s) did you use today and why?  
2. Where did you encounter type conversion (implicit or explicit)?  
3. One misconception I corrected or a tip I learned.  
4. What would you try next time to debug faster?  

---

## ✅ Submission Checklist
- [ ] All tasks completed in `src/Lab1_2_DataTypes.js`  
- [ ] Console output runs without errors  
- [ ] Exit Ticket answered in this README or the comment footer  
- [ ] Pushed to your fork & PR created for teacher review  

---

## 🧠 Review
- [Quizlet: Lab 1.2 – Data Types](https://quizlet.com/placeholder-link)
