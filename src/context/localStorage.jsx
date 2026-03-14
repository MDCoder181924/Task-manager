const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "m@123.com",
    password: "123",
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Website",
        taskDescription: "Revamp homepage UI",
        taskDate: "2024-10-12",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve login authentication issue",
        taskDate: "2024-10-15",
        category: "Development"
      }
    ]
  },

  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard UI",
        taskDescription: "Design dashboard layout",
        taskDate: "2024-10-14",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix CSS",
        taskDescription: "Fix responsive layout issue",
        taskDate: "2024-10-17",
        category: "Development"
      }
    ]
  },

  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    taskCounts: { active: 3, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build API",
        taskDescription: "Develop REST API",
        taskDate: "2024-10-18",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Create MongoDB schema",
        taskDate: "2024-10-19",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Bug Fix",
        taskDescription: "Fix API error",
        taskDate: "2024-10-20",
        category: "Bug"
      }
    ]
  },

  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    taskCounts: { active: 3, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Testing Login",
        taskDescription: "Test login module",
        taskDate: "2024-10-16",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Navbar",
        taskDescription: "Improve navigation UI",
        taskDate: "2024-10-18",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Error",
        taskDescription: "Resolve JS error",
        taskDate: "2024-10-19",
        category: "Development"
      }
    ]
  },

  {
    id: 5,
    firstName: "Rohan",
    email: "employee5@example.com",
    password: "123",
    taskCounts: { active: 4, newTask: 1, completed: 2, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Improve SEO ranking",
        taskDate: "2024-10-21",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Add Meta Tags",
        taskDescription: "Improve SEO tags",
        taskDate: "2024-10-22",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Footer",
        taskDescription: "Design new footer",
        taskDate: "2024-10-23",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Layout",
        taskDescription: "Fix footer layout bug",
        taskDate: "2024-10-24",
        category: "Bug"
      }
    ]
  },

  {
    id: 6,
    firstName: "Sneha",
    email: "employee6@example.com",
    password: "123",
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "React Setup",
        taskDescription: "Initialize React project",
        taskDate: "2024-10-20",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Add Routing",
        taskDescription: "Install react-router",
        taskDate: "2024-10-22",
        category: "Development"
      }
    ]
  },

  {
    id: 7,
    firstName: "Karan",
    email: "employee7@example.com",
    password: "123",
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Sidebar Design",
        taskDescription: "Create sidebar navigation",
        taskDate: "2024-10-23",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix CSS",
        taskDescription: "Resolve sidebar styling issue",
        taskDate: "2024-10-24",
        category: "Development"
      }
    ]
  },

  {
    id: 8,
    firstName: "Anjali",
    email: "employee8@example.com",
    password: "123",
    taskCounts: { active: 3, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Deploy Project",
        taskDescription: "Deploy project to server",
        taskDate: "2024-10-25",
        category: "Deployment"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Server Setup",
        taskDescription: "Configure Node server",
        taskDate: "2024-10-26",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Deploy Error",
        taskDescription: "Resolve deployment issue",
        taskDate: "2024-10-27",
        category: "Bug"
      }
    ]
  },

  {
    id: 9,
    firstName: "Vikram",
    email: "employee9@example.com",
    password: "123",
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Add Animations",
        taskDescription: "Add UI animations",
        taskDate: "2024-10-26",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Performance Test",
        taskDescription: "Check performance",
        taskDate: "2024-10-27",
        category: "Testing"
      }
    ]
  },

  {
    id: 10,
    firstName: "Pooja",
    email: "employee10@example.com",
    password: "123",
    taskCounts: { active: 3, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Prepare project docs",
        taskDate: "2024-10-27",
        category: "Documentation"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Docs",
        taskDescription: "Update API docs",
        taskDate: "2024-10-28",
        category: "Documentation"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Review Code",
        taskDescription: "Review teammate code",
        taskDate: "2024-10-29",
        category: "Development"
      }
    ]
  }
]
const admin = {
  id: 1,
  email: "admin@123.com",
  password: "123"
}

export const setLocalStorage = () => {
  const storedEmployees = localStorage.getItem("employees");
  const storedAdmin = localStorage.getItem("admin");

  if (!storedEmployees) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }

  if (!storedAdmin) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
}
