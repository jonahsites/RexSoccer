import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Loader2, Mail, Lock } from 'lucide-react';
import { useFirebase } from '../../contexts/FirebaseContext';
import { cn } from '../../lib/utils';
import { Footer } from './Footer';

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
    <div className={cn("min-h-screen bg-black flex flex-col", backgroundColor)}>
      {/* Content Area with more aggressive padding to create "black around" effect */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 overflow-hidden">
        <div className="relative w-full max-w-[1400px] aspect-[1.4] md:aspect-[1.8] bg-zinc-900 rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_200px_rgba(0,0,0,1)] flex items-center justify-center">
          {/* Contained Background Image */}
          <div className="absolute inset-4 rounded-[3.2rem] overflow-hidden z-0">
            <img 
              src="https://lh3.googleusercontent.com/d/1An213JU1Vq5Hatk8Rlg7xu9E9Vqb7KJY" 
              alt="Soccer Training" 
              className="w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Back Button */}
          <div className="absolute top-12 left-12 z-50">
            <button 
              onClick={onBack}
              className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group px-6 py-3 bg-black/60 backdrop-blur-2xl rounded-full border border-white/10"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em]">Back</span>
            </button>
          </div>

          {/* Centered Auth Form Box - Expanded to new boundaries */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-[420px] mx-6 p-10 md:p-12 bg-black/70 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] shadow-2xl"
          >
            <div className="w-full">
              <div className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-black text-white leading-none tracking-tighter uppercase mb-5">
                  Welcome.
                </h1>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-[1px] w-8 bg-ice-blue/30" />
                  <p className="text-white/30 text-[11px] md:text-[12px] font-black tracking-[0.6em] uppercase">
                     REX Soccer Training 
                  </p>
                  <div className="h-[1px] w-8 bg-ice-blue/30" />
                </div>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-[11px] font-black uppercase tracking-widest text-center">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div className="relative group border-b border-white/10 focus-within:border-white/40 transition-colors py-3">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ENTER YOUR E-MAIL"
                      className="w-full bg-transparent text-white placeholder:text-white/20 focus:outline-none font-black text-[13px] md:text-[14px] tracking-[0.1em] uppercase cursor-pointer"
                      required
                    />
                  </div>
                  <div className="relative group border-b border-white/10 focus-within:border-white/40 transition-colors py-3">
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="ENTER YOUR PASSWORD"
                      className="w-full bg-transparent text-white placeholder:text-white/20 focus:outline-none font-black text-[13px] md:text-[14px] tracking-[0.1em] uppercase cursor-pointer"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between px-1">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="hidden"
                    />
                    <div className={cn(
                      "w-4 h-4 border border-white/10 rounded-md transition-all flex items-center justify-center bg-white/[0.03]",
                      rememberMe ? "bg-white border-white" : "group-hover:border-white/30"
                    )}>
                      {rememberMe && (
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-black rotate-45" 
                        />
                      )}
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.1em] text-white/30 group-hover:text-ice-blue transition-colors">Remember Me</span>
                  </label>
                  <button type="button" className="text-[9px] font-black uppercase tracking-[0.1em] text-white/30 hover:text-ice-blue transition-colors cursor-pointer">
                    Forgot Password?
                  </button>
                </div>

                <div className="space-y-4 pt-1">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black py-5 rounded-xl font-black uppercase tracking-[0.2em] hover:bg-ice-blue transition-all duration-500 flex items-center justify-center gap-3 group text-[12px] shadow-xl hover:shadow-ice-blue/20"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                      <>
                        LOG IN
                        <div className="w-2 h-2 bg-black rotate-45 group-hover:translate-x-2 transition-transform" />
                      </>
                    )}
                  </button>
                  
                  <button 
                    type="button"
                    onClick={login}
                    className="w-full bg-zinc-900/50 text-white/40 py-5 rounded-xl font-black uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all duration-500 flex items-center justify-center gap-4 border border-white/5 text-[11px]"
                  >
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
                    Sign in with Google
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
