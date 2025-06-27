import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ name: "", github: "", description: "" });

  const addProject = () => {
    if (!form.name || !form.github) return;
    setProjects([...projects, form]);
    setForm({ name: "", github: "", description: "" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-purple-400">
        👑 Cloud Empire v1 – by The Real One 😈
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto bg-gray-800 p-6 rounded-2xl shadow-xl mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">Add New Project</h2>
        <input
          placeholder="Project Name"
          className="mb-2 w-full p-2 rounded text-black"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="GitHub URL"
          className="mb-2 w-full p-2 rounded text-black"
          value={form.github}
          onChange={(e) => setForm({ ...form, github: e.target.value })}
        />
        <textarea
          placeholder="Short Description"
          className="mb-2 w-full p-2 rounded text-black"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button
          className="w-full bg-purple-600 hover:bg-purple-700 p-2 rounded mt-2"
          onClick={addProject}
        >
          Deploy Now 🚀
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded shadow">
            <h3 className="text-xl font-bold text-purple-300">{project.name}</h3>
            <p className="text-sm text-gray-300 mb-2">{project.description}</p>
            <a
              href={project.github}
              className="text-blue-400 underline"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

