# Exercise: Tab Decomposition

## Learning Goals

Upon completing this exercise, you will be able to:

- Identify components that can be extracted from a monolithic component
- Apply the Component Composition Pattern in React
- Create reusable and flexible components
- Manage component state effectively

## Introduction

Ever looked at a larger React component ant thought, “This could be simpler”?

Today, you’re stetting into the shoed of a React architect to transform a monolithic tab component into a collection of reusable, well-organized pieces! 

We’ve provided you with a monolithic implementation of a tab system used for login and registration forms. Your mission is to decompose this component into smaller, reusable pieces while maintaining its functionality. The end result will be a flexible tab system that can be used not just for authentication forms, but for any content that needs to be organized into tabs.

We’ve already set up the CSS modules for you - your task is to break down the component structure while leveraging the styles.

Ready to turn this monolith into a masterpiece?

## Getting Started

1. Fork this Repository
2. Clone the Repository to your computer
3. Open the Repository in VS Code
4. Install dependencies with `npm install`
5. Start the development server with `npm run dev`

## Instructions

Before jumping into coding, analyze the monolithic component and identify potential component that could be extracted.

We would like you to come up with something like this in the end:
```jsx
  <Tab.Root defaultValue="login">
    <Tab.List>
      <Tab.Trigger id="login">Login</Tab.Trigger>
      <Tab.Trigger id="register">Register</Tab.Trigger>
    </Tab.List>
    <Tab.Content id="login">
      <LoginForm />
    </Tab.Content>
    <Tab.Content id="register">
      <RegisterForm />
    </Tab.Content>
  </Tab.Root>
```

**Note:** Accessibility is optional, and you don’t have to implement it to meet the core requirements of this exercise. You can focus on the component composition and state management aspects first.

Before you begin with the tasks, create a new file called `Tab.jsx` inside the `components` folder. You should only work in this file if you work on the tasks unless it’s stated differently.

### Task 1: Create the Context

Start by creating a context that will manage the state of your tabs. 

This context should handle which tab is currently active and provide methods to switch between tabs.

The context should maintain:

- The currently selected tab value
- A function to change the selected tab
- Any other shared state needed by child components

### Task 2: Create Base Components

Create the following base components that will be composed together to create the complete tab system:

- `Tab.List` - Container for tab triggers
- `Tab.Trigger` - Individual clickable tab headers
- `Tab.Content` - Container for tab panel content

Each component should be focused on a single responsibility and use the context created in Task 1 to communicate with other components.

### Task 3: Create the Tab Root

Create a root component that will serve as the main container for your tab system. This component should:

- Accept a default selected tab value as a prop
- Provide the context to all child components
- Handle the overall state management of the tab system

The `Tab.Root` component will be responsible for orchestrating the communication between all child components through the context you created in Task 1.

### Task 4: Assemble a `SimpleTab` Component

Create a simple example component that demonstrates the usage of your tab system. This component should:

- Use all the components you've created (Root, List, Trigger, Content)
- Implement a basic two-tab interface with sample content
- Serve as a proof-of-concept for your component architecture

This will help you verify that all components work together correctly before implementing the more complex authentication forms. **Do not focus on styling**, it should just serve as a proof of concept for the basic tab functionality. The goal is to ensure the component structure and state management work as expected before adding more complex features.

### Task 5: Form Components

Now that you have a working tab system, create the login and registration form components that will be used within your tabs. 

These components should:

- Include appropriate form fields (username/email, password, etc.)
- Implement basic form validation
- Handle form submission (you can just console.log the form data)

Store these components in separate files in your components directory and import them for use in your tab system.

### Task 6: Final Assembly

Put all the pieces together to create the final authentication tab interface. Your task is to:

- Combine your tab system components with the login and registration forms
- Ensure smooth transitions between tabs and proper form functionality
- Test the complete system to verify all components work together as intended

## Submission

When you’ve completed the exercise:

1. Commit your changes:
    
```bash
    git add .
    git commit -m "Completed Tab Decomposition exercise"
    git push origin main
```
    
2. Create a Pull Request and submit the URL


## Bonus Challenges

If you finish earlier, or you want to push your skills even further, here are some bonus challenges to explore:

### Task 7 (optional): Keyboard Navigation

Implement keyboard navigation to move between tabs:

- Use left/right arrows to move between tabs
- Use Enter to select a tab
- Use Tab to navigate through form inputs

### Task 8 (optional): Create Another Example

Create a completely different use case for your tab system to prove its reusability.

For example:

- Product details Tabs (Description/Specification/Reviews)
- User Profile Tabs (Profile/Settings/Activity)
- Dashboard Tabs (Overview/Analytics/Reports)

## Questions and Answers

<details>
<summary>How to setup the Context API?</summary>
To set up the Context API for the tab system, you'll need to create a new context using React.createContext(), define a provider component that wraps your tab components, and include the necessary state and methods. Here's a basic example:
    
```jsx
  const TabContext = React.createContext()

  function TabProvider({ children, defaultValue }) {
    const [activeTab, setActiveTab] = useState(defaultValue)
    
    return (
      <TabContext.Provider value={{ activeTab, setActiveTab }}>
        {children}
      </TabContext.Provider>
    )
  }
```
    
You can then use this context in your tab components using the useContext hook to access the shared state and methods.
</details>

<details>
<summary>How can I export `Tab.Root`, `Tab.Trigger`, etc.?</summary>
    
To export the Tab components as a namespace, you can create an object that contains all the components and export it. Here's an example:
    
```jsx
  function Tab({ children, defaultValue }) { /* ... */ }
  function TabTrigger({ children, id }) { /* ... */ }
  function TabContent({ children, id }) { /* ... */ }
  function TabList({ children }) { /* ... */ }

  export const Tab = {
    Root: Tab,
    Trigger: TabTrigger,
    Content: TabContent,
    List: TabList
  }
```
    
This approach allows you to use the dot notation syntax shown in the example while keeping all related components organized under a single namespace.
</details>