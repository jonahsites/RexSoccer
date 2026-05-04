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
      <div className="flex-1 flex items-center justify-center p-4 md:p-8 overflow-hidden">
        <div className="relative w-full max-w-[1100px] aspect-[1.2] md:aspect-[1.6] bg-zinc-900 rounded-[3.5rem] overflow-hidden border border-white/10 shadow-[0_0_150px_rgba(0,0,0,1)] flex items-center justify-center">
          {/* Contained Background Image */}
          <div className="absolute inset-5 rounded-[2.8rem] overflow-hidden z-0">
            <img 
              src="https://lh3.googleusercontent.com/d/1An213JU1Vq5Hatk8Rlg7xu9E9Vqb7KJY" 
              alt="Soccer Training" 
              className="w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Back Button */}
          <div className="absolute top-10 left-10 z-50">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group px-4 py-2 bg-black/40 backdrop-blur-xl rounded-full border border-white/5"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em]">Back</span>
            </button>
          </div>

          {/* Centered Auth Form Box - Shrunk to fit */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-[360px] mx-6 p-8 md:p-10 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-2xl"
          >
            <div className="w-full">
              <div className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-black text-white leading-none tracking-tighter uppercase mb-4">
                  Welcome.
                </h1>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-[1px] w-6 bg-ice-blue/30" />
                  <p className="text-white/30 text-[11px] md:text-[12px] font-black tracking-[0.6em] uppercase">
                    Elite REX Hub Access
                  </p>
                  <div className="h-[1px] w-6 bg-ice-blue/30" />
                </div>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-[10px] font-black uppercase tracking-widest text-center">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative group">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-ice-blue transition-colors" />
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="E-MAIL"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-4 pl-12 pr-8 text-white placeholder:text-white/10 focus:outline-none focus:border-ice-blue/40 transition-all font-black text-[11px] tracking-widest uppercase shadow-inner"
                      required
                    />
                  </div>
                  <div className="relative group">
                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-ice-blue transition-colors" />
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="PASSWORD"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-4 pl-12 pr-8 text-white placeholder:text-white/10 focus:outline-none focus:border-ice-blue/40 transition-all font-black text-[11px] tracking-widest uppercase shadow-inner"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black py-4 rounded-xl font-black uppercase tracking-[0.2em] hover:bg-ice-blue transition-all duration-500 flex items-center justify-center gap-3 group text-[11px] shadow-xl hover:shadow-ice-blue/20"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        ACCESS SYSTEM
                        <div className="w-2 h-2 bg-black rotate-45 group-hover:translate-x-2 transition-transform" />
                      </>
                    )}
                  </button>
                  
                  <button 
                    type="button"
                    onClick={login}
                    className="w-full bg-zinc-900 text-white/40 py-4 rounded-xl font-black uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all duration-500 flex items-center justify-center gap-4 border border-white/5 text-[10px]"
                  >
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-3.5 h-3.5" />
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
