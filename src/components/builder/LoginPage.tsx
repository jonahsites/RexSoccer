import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Loader2, Mail, Lock } from 'lucide-react';
import { useFirebase } from '../../contexts/FirebaseContext';
import { cn } from '../../lib/utils';

export const LoginPage = ({ onBack, backgroundColor = "bg-black" }: { onBack: () => void, backgroundColor?: string }) => {
  const { login, loginWithEmail } = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      await loginWithEmail(email, password);
      onBack();
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to login. Please check your credentials.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn("min-h-screen relative flex flex-col md:flex-row overflow-hidden", backgroundColor)}>
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/d/1An213JU1Vq5Hatk8Rlg7xu9E9Vqb7KJY" 
          alt="Soccer Training" 
          className="w-full h-full object-cover grayscale-[0.1] contrast-[1.1]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Mobile Back Button */}
      <button 
        onClick={onBack}
        className="md:hidden absolute top-6 left-6 z-50 p-2 bg-white/10 backdrop-blur-md rounded-full text-white"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      {/* Left Column: Navigation Spacer */}
      <div className="hidden md:block md:w-[50%] relative z-10">
        <div className="absolute top-12 left-12">
          <button 
            onClick={onBack}
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group px-4 py-2 bg-black/20 backdrop-blur-md rounded-full border border-white/10"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Back to Hub</span>
          </button>
        </div>
      </div>

      {/* Right Column: Auth Form with Glassmorphism */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="flex-1 flex flex-col justify-center px-8 md:px-20 py-20 relative z-10 bg-black/50 backdrop-blur-md border-l border-white/10"
      >
        <div className="max-w-md w-full mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-4">
              Welcome <br /> <span className="text-ice-blue">Back.</span>
            </h1>
            <p className="text-white/40 font-medium tracking-tight">
              CONTINUE YOUR JOURNEY TO ELITE PERFORMANCE.
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs font-bold tracking-tight">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 block ml-1">
                  E-mail
                </label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-ice-blue transition-colors" />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your e-mail"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/10 focus:outline-none focus:border-ice-blue/50 transition-all font-medium"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 block">
                    Password
                  </label>
                  <button type="button" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 hover:text-ice-blue transition-colors">
                    Forgot?
                  </button>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-ice-blue transition-colors" />
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/10 focus:outline-none focus:border-ice-blue/50 transition-all font-medium"
                    required
                  />
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-3 px-1">
                <div 
                  onClick={() => setRememberMe(!rememberMe)}
                  className={cn(
                    "w-5 h-5 rounded border transition-all cursor-pointer flex items-center justify-center",
                    rememberMe ? "bg-ice-blue border-ice-blue" : "border-white/10 bg-white/5"
                  )}
                >
                  {rememberMe && <div className="w-2 h-2 bg-black rounded-sm" />}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40 select-none">Remember me</span>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black py-4 rounded-xl font-black uppercase tracking-widest hover:bg-ice-blue transition-all duration-500 flex items-center justify-center gap-2 group shadow-2xl shadow-white/5"
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  LOGIN
                  <div className="w-1.5 h-1.5 bg-black rotate-45 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <div className="pt-8 border-t border-white/5">
               <button 
                type="button"
                onClick={login}
                className="w-full bg-white/5 text-white/60 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white/10 transition-all duration-500 flex items-center justify-center gap-3"
              >
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 grayscale opacity-60" />
                Login with Google
              </button>
            </div>

            <p className="text-center text-[10px] font-black uppercase tracking-widest text-white/20">
              Don't have an account? <button type="button" className="text-white/40 hover:text-ice-blue transition-colors">Join the HUB</button>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
