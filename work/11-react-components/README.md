# React Components Assignment

**Due Apr 3, 11:59pm PT**

## Submission Instructions

* start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'react-components' (`git checkout -b react-components`)
* add the necessary files in this directory to have the required features
* add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

## Goal

Create a react project that:
- Is a Single Page Application
- Loads a Button component that you write
- This Button component is used multiple times
- This Button component accepts props that change the rendered appearance
- You will have a modal window using `<dialog>`



## Setup Requirements

- Create a react project named "components" using create-react-app inside this directory
- Modify the files in the src/ directory inside components/ to meet the requirements
- For css, you can add/modify as many css files as you want in /src, including src/index.css that is also applied to the output.
- Remember to meet the initial changes required in class:
  - Change your App.js to App.jsx (requires a server restart)
  - Change/replace the default css className(s) to be kebab-case

## Functional Requirements

- Create a Component (outside of App.jsx) that includes and uses a `<dialog>` element for a modal window
- Uses your Button component in 3 different ways
  - At least once with `type="button"` and `visual="link"` props
  - At least once with `type="button"` and `visual="button"` props
  - At least once with `type="submit"` and `visual="link"` props
  - The `visual` and `type` props can default to a value, but must be able to be overridden by passing the appropriate prop
- A Button component should render a `<button>` with the matching `type` attribute
- The "submit" option above should be done in a form in a `<dialog>`-based Modal
- Clicking/submitting with ANY of the above options should NOT navigate the page
- You choose how, but each of the above options should visually let the user know they clicked the button
  - This can be as simple as a conditionally rendered message in the HTML saying they clicked the button
  - You may use instances of the Button component to open/close the modal.  These can count towards the 3 required Buttons.
- This assignment does not require a "complete" looking web page, but you can choose to include that

## Visual Requirements

- A Button component with a `visual="button"` prop will have styling to look like a button
- A Button component with a `visual="link"` prop will have styling to look like a link
- As mentioned in Functional Requirements, each Button must change the state so that the user can easily tell that clicking the button DID something

## Accessibility Requirements

- Any links/buttons and navigation must be usable by both mouse and keyboard
- Any images should have useful alt attributes (INCLUDING logos)
- You should use Semantic HTML and other best practices from class

## Adaptive/Responsive Requirements

- No special requirements

## Restrictions

- Do not use table, CSS table-cell, floats, or other related concepts for layout of the page structure (floats for text around images is fine)
- Do not use outside JS or CSS libraries outside of what is installed by create-react-app
  - Exception: CSS from css.gg can be copied into your CSS, but you must add a comment indicating where the CSS came from and under what license.  Make sure any copied/adapted CSS is distinct from CSS that you fully create.
- Follow the methods and best practices used in class or described in this README

