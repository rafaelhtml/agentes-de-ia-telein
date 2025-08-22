import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface VSLPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
}

const VSLPlayer: React.FC<VSLPlayerProps> = ({ src, poster, className = "", style }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showFakeProgress, setShowFakeProgress] = useState(true);
  const [fakeProgress, setFakeProgress] = useState(15); // Simula que já passou 15% do vídeo
  const [viewerCount] = useState(() => Math.floor(Math.random() * 26) + 35); // Random entre 35-60
  const [realProgress, setRealProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Simula o progresso fake quando a página carrega
  useEffect(() => {
    if (showFakeProgress) {
      const interval = setInterval(() => {
        setFakeProgress(prev => {
          if (prev >= 25) { // Para em 25% para criar urgência
            return 25;
          }
          return prev + 0.1;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [showFakeProgress]);

  // Força autoplay silencioso no carregamento para "pré-exibir" o vídeo
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.defaultMuted = true;
    v.muted = true;
    v.playsInline = true;
    if (showFakeProgress) {
      const tryPlay = () => {
        const p = v.play();
        if (p && typeof p.then === 'function') {
          p.catch(() => {/* ignore autoplay block */});
        }
      };
      // Em alguns navegadores, play só funciona após metadata
      if (v.readyState >= 2) {
        tryPlay();
      } else {
        const onCanPlay = () => {
          tryPlay();
          v.removeEventListener('canplay', onCanPlay);
        };
        v.addEventListener('canplay', onCanPlay);
      }
    }
  }, [showFakeProgress]);
  // Atualiza o progresso real do vídeo
  const handlePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (!isPlaying) {
      // Primeira vez que clica play - inicia o vídeo real
      setShowFakeProgress(false);
      try {
        // Garantir gesto do usuário: pausar qualquer autoplay, preparar áudio
        video.pause();
        video.currentTime = 0; // Começa do início
        // Remover atributos que podem manter o mudo em alguns navegadores (iOS/Safari)
        video.defaultMuted = false;
        video.muted = false;
        video.removeAttribute('muted');
        video.removeAttribute('defaultMuted');
        video.volume = 1;
        video.playsInline = true;
        setIsMuted(false);
        // Play com gesto deve liberar o áudio
        const p = video.play();
        if (p && typeof p.then === 'function') {
          await p;
        }
        // Edge case: se ainda estiver mudo, faz um toggle rápido
        if (video.muted || video.volume === 0) {
          video.pause();
          video.muted = false;
          video.volume = 1;
          await video.play();
        }
        setIsPlaying(true);
      } catch (e) {
        setIsPlaying(!video.paused);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const currentProgress = showFakeProgress ? fakeProgress : realProgress;

  return (
    <div className={`relative bg-black rounded-xl overflow-hidden ${className}`} style={style}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={poster}
        muted={isMuted}
        preload="auto"
        autoPlay
        playsInline
        loop
        onLoadedMetadata={() => {
          const v = videoRef.current;
          if (v) {
            setDuration(v.duration);
          }
        }}
      >
        <source src={src} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>

      {/* Overlay de controles customizados */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent">
        {/* Botão de play central */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              onClick={handlePlay}
              size="lg"
              className="bg-telein-orange hover:bg-telein-orange/90 text-white rounded-full w-16 h-16 p-0 shadow-lg"
            >
              <Play className="w-8 h-8 ml-1" />
            </Button>
          </div>
        )}

        {/* Controles na parte inferior */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex items-center gap-3">
            {/* Play/Pause */}
            <Button
              onClick={handlePlay}
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/20 p-2"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>

            {/* Barra de progresso */}
            <div className="flex-1 mx-2">
              <div className="bg-white/30 h-1 rounded-full">
                <div 
                  className="bg-telein-orange h-full rounded-full transition-all duration-300"
                  style={{ width: `${currentProgress}%` }}
                />
              </div>
            </div>

            {/* Volume */}
            <Button
              onClick={toggleMute}
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/20 p-2"
              aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>

            {/* Tempo */}
            <div className="text-white text-xs font-medium min-w-[60px]">
              {showFakeProgress
                ? `${formatTime((fakeProgress / 100) * 180)} / 3:00`
                : `${formatTime(currentTime)} / ${formatTime(duration || 180)}`}
            </div>
          </div>
        </div>

        {/* Indicador "AO VIVO" fake */}
        {showFakeProgress && (
          <div className="absolute top-4 left-4">
            <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              AO VIVO
            </div>
          </div>
        )}

        {/* Contador de visualizações fake */}
        {showFakeProgress && (
          <div className="absolute top-4 right-4">
            <div className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
              👁️ {viewerCount} assistindo
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VSLPlayer;