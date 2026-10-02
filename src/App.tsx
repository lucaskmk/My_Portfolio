import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import { LangProvider } from './useLang';

export default function App() {
  return (
    <LangProvider>
      {/* Visitors who turned on "reduce motion" in their system get fades instead of moving elements */}
      <MotionConfig reducedMotion="user">
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certificates" element={<Certificates />} />
              {/* Unknown or old links (like the removed About page) go to the Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </Router>
      </MotionConfig>
    </LangProvider>
  );
}
