import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const artwork = location.state?.artwork;

  const [paymentStatus, setPaymentStatus] = useState('idle'); // idle, processing, success
  const [cardData, setCardData] = useState({ name: '', number: '', exp: '', cvc: '' });

  if (!artwork) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-dark text-white">
        <div className="text-center bg-slate-900 border border-slate-700/50 p-12 rounded-[2rem] shadow-2xl">
          <span className="material-symbols-outlined text-6xl text-slate-500 mb-6">shopping_cart</span>
          <h2 className="text-2xl font-black mb-4 uppercase tracking-[0.2em] text-white">Cart is Empty</h2>
          <p className="text-slate-400 mb-8 max-w-sm">You haven't selected any premium artwork to purchase. Please go back to the gallery and select one.</p>
          <Link to="/gallery" className="bg-primary hover:bg-white text-slate-900 px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all">
            Return to Gallery
          </Link>
        </div>
      </div>
    );
  }

  const handlePayment = (e) => {
    e.preventDefault();
    setPaymentStatus('processing');
    
    // Simulate a beautifully animated payment gateway delay
    setTimeout(() => {
      setPaymentStatus('success');
      
      // Trigger download automatically after payment success
      setTimeout(async () => {
        try {
          const response = await fetch(artwork.image);
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          a.download = `${artwork.title.replace(/\s+/g, '_').toLowerCase()}_premium_hires.jpg`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        } catch (error) {
          console.error("Error downloading image: ", error);
          window.open(artwork.image, '_blank');
        }
      }, 1500);

    }, 2500);
  };

  const handleInputChange = (e) => {
    let value = e.target.value;
    
    // Auto-format card number with spaces
    if (e.target.name === 'number') {
      value = value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
    }
    // Auto-format expiry date with slash
    if (e.target.name === 'exp') {
      value = value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
      }
    }
    
    setCardData({ ...cardData, [e.target.name]: value });
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-background-dark text-slate-100 font-display">
      <main className="flex-1 flex items-center justify-center p-6 py-20">
        <div className="w-full max-w-5xl grid md:grid-cols-2 gap-0 bg-slate-900 border border-slate-700/50 rounded-[2rem] shadow-2xl relative overflow-hidden">
          
          {/* Success Overlay */}
          {paymentStatus === 'success' && (
            <div className="absolute inset-0 z-50 bg-slate-900/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-500">
              <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mb-8 border border-emerald-500/50">
                <span className="material-symbols-outlined text-emerald-400 text-5xl">check_circle</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-widest">Payment<br/>Successful!</h2>
              <p className="text-slate-400 font-medium text-lg max-w-md mx-auto mb-10">
                Thank you, <span className="text-white">{cardData.name}</span>. Your high-resolution premium artwork <span className="text-white italic">"{artwork.title}"</span> is downloading securely to your device.
              </p>
              <button 
                onClick={() => navigate('/gallery')}
                className="px-10 py-5 bg-white text-slate-900 font-black tracking-widest uppercase rounded-xl hover:bg-emerald-500 hover:text-white transition-all shadow-xl shadow-emerald-500/20"
              >
                Return to Gallery
              </button>
            </div>
          )}

          {/* Left Side: Order Summary */}
          <div className="flex flex-col p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-slate-700/50 bg-slate-900/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 uppercase tracking-widest">Order Summary</h2>
            
            <div className="relative rounded-2xl overflow-hidden mb-8 border border-white/10 group aspect-[4/5] shadow-2xl">
              <img src={artwork.image} alt={artwork.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex rounded-full bg-primary/20 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-primary backdrop-blur-md border border-primary/20">
                    Premium License
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white">{artwork.title}</h3>
                <p className="text-sm text-slate-400 mt-1">{artwork.medium}</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8 flex-1">
              <div className="flex justify-between text-slate-400 pb-4 border-b border-slate-800">
                <span className="text-sm font-bold uppercase tracking-widest">Subtotal</span>
                <span className="font-medium">${artwork.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-400 pb-4 border-b border-slate-800">
                <span className="text-sm font-bold uppercase tracking-widest">Taxes</span>
                <span className="font-medium">$0.00</span>
              </div>
              <div className="flex justify-between text-white font-black text-3xl pt-2">
                <span>Total</span>
                <span className="text-primary">${artwork.price.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Right Side: Payment Form */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-widest">Payment Details</h2>
              <div className="flex gap-2 text-slate-500">
                <span className="material-symbols-outlined">credit_card</span>
                <span className="material-symbols-outlined">lock</span>
              </div>
            </div>

            <form onSubmit={handlePayment} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 ml-1">Cardholder Name</label>
                <input required name="name" value={cardData.name} onChange={handleInputChange} className="w-full bg-slate-800/50 border border-slate-700 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary h-14 px-5 text-slate-100 placeholder:text-slate-500 outline-none transition-all focus:bg-slate-800/80" placeholder="John Doe" type="text" />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 ml-1">Card Number</label>
                <div className="relative">
                  <input required name="number" value={cardData.number} onChange={handleInputChange} className="w-full bg-slate-800/50 border border-slate-700 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary h-14 pl-12 pr-5 text-slate-100 placeholder:text-slate-500 outline-none transition-all focus:bg-slate-800/80 font-mono" placeholder="0000 0000 0000 0000" type="text" maxLength="19" />
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">credit_card</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 ml-1">Expiry Date</label>
                  <input required name="exp" value={cardData.exp} onChange={handleInputChange} className="w-full bg-slate-800/50 border border-slate-700 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary h-14 px-5 text-slate-100 placeholder:text-slate-500 outline-none transition-all focus:bg-slate-800/80 font-mono" placeholder="MM/YY" type="text" maxLength="5" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 ml-1">CVC / CVV</label>
                  <input required name="cvc" value={cardData.cvc} onChange={handleInputChange} className="w-full bg-slate-800/50 border border-slate-700 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary h-14 px-5 text-slate-100 placeholder:text-slate-500 outline-none transition-all focus:bg-slate-800/80 font-mono" placeholder="123" type="password" maxLength="4" />
                </div>
              </div>
              
              <div className="pt-4">
                <button 
                  disabled={paymentStatus === 'processing'} 
                  className="w-full bg-primary hover:bg-white text-slate-900 font-black py-5 rounded-xl text-sm uppercase tracking-[0.2em] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-wait active:scale-[0.98]" 
                  type="submit"
                >
                  {paymentStatus === 'processing' ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-xl">autorenew</span>
                      Processing Payment...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-xl">lock</span>
                      Pay ${artwork.price.toFixed(2)}
                    </>
                  )}
                </button>
              </div>
              
              <p className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-6 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                100% Secure Encrypted Payment via Mock Stripe
              </p>
            </form>
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default Checkout;
