# Prompts and Testing

## Overview

This document captures the prompts (inputs) used to test the AI Spend Audit application and the expected outputs based on the implemented logic.

---

## Test Case 1: High Spending

### Input
- Tool: ChatGPT  
- Plan: Pro  
- Monthly Spend: 120  
- Users: 1  
- Use Case: Content generation  

### Expected Output
- Spending Level: High  
- Suggestion: Downgrade plan  
- Estimated Savings: $30/month  

---

## Test Case 2: Moderate Spending

### Input
- Tool: Claude  
- Plan: Pro  
- Monthly Spend: 70  
- Users: 2  
- Use Case: Research  

### Expected Output
- Spending Level: Moderate  
- Suggestion: Optimize usage  
- Estimated Savings: $15/month  

---

## Test Case 3: Optimized Spending

### Input
- Tool: ChatGPT  
- Plan: Free  
- Monthly Spend: 20  
- Users: 1  
- Use Case: Learning  

### Expected Output
- Spending Level: Optimized  
- Suggestion: No changes needed  
- Estimated Savings: $0/month  

---

## Edge Case Testing

### Case 1: Empty Fields
- Input: Missing values  
- Output: Warning message asking user to fill all fields  

### Case 2: Zero Spend
- Input: Spend = 0  
- Output: Optimized spending  

### Case 3: Non-numeric Spend
- Input: Invalid number  
- Output: Handled via input type validation  

---

## Observations

- The system responds instantly to user input  
- Clear categorization improves user understanding  
- Suggestions are simple and actionable  

---

## Conclusion

The prompts demonstrate that the application correctly evaluates different spending scenarios and provides meaningful feedback to users.
