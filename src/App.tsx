import React from 'react';
import { BookLayout } from './components/layout/BookLayout';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ProjectsPage from './components/pages/ProjectsPage';
import AchievementsPage from './components/pages/AchievementsPage';
import ContactPage from './components/pages/ContactPage';

function App() {
  return React.createElement(
    BookLayout,
    null,
    React.createElement(Routes, null,
      React.createElement(Route, { path: '/', element: React.createElement(HomePage) }),
      React.createElement(Route, { path: '/projects', element: React.createElement(ProjectsPage) }),
      React.createElement(Route, { path: '/achievements', element: React.createElement(AchievementsPage) }),
      React.createElement(Route, { path: '/contact', element: React.createElement(ContactPage) })
    )
  );
}

export default App;
