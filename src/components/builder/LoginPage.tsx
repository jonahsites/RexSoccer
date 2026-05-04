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
            className="relative z-10 w-full max-w-[550px] mx-6 p-12 md:p-16 bg-black/70 backdrop-blur-3xl border border-white/10 rounded-[4rem] shadow-2xl"
          >
            <div className="w-full">
              <div className="mb-12 text-center">
                <h1 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tighter uppercase mb-6">
                  Welcome.
                </h1>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-[1px] w-12 bg-ice-blue/30" />
                  <p className="text-white/30 text-[12px] md:text-[14px] font-black tracking-[0.8em] uppercase">
                    Elite REX Hub Access
                  </p>
                  <div className="h-[1px] w-12 bg-ice-blue/30" />
                </div>
              </div>

              {error && (
                <div className="mb-8 p-5 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 text-[12px] font-black uppercase tracking-widest text-center">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-5">
                  <div className="relative group">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-ice-blue transition-colors" />
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="E-MAIL"
                      className="w-full bg-white/[0.04] border border-white/15 rounded-2xl py-6 pl-16 pr-10 text-white placeholder:text-white/10 focus:outline-none focus:border-ice-blue/40 transition-all font-black text-[13px] tracking-widest uppercase shadow-inner"
                      required
                    />
                  </div>
                  <div className="relative group">
                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-ice-blue transition-colors" />
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="PASSWORD"
                      className="w-full bg-white/[0.04] border border-white/15 rounded-2xl py-6 pl-16 pr-10 text-white placeholder:text-white/10 focus:outline-none focus:border-ice-blue/40 transition-all font-black text-[13px] tracking-widest uppercase shadow-inner"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-6 pt-6">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black py-6 rounded-2xl font-black uppercase tracking-[0.3em] hover:bg-ice-blue transition-all duration-500 flex items-center justify-center gap-4 group text-[13px] shadow-xl hover:shadow-ice-blue/20"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-8 h-8 animate-spin" />
                    ) : (
                      <>
                        ACCESS SYSTEM
                        <div className="w-2.5 h-2.5 bg-black rotate-45 group-hover:translate-x-3 transition-transform" />
                      </>
                    )}
                  </button>
                  
                  <button 
                    type="button"
                    onClick={login}
                    className="w-full bg-zinc-900 text-white/40 py-6 rounded-2xl font-black uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all duration-500 flex items-center justify-center gap-5 border border-white/10 text-[12px]"
                  >
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
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
