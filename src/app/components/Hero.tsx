import { ImageWithFallback } from './figma/ImageWithFallback';
import { Upload, Edit2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Hero() {
  const [profileImage, setProfileImage] = useState('https://images.unsplash.com/photo-1610387694365-19fafcc86d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0JTIwd29tYW58ZW58MXx8fHwxNzc2MjQ4NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral');
  const [name, setName] = useState('Reishell Garilao');
  const [title, setTitle] = useState('Creative Professional');
  const [bio, setBio] = useState('A dedicated creative professional with expertise in design, development, and strategic thinking. Committed to delivering excellence in every project.');
  const [isEditing, setIsEditing] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedImage = localStorage.getItem('portfolio-profile-image');
    const savedName = localStorage.getItem('portfolio-name');
    const savedTitle = localStorage.getItem('portfolio-title');
    const savedBio = localStorage.getItem('portfolio-bio');
    
    if (savedImage) setProfileImage(savedImage);
    if (savedName) setName(savedName);
    if (savedTitle) setTitle(savedTitle);
    if (savedBio) setBio(savedBio);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setProfileImage(result);
        localStorage.setItem('portfolio-profile-image', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveProfile = () => {
    localStorage.setItem('portfolio-name', name);
    localStorage.setItem('portfolio-title', title);
    localStorage.setItem('portfolio-bio', bio);
    setIsEditing(false);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {!isEditing ? (
          <>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                  {name}
                </h1>
                <p className="text-xl text-primary mb-4">{title}</p>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                  {bio}
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a 
                    href="#contact" 
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Get In Touch
                  </a>
                  <a 
                    href="#works" 
                    className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    View Works
                  </a>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors inline-flex items-center gap-2"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit Profile
                  </button>
                </div>
              </div>
              <div className="flex-shrink-0 relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="relative">
                  <ImageWithFallback 
                    src={profileImage}
                    alt="Professional portrait"
                    className="relative w-72 h-72 object-cover rounded-full border-8 border-white shadow-2xl"
                  />
                  <label className="absolute bottom-4 right-4 p-3 bg-primary text-primary-foreground rounded-full cursor-pointer hover:bg-primary/90 transition-all opacity-0 group-hover:opacity-100 shadow-lg">
                    <Upload className="w-5 h-5" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white p-8 rounded-xl border-2 border-primary">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Edit Profile</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2 text-foreground">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-foreground">Professional Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g., Creative Professional"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-foreground">Bio</label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={4}
                  placeholder="Tell us about yourself..."
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={saveProfile}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
