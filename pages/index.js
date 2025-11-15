/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
  Hammer,
  Sparkles,
  Coffee,
  Code2,
  Palette,
  Lightbulb,
} from "lucide-react";

export default function Home() {
  const [activeIcon, setActiveIcon] = useState(0);
  const icons = [Hammer, Code2, Coffee, Palette, Lightbulb, Sparkles];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % icons.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const ActiveIconComponent = icons[activeIcon];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* Formas decorativas animadas com cores neon */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500 rounded-full opacity-20 blur-xl animate-bounce"></div>
      <div
        className="absolute top-40 right-20 w-24 h-24 bg-purple-500 rounded-lg opacity-20 blur-xl animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-500 opacity-20 blur-xl animate-spin"
        style={{ animationDuration: "10s" }}
      ></div>
      <div
        className="absolute bottom-40 right-1/3 w-20 h-20 bg-yellow-500 rounded-full opacity-20 blur-xl animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Grid pattern no fundo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-4xl w-full">
          {/* Ícone principal animado */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-40 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-cyan-500/30 transform hover:scale-110 transition-transform duration-300">
                <ActiveIconComponent
                  className="w-20 h-20 text-cyan-400"
                  strokeWidth={2}
                />
              </div>
            </div>
          </div>

          {/* Título com efeito neon */}
          <h1 className="text-5xl md:text-7xl font-black text-center mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            Ops! Estamos Construindo!
          </h1>

          <p className="text-xl md:text-2xl text-center text-gray-300 font-bold mb-12 drop-shadow-lg">
            Nossa equipe está trabalhando para criar algo ÉPICO!
          </p>

          {/* Cards coloridos estilo dark */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/30 rounded-2xl p-6 shadow-xl transform hover:rotate-3 hover:border-purple-500/60 transition-all hover:shadow-purple-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-purple-500/50">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-100 mb-2">
                Codando Muito
              </h3>
              <p className="text-gray-400">
                Linha por linha, fazendo mágica acontecer! 💻
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-yellow-500/30 rounded-2xl p-6 shadow-xl transform hover:rotate-3 hover:border-yellow-500/60 transition-all hover:shadow-yellow-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-yellow-500/50">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-100 mb-2">
                Design Top
              </h3>
              <p className="text-gray-400">
                Cores neon e interface cinematográfica! 🎨
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/30 rounded-2xl p-6 shadow-xl transform hover:rotate-3 hover:border-cyan-500/60 transition-all hover:shadow-cyan-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/50">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-100 mb-2">
                Muito Café
              </h3>
              <p className="text-gray-400">
                Combustível essencial para o dia a dia! ☕
              </p>
            </div>
          </div>

          {/* Barra de progresso estilo dark neon */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/30 rounded-2xl p-8 shadow-xl mb-8 shadow-cyan-500/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Progresso
              </span>
              <span className="text-4xl">🚀</span>
            </div>

            <div className="relative w-full h-8 bg-gray-950 rounded-full overflow-hidden border border-gray-700">
              <div
                className="absolute h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-end pr-2 transition-all duration-1000 shadow-lg shadow-cyan-500/50"
                style={{ width: "75%" }}
              >
                <span className="text-white font-bold text-sm drop-shadow-lg">
                  75%
                </span>
              </div>
            </div>

            <div className="mt-4 flex justify-between text-sm text-gray-500">
              <span>🎯 Começou</span>
              <span className="font-bold text-cyan-400">✨ Quase lá!</span>
              <span>🎉 Lançamento</span>
            </div>
          </div>

          {/* CTA divertido dark */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/30 rounded-2xl p-8 shadow-xl text-center shadow-purple-500/10">
            <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Quer saber quando ficar pronto? 🎊
            </h2>
            <p className="text-gray-400 mb-6">
              A gente te avisa na hora! Promessa de dev. 🤙
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="seu.email@legal.com"
                className="flex-1 px-4 py-3 rounded-xl bg-gray-950 border-2 border-cyan-500/30 focus:border-cyan-500 focus:outline-none text-gray-200 font-medium placeholder-gray-600"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-purple-500 transform hover:scale-105 transition-all shadow-lg shadow-cyan-500/50">
                Me Avisa! 🔔
              </button>
            </div>
          </div>

          {/* Mensagem final */}
          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-cyan-400 drop-shadow-[0_0_20px_rgba(6,182,212,0.7)] animate-pulse">
              Até breve!
            </p>
          </div>
        </div>
      </div>

      {/* Confetes animados neon */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-4xl animate-bounce drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
          🎨
        </div>
        <div
          className="absolute top-20 right-20 text-4xl animate-bounce drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
          style={{ animationDelay: "0.5s" }}
        >
          💻
        </div>
        <div
          className="absolute bottom-20 left-20 text-4xl animate-bounce drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]"
          style={{ animationDelay: "1s" }}
        >
          🚀
        </div>
        <div
          className="absolute bottom-10 right-10 text-4xl animate-bounce drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]"
          style={{ animationDelay: "1.5s" }}
        >
          ⚡
        </div>
      </div>
    </div>
  );
}
