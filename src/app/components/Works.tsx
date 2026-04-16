
import { ExternalLink, Plus, Trash2, Upload } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Work {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
}

export function Works() {
  const [works, setWorks] = useState<Work[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newWork, setNewWork] = useState({
    title: '',
    category: '',
    description: '',
    image: '',
    year: new Date().getFullYear().toString()
  });

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-works');
    if (saved) {
      setWorks(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever works change
  useEffect(() => {
    localStorage.setItem('portfolio-works', JSON.stringify(works));
  }, [works]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewWork({ ...newWork, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const addWork = () => {
    if (newWork.title && newWork.category && newWork.description && newWork.image) {
      setWorks([...works, { ...newWork, id: Date.now().toString() }]);
      setNewWork({
        title: '',
        category: '',
        description: '',
        image: '',
        year: new Date().getFullYear().toString()
      });
      setIsAdding(false);
    }
  };

  const deleteWork = (id: string) => {
    setWorks(works.filter(work => work.id !== id));
  };

  return (
    <section id="works" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing expertise and creative excellence
          </p>
        </div>

        {works.length === 0 && !isAdding && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-6">No works added yet. Start building portfolio!</p>
            <button
              onClick={() => setIsAdding(true)}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add First Work
            </button>
          </div>
        )}

        {isAdding && (
          <div className="mb-8 bg-white p-6 rounded-xl border-2 border-primary">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Add New Work</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2 text-foreground">Work Title</label>
                <input
                  type="text"
                  value={newWork.title}
                  onChange={(e) => setNewWork({ ...newWork, title: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g., Brand Identity Design"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2 text-foreground">Category</label>
                  <input
                    type="text"
                    value={newWork.category}
                    onChange={(e) => setNewWork({ ...newWork, category: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g., Design, Marketing"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-foreground">Year</label>
                  <input
                    type="text"
                    value={newWork.year}
                    onChange={(e) => setNewWork({ ...newWork, year: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g., 2024"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2 text-foreground">Description</label>
                <textarea
                  value={newWork.description}
                  onChange={(e) => setNewWork({ ...newWork, description: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={3}
                  placeholder="Describe work..."
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-foreground">Upload Image</label>
                <div className="flex items-center gap-4">
                  <label className="flex-1 px-4 py-2 border-2 border-dashed border-border rounded-lg hover:border-primary cursor-pointer transition-colors">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Upload className="w-5 h-5" />
                      <span>{newWork.image ? 'Image uploaded' : 'Click to upload image'}</span>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                  {newWork.image && (
                    <img src={newWork.image} alt="Preview" className="w-20 h-20 object-cover rounded-lg" />
                  )}
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={addWork}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Save Work
                </button>
                <button
                  onClick={() => {
                    setIsAdding(false);
                    setNewWork({
                      title: '',
                      category: '',
                      description: '',
                      image: '',
                      year: new Date().getFullYear().toString()
                    });
                  }}
                  className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {works.length > 0 && (
          <>
            <div className="mb-6 text-right">
              {!isAdding && (
                <button
                  onClick={() => setIsAdding(true)}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add New Work
                </button>
              )}
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {works.map((work) => (
                <div key={work.id} className="group bg-white rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 relative">
                  <button
                    onClick={() => deleteWork(work.id)}
                    className="absolute top-4 left-4 z-10 p-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                      {work.year}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary mb-2">{work.category}</div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{work.title}</h3>
                    <p className="text-muted-foreground mb-4">{work.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
