import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Expand, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Builder } from '@builder.io/react';

export const PhotosPage = ({
  photos = [
    { src: "https://lh3.googleusercontent.com/d/10h8ED8NpfOmR3EkAaFE6UStT1UXlwSJV" },
    { src: "https://lh3.googleusercontent.com/d/10xDBaRYG6gIn7mJFgIzyOLcDpNEju-4s" },
    { src: "https://lh3.googleusercontent.com/d/12-HMS2W4xDQ3o-w_00YfJ6SEJFiSiFS0" },
    { src: "https://lh3.googleusercontent.com/d/14ySCDlB6spbjp9_gPPMU3WF5GTVxoRh8" },
    { src: "https://lh3.googleusercontent.com/d/15dCTNWht0Wemw468HjB3RnwJo5eA2YCm" },
    { src: "https://lh3.googleusercontent.com/d/17A1nEF2k_fhksM_bInS3cLmwPlKfDB47" },
    { src: "https://lh3.googleusercontent.com/d/17gFjtR2tZ8gnHa8z_prlyrZY7zQWwRdH" },
    { src: "https://lh3.googleusercontent.com/d/18qsDyqxIRIxxLO-xZ2VYnPwlPj5R9cGF" },
    { src: "https://lh3.googleusercontent.com/d/19ycP7SoTozfTPXmidow_s6rBZf2fg-H7" },
    { src: "https://lh3.googleusercontent.com/d/1BovbBmA4k3XhHB8gu7HJyhqo8GnGrox6" },
    { src: "https://lh3.googleusercontent.com/d/1CRzZMW7F_n3qJwgMfKOBA-b0mjl8Hb5v" },
    { src: "https://lh3.googleusercontent.com/d/1Eudirr4nKJKo1K0bFs7ymI1MRcjUMSiS" },
    { src: "https://lh3.googleusercontent.com/d/1FhtGKm6-wp9a8OETLmUnjnQBsTjMzA-Q" },
    { src: "https://lh3.googleusercontent.com/d/1Gbgxdx3VrlC7IYj_Nqj9Ffu0nm7s0igz" },
    { src: "https://lh3.googleusercontent.com/d/1Gs6dDhqIV3fwjfdtl7fzTkkUXNOdaxEP" },
    { src: "https://lh3.googleusercontent.com/d/1H9UVO-Fiwhd4d1NdPTofqcJAhNTeFwDg" },
    { src: "https://lh3.googleusercontent.com/d/1Jo9KhU662Uep37wjW4cFCHIqf_ZWhOdD" },
    { src: "https://lh3.googleusercontent.com/d/1NSSChO85pk0lUkOkdH63qyv8G-8n-BZh" },
    { src: "https://lh3.googleusercontent.com/d/1Q-Wdxqnsb0L1ZVPvi7GXYIbdZQCf--GU" },
    { src: "https://lh3.googleusercontent.com/d/1SIyPwK5AIrY_weU7mHy2frxEpyU3DAF2" },
    { src: "https://lh3.googleusercontent.com/d/1TEWf1aLi7QrKc2sbpx60u-PfnSN6P6yh" },
    { src: "https://lh3.googleusercontent.com/d/1TlphCyPLeCocDPbE5JENdgLAJAHGMeSz" },
    { src: "https://lh3.googleusercontent.com/d/1U8WdnoOU1pG63gNKQ7NsJagVovbccbQ0" },
    { src: "https://lh3.googleusercontent.com/d/1VfkoyNW1v_N6rqbHIHdvzcOShRvx0oVU" },
    { src: "https://lh3.googleusercontent.com/d/1XQ5JN0_OUKTz6-Haanpv_x2It8OZkZ6k" },
    { src: "https://lh3.googleusercontent.com/d/1Xz4Ea8zbJzvYxJzyL29fvT1qs2xaurWL" },
    { src: "https://lh3.googleusercontent.com/d/1ZOXz0pCXmgMn2FoEbvOfAPBmSYdeQFnc" },
    { src: "https://lh3.googleusercontent.com/d/1_JP4BQ8__LohbkshWVxePcg4gaQNx0KR" },
    { src: "https://lh3.googleusercontent.com/d/1_KPsmMhosRBInbbzCpBaaCIOUVVrCJGD" },
    { src: "https://lh3.googleusercontent.com/d/1__jqFhk32XGgdTW0XESX-lxjHzmLdJoY" },
    { src: "https://lh3.googleusercontent.com/d/1_orANRBtQ3NfIo1pz7XDM6MO_RpVLJmX" },
    { src: "https://lh3.googleusercontent.com/d/1cqm6RZUGnbq9tjyeSVaaYJmP03f_-y5L" },
    { src: "https://lh3.googleusercontent.com/d/1cuCTuCk-yzWV4_2EgNoLJwPThO0OaJnb" },
    { src: "https://lh3.googleusercontent.com/d/1czzMY5R0Vkasi89xa0DL82pT0HtayXfW" },
    { src: "https://lh3.googleusercontent.com/d/1f9MpIMsIJ78KYw3Dip6LpT7cKheR_M9Q" },
    { src: "https://lh3.googleusercontent.com/d/1fU6GYvA6yt3AUk_QoDtOc1O35jD4wUde" },
    { src: "https://lh3.googleusercontent.com/d/1fwb7_Nt2bdLfJk9KF5fC-LudUNgnC5sV" },
    { src: "https://lh3.googleusercontent.com/d/1g4QJ9y9DjiecXXFDeSqtA9Y4aM-QtpL5" },
    { src: "https://lh3.googleusercontent.com/d/1gzQX9jBQTAhaBYWETX9h_j8th411HmCH" },
    { src: "https://lh3.googleusercontent.com/d/1jGGD6ub8HyV-ggXBnZAqT0o1OG3A3FI0" },
    { src: "https://lh3.googleusercontent.com/d/1l5KH_i9dQUog8RpfFvLyISCopXA0NmVl" },
    { src: "https://lh3.googleusercontent.com/d/1lM1EhhmLveSinyCGu4f2DEW_gVf3FY65" },
    { src: "https://lh3.googleusercontent.com/d/1mZGGBGIAeRh-8xqWLYquchQ5MUQi44XG" },
    { src: "https://lh3.googleusercontent.com/d/1pMBetZtzYipD8MPSKtX0wul4fiGHrru5" },
    { src: "https://lh3.googleusercontent.com/d/1pVn8-00OTetb5AungyUgHs_XvBG9takQ" },
    { src: "https://lh3.googleusercontent.com/d/1q3CdXENp7VdQUInQIYj6wizuFokw-5LM" },
    { src: "https://lh3.googleusercontent.com/d/1rToMtbq6zUqA-3ojUoM974XEX5Cro1Er" },
    { src: "https://lh3.googleusercontent.com/d/1riHjYUBY5QHiJDJFHjS3o2jq2713qaI0" },
    { src: "https://lh3.googleusercontent.com/d/1tSTxsaiXvkcP1fimAiHS22i_UtjLnAZZ" },
    { src: "https://lh3.googleusercontent.com/d/1tTyY4epvBnCpWxH_Cu8cIDsUaZA61Vei" },
    { src: "https://lh3.googleusercontent.com/d/14XY6i4m_3xmJfXhNCu5OUpdThJ09JovO" },
    { src: "https://lh3.googleusercontent.com/d/1pARlQvj_QJPGSwd7rqCvqxlMA2GpmVki" },
    { src: "https://lh3.googleusercontent.com/d/1S0ZKybOh7P6Uzy2fCW_qm31MlXdxcxnj" },
    { src: "https://lh3.googleusercontent.com/d/1QOS0ppf0Q4ilLz8KnOrdEpf0lhe6N166" },
    { src: "https://lh3.googleusercontent.com/d/17TVpULAOzmZLkEa3MCiKW4Mk1g7Wrur_" },
  ],
  backgroundColor = "bg-black",
}: {
  onBack?: () => void;
  title?: string;
  photos?: { src: string }[];
  backgroundColor?: string;
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen ${backgroundColor} flex flex-col`}
    >
      <div className="max-w-[1600px] mx-auto w-full pt-16 pb-20 px-1 md:px-2">
        <div className="mb-12 pl-4 md:pl-6">
          <h1 className="text-5xl font-bold text-white tracking-tighter">Photos</h1>
          <p className="text-white/40 text-sm mt-2 font-medium">Capture the moment, one frame at a time.</p>
        </div>

        {/* Gallery Container - Masonry Layout (Edge to Edge) */}
        <div className="w-full">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-1 md:gap-2">
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-sm md:rounded-md mb-1 md:mb-2 break-inside-avoid shadow-sm"
                onClick={() => setSelectedPhoto(i)}
              >
                <img 
                  src={photo.src} 
                  alt={`Soccer ${i}`} 
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[1px] flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center scale-90 group-hover:scale-100 transition-transform">
                    <Expand className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-20"
            onClick={() => setSelectedPhoto(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 p-2 text-white/40 hover:text-white transition-colors bg-white/5 rounded-full"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <div className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2">
              <button 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhoto((prev) => (prev! - 1 + photos.length) % photos.length);
                }}
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>

            <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2">
              <button 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhoto((prev) => (prev! + 1) % photos.length);
                }}
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={photos[selectedPhoto].src} 
                alt="Enlarged" 
                className="max-w-full max-h-full object-contain shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 py-8 flex justify-center">
                <span className="text-white/40 font-black tracking-widest text-[10px] uppercase bg-black/20 px-4 py-2 rounded-full backdrop-blur-md">
                  {selectedPhoto + 1} / {photos.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

Builder.registerComponent(PhotosPage, {
  name: 'PhotosPage',
  inputs: [
    { name: 'backgroundColor', type: 'string', defaultValue: 'bg-black' },
    { 
      name: 'photos', 
      type: 'list', 
      subFields: [
        { name: 'src', type: 'file' },
      ], 
      defaultValue: [
        { src: "https://lh3.googleusercontent.com/d/10h8ED8NpfOmR3EkAaFE6UStT1UXlwSJV" },
        { src: "https://lh3.googleusercontent.com/d/10xDBaRYG6gIn7mJFgIzyOLcDpNEju-4s" },
        { src: "https://lh3.googleusercontent.com/d/12-HMS2W4xDQ3o-w_00YfJ6SEJFiSiFS0" },
        { src: "https://lh3.googleusercontent.com/d/14ySCDlB6spbjp9_gPPMU3WF5GTVxoRh8" },
        { src: "https://lh3.googleusercontent.com/d/15dCTNWht0Wemw468HjB3RnwJo5eA2YCm" },
        { src: "https://lh3.googleusercontent.com/d/17A1nEF2k_fhksM_bInS3cLmwPlKfDB47" },
        { src: "https://lh3.googleusercontent.com/d/17gFjtR2tZ8gnHa8z_prlyrZY7zQWwRdH" },
        { src: "https://lh3.googleusercontent.com/d/18qsDyqxIRIxxLO-xZ2VYnPwlPj5R9cGF" },
        { src: "https://lh3.googleusercontent.com/d/19ycP7SoTozfTPXmidow_s6rBZf2fg-H7" },
        { src: "https://lh3.googleusercontent.com/d/1BovbBmA4k3XhHB8gu7HJyhqo8GnGrox6" },
        { src: "https://lh3.googleusercontent.com/d/1CRzZMW7F_n3qJwgMfKOBA-b0mjl8Hb5v" },
        { src: "https://lh3.googleusercontent.com/d/1Eudirr4nKJKo1K0bFs7ymI1MRcjUMSiS" },
        { src: "https://lh3.googleusercontent.com/d/1FhtGKm6-wp9a8OETLmUnjnQBsTjMzA-Q" },
        { src: "https://lh3.googleusercontent.com/d/1Gbgxdx3VrlC7IYj_Nqj9Ffu0nm7s0igz" },
        { src: "https://lh3.googleusercontent.com/d/1Gs6dDhqIV3fwjfdtl7fzTkkUXNOdaxEP" },
        { src: "https://lh3.googleusercontent.com/d/1H9UVO-Fiwhd4d1NdPTofqcJAhNTeFwDg" },
        { src: "https://lh3.googleusercontent.com/d/1Jo9KhU662Uep37wjW4cFCHIqf_ZWhOdD" },
        { src: "https://lh3.googleusercontent.com/d/1NSSChO85pk0lUkOkdH63qyv8G-8n-BZh" },
        { src: "https://lh3.googleusercontent.com/d/1Q-Wdxqnsb0L1ZVPvi7GXYIbdZQCf--GU" },
        { src: "https://lh3.googleusercontent.com/d/1SIyPwK5AIrY_weU7mHy2frxEpyU3DAF2" },
        { src: "https://lh3.googleusercontent.com/d/1TEWf1aLi7QrKc2sbpx60u-PfnSN6P6yh" },
        { src: "https://lh3.googleusercontent.com/d/1TlphCyPLeCocDPbE5JENdgLAJAHGMeSz" },
        { src: "https://lh3.googleusercontent.com/d/1U8WdnoOU1pG63gNKQ7NsJagVovbccbQ0" },
        { src: "https://lh3.googleusercontent.com/d/1VfkoyNW1v_N6rqbHIHdvzcOShRvx0oVU" },
        { src: "https://lh3.googleusercontent.com/d/1XQ5JN0_OUKTz6-Haanpv_x2It8OZkZ6k" },
        { src: "https://lh3.googleusercontent.com/d/1Xz4Ea8zbJzvYxJzyL29fvT1qs2xaurWL" },
        { src: "https://lh3.googleusercontent.com/d/1ZOXz0pCXmgMn2FoEbvOfAPBmSYdeQFnc" },
        { src: "https://lh3.googleusercontent.com/d/1_JP4BQ8__LohbkshWVxePcg4gaQNx0KR" },
        { src: "https://lh3.googleusercontent.com/d/1_KPsmMhosRBInbbzCpBaaCIOUVVrCJGD" },
        { src: "https://lh3.googleusercontent.com/d/1__jqFhk32XGgdTW0XESX-lxjHzmLdJoY" },
        { src: "https://lh3.googleusercontent.com/d/1_orANRBtQ3NfIo1pz7XDM6MO_RpVLJmX" },
        { src: "https://lh3.googleusercontent.com/d/1cqm6RZUGnbq9tjyeSVaaYJmP03f_-y5L" },
        { src: "https://lh3.googleusercontent.com/d/1cuCTuCk-yzWV4_2EgNoLJwPThO0OaJnb" },
        { src: "https://lh3.googleusercontent.com/d/1czzMY5R0Vkasi89xa0DL82pT0HtayXfW" },
        { src: "https://lh3.googleusercontent.com/d/1f9MpIMsIJ78KYw3Dip6LpT7cKheR_M9Q" },
        { src: "https://lh3.googleusercontent.com/d/1fU6GYvA6yt3AUk_QoDtOc1O35jD4wUde" },
        { src: "https://lh3.googleusercontent.com/d/1fwb7_Nt2bdLfJk9KF5fC-LudUNgnC5sV" },
        { src: "https://lh3.googleusercontent.com/d/1g4QJ9y9DjiecXXFDeSqtA9Y4aM-QtpL5" },
        { src: "https://lh3.googleusercontent.com/d/1gzQX9jBQTAhaBYWETX9h_j8th411HmCH" },
        { src: "https://lh3.googleusercontent.com/d/1jGGD6ub8HyV-ggXBnZAqT0o1OG3A3FI0" },
        { src: "https://lh3.googleusercontent.com/d/1l5KH_i9dQUog8RpfFvLyISCopXA0NmVl" },
        { src: "https://lh3.googleusercontent.com/d/1lM1EhhmLveSinyCGu4f2DEW_gVf3FY65" },
        { src: "https://lh3.googleusercontent.com/d/1mZGGBGIAeRh-8xqWLYquchQ5MUQi44XG" },
        { src: "https://lh3.googleusercontent.com/d/1pMBetZtzYipD8MPSKtX0wul4fiGHrru5" },
        { src: "https://lh3.googleusercontent.com/d/1pVn8-00OTetb5AungyUgHs_XvBG9takQ" },
        { src: "https://lh3.googleusercontent.com/d/1q3CdXENp7VdQUInQIYj6wizuFokw-5LM" },
        { src: "https://lh3.googleusercontent.com/d/1rToMtbq6zUqA-3ojUoM974XEX5Cro1Er" },
        { src: "https://lh3.googleusercontent.com/d/1riHjYUBY5QHiJDJFHjS3o2jq2713qaI0" },
        { src: "https://lh3.googleusercontent.com/d/1tSTxsaiXvkcP1fimAiHS22i_UtjLnAZZ" },
        { src: "https://lh3.googleusercontent.com/d/1tTyY4epvBnCpWxH_Cu8cIDsUaZA61Vei" },
        { src: "https://lh3.googleusercontent.com/d/14XY6i4m_3xmJfXhNCu5OUpdThJ09JovO" },
        { src: "https://lh3.googleusercontent.com/d/1pARlQvj_QJPGSwd7rqCvqxlMA2GpmVki" },
        { src: "https://lh3.googleusercontent.com/d/1S0ZKybOh7P6Uzy2fCW_qm31MlXdxcxnj" },
        { src: "https://lh3.googleusercontent.com/d/1QOS0ppf0Q4ilLz8KnOrdEpf0lhe6N166" },
        { src: "https://lh3.googleusercontent.com/d/17TVpULAOzmZLkEa3MCiKW4Mk1g7Wrur_" },
      ]
    },
  ],
});
