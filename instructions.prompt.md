# GitHub Copilot Instructions for Web1.LK Project

## Core Directives
1. **Always reference `plan.txt` before making changes**
   - Check current progress status at the top of the file
   - Verify which tasks are marked as `[ ]` (pending) vs `[x]` (completed)
   - Also include - [Progress: 0%] , [Progress: 15%] to track the progress

2. **Update progress tracking after each edit**
   ```markdown
   - After completing a task:
     1. Open `plan.txt`
     2. Locate the corresponding checklist item
     3. Replace `[ ]` with `[x]`
     4. Add commit message: "Completed: [Task description]"