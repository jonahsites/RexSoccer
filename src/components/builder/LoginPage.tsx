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
      <div className="flex-1 flex items-center justify-center p-12 md:p-24 lg:p-40 xl:p-56 overflow-hidden">
        <div className="relative w-full max-w-4xl aspect-[1.5] bg-zinc-900 rounded-[3rem] overflow-hidden border border-white/5 shadow-[0_0_100px_rgba(0,0,0,1)] flex items-center justify-center">
          {/* Contained Background Image */}
          <div className="absolute inset-8 rounded-[2rem] overflow-hidden z-0">
            <img 
              src="https://lh3.googleusercontent.com/d/1An213JU1Vq5Hatk8Rlg7xu9E9Vqb7KJY" 
              alt="Soccer Training" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
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

          {/* Centered Auth Form Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-[300px] mx-6 p-8 bg-black/60 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] shadow-2xl"
          >
            <div className="w-full">
              <div className="mb-6 text-center">
                <h1 className="text-2xl font-black text-white leading-none tracking-tighter uppercase mb-2">
                  Welcome.
                </h1>
                <p className="text-white/20 text-[7px] font-black tracking-[0.5em] uppercase">
                  REX Hub Access
                </p>
              </div>

              {error && (
                <div className="mb-4 p-2 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-[8px] font-black uppercase tracking-widest text-center">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <div className="relative group">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3 h-3 text-white/20 group-focus-within:text-ice-blue transition-colors" />
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="E-MAIL"
                      className="w-full bg-white/[0.03] border border-white/5 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-white/10 focus:outline-none focus:border-ice-blue/20 transition-all font-black text-[8px] tracking-widest uppercase"
                      required
                    />
                  </div>
                  <div className="relative group">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3 h-3 text-white/20 group-focus-within:text-ice-blue transition-colors" />
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="PASSWORD"
                      className="w-full bg-white/[0.03] border border-white/5 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-white/10 focus:outline-none focus:border-ice-blue/20 transition-all font-black text-[8px] tracking-widest uppercase"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black py-3.5 rounded-lg font-black uppercase tracking-[0.2em] hover:bg-ice-blue transition-all duration-500 flex items-center justify-center gap-2 group text-[9px]"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        ACCESS
                        <div className="w-1 h-1 bg-black rotate-45 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <button 
                    type="button"
                    onClick={login}
                    className="w-full bg-zinc-900 text-white/50 py-3.5 rounded-lg font-black uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all duration-500 flex items-center justify-center gap-2 border border-white/5 text-[8px]"
                  >
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-3 h-3" />
                    Google Login
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
