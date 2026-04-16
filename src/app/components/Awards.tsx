import { Award, Trophy, Medal, Star, Plus, Trash2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface AwardType {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  icon: string;
}

const iconOptions = [
  { name: 'Trophy', value: 'trophy', component: Trophy },
  { name: 'Award', value: 'award', component: Award },
  { name: 'Medal', value: 'medal', component: Medal },
  { name: 'Star', value: 'star', component: Star }
];

export function Awards() {
  const [awards, setAwards] = useState<AwardType[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newAward, setNewAward] = useState({
    title: '',
    organization: '',
    year: new Date().getFullYear().toString(),
    description: '',
    icon: 'trophy'
  });

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-awards');
    if (saved) {
      setAwards(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever awards change
  useEffect(() => {
    localStorage.setItem('portfolio-awards', JSON.stringify(awards));
  }, [awards]);

  const addAward = () => {
    if (newAward.title && newAward.organization && newAward.description) {
      setAwards([...awards, { ...newAward, id: Date.now().toString() }]);
      setNewAward({
        title: '',
        organization: '',
        year: new Date().getFullYear().toString(),
        description: '',
        icon: 'trophy'
      });
      setIsAdding(false);
    }
  };

  const deleteAward = (id: string) => {
    setAwards(awards.filter(award => award.id !== id));
  };

  const getIconComponent = (iconName: string) => {
    const icon = iconOptions.find(opt => opt.value === iconName);
    return icon ? icon.component : Trophy;
  };

  return (
    <section id="awards" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Awards & Recognition</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional achievements and industry recognition
          </p>
        </div>

        {awards.length === 0 && !isAdding && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-6">No awards added yet. Showcase achievements!</p>
            <button
              onClick={() => setIsAdding(true)}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add First Award
            </button>
          </div>
        )}

        {isAdding && (
          <div className="mb-8 bg-secondary/30 p-6 rounded-xl border-2 border-primary">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Add New Award</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2 text-foreground">Award Title</label>
                <input
                  type="text"
                  value={newAward.title}
                  onChange={(e) => setNewAward({ ...newAward, title: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  placeholder="e.g., Excellence in Design Award"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2 text-foreground">Organization</label>
                  <input
                    type="text"
                    value={newAward.organization}
                    onChange={(e) => setNewAward({ ...newAward, organization: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    placeholder="e.g., International Design Association"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-foreground">Year</label>
                  <input
                    type="text"
                    value={newAward.year}
                    onChange={(e) => setNewAward({ ...newAward, year: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    placeholder="e.g., 2024"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2 text-foreground">Description</label>
                <textarea
                  value={newAward.description}
                  onChange={(e) => setNewAward({ ...newAward, description: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  rows={3}
                  placeholder="Describe achievement..."
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-foreground">Icon</label>
                <div className="grid grid-cols-4 gap-3">
                  {iconOptions.map((option) => {
                    const IconComp = option.component;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setNewAward({ ...newAward, icon: option.value })}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          newAward.icon === option.value
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <IconComp className="w-6 h-6 mx-auto text-primary" />
                        <div className="text-xs mt-2 text-foreground">{option.name}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={addAward}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Save Award
                </button>
                <button
                  onClick={() => {
                    setIsAdding(false);
                    setNewAward({
                      title: '',
                      organization: '',
                      year: new Date().getFullYear().toString(),
                      description: '',
                      icon: 'trophy'
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

        {awards.length > 0 && (
          <>
            <div className="mb-6 text-right">
              {!isAdding && (
                <button
                  onClick={() => setIsAdding(true)}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add New Award
                </button>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award) => {
                const IconComponent = getIconComponent(award.icon);
                return (
                  <div key={award.id} className="flex gap-4 p-6 bg-secondary/30 rounded-xl border border-border hover:border-primary/30 transition-colors group relative">
                    <button
                      onClick={() => deleteAward(award.id)}
                      className="absolute top-3 right-3 p-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground pr-8">{award.title}</h3>
                        <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full ml-2 flex-shrink-0">
                          {award.year}
                        </span>
                      </div>
                      <p className="text-primary mb-2">{award.organization}</p>
                      <p className="text-sm text-muted-foreground">{award.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
