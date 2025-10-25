import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Minimize2, Maximize2 } from 'lucide-react';
import { Card } from './card';
import { Button } from './button';
import { Slider } from './slider';

interface Track {
  id: number;
  title: string;
  artist: string;
  cover: string;
  src: string;
  duration: number;
}

interface MusicPlayerProps {
  tracks: Track[];
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ tracks }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => {
      nextTrack();
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    setError(null);
    
    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        setIsLoading(true);
        // Força o carregamento do áudio
        await audio.load();
        await audio.play();
        setIsPlaying(true);
        setIsLoading(false);
      }
    } catch (error: any) {
      console.error('Erro ao reproduzir áudio:', error);
      setError(`Erro: ${error.message}`);
      setIsPlaying(false);
      setIsLoading(false);
    }
  };

  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIndex);
    setCurrentTime(0);
    if (isPlaying) {
      setTimeout(() => audioRef.current?.play(), 100);
    }
  };

  const prevTrack = () => {
    const prevIndex = currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1;
    setCurrentTrackIndex(prevIndex);
    setCurrentTime(0);
    if (isPlaying) {
      setTimeout(() => audioRef.current?.play(), 100);
    }
  };

  const handleTimeChange = (newTime: number[]) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = newTime[0];
      setCurrentTime(newTime[0]);
    }
  };

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume[0]);
    setIsMuted(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className={`${isMinimized ? 'w-64' : 'w-80'} p-4 bg-background/95 backdrop-blur-sm border-primary/30 shadow-2xl transition-all duration-300`}>
        <audio
          ref={audioRef}
          src={currentTrack.src}
          preload="metadata"
          onLoadedMetadata={() => {
            if (audioRef.current) {
              setDuration(audioRef.current.duration || currentTrack.duration);
              setCurrentTime(0);
              setError(null);
            }
          }}
          onError={(e) => {
            console.error('Erro ao carregar áudio:', currentTrack.title);
            setError(`Não foi possível carregar: ${currentTrack.title}`);
            setIsPlaying(false);
            setIsLoading(false);
          }}
          onCanPlay={() => {
            console.log('✅ Áudio carregado:', currentTrack.title);
            setIsLoading(false);
          }}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        
        {/* Header com botão minimizar */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="relative">
              <img
                src={currentTrack.cover}
                alt={currentTrack.title}
                className="w-12 h-12 rounded-lg object-cover shadow-lg"
              />
              {isPlaying && (
                <div className="absolute inset-0 bg-primary/20 rounded-lg animate-pulse" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-primary truncate">
                {currentTrack.title}
              </h4>
              <p className="text-xs text-muted-foreground truncate">
                {currentTrack.artist}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(!isMinimized)}
            className="h-6 w-6 p-0 ml-2 hover:bg-primary/10"
          >
            {isMinimized ? (
              <Maximize2 className="h-3 w-3" />
            ) : (
              <Minimize2 className="h-3 w-3" />
            )}
          </Button>
        </div>

        {/* Mensagem de Erro */}
        {error && (
          <div className="mb-2 p-2 bg-red-500/10 border border-red-500/20 rounded text-xs text-red-400">
            {error}
          </div>
        )}

        {/* Controles de Reprodução */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevTrack}
            className="h-8 w-8 p-0 hover:bg-primary/10"
          >
            <SkipBack className="h-4 w-4" />
          </Button>
          
          <Button
            onClick={togglePlay}
            disabled={isLoading}
            className="h-10 w-10 p-0 rounded-full bg-primary hover:bg-primary/90 disabled:opacity-50"
          >
            {isLoading ? (
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5 ml-0.5" />
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={nextTrack}
            className="h-8 w-8 p-0 hover:bg-primary/10"
          >
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>

        {/* Conteúdo Expandido */}
        {!isMinimized && (
          <>
            {/* Barra de Progresso */}
            <div className="space-y-2">
              <Slider
                value={[currentTime]}
                max={duration || currentTrack.duration}
                step={1}
                onValueChange={handleTimeChange}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration || currentTrack.duration)}</span>
              </div>
            </div>

            {/* Controle de Volume */}
            <div className="flex items-center gap-2 mt-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMute}
                className="h-6 w-6 p-0"
              >
                {isMuted ? (
                  <VolumeX className="h-3 w-3" />
                ) : (
                  <Volume2 className="h-3 w-3" />
                )}
              </Button>
              <Slider
                value={[isMuted ? 0 : volume]}
                max={1}
                step={0.1}
                onValueChange={handleVolumeChange}
                className="flex-1"
              />
            </div>

            {/* Lista de Faixas (Mini) */}
            <div className="mt-4 max-h-32 overflow-y-auto">
              <div className="space-y-1">
                {tracks.map((track, index) => (
                  <div
                    key={track.id}
                    onClick={() => {
                      setCurrentTrackIndex(index);
                      setCurrentTime(0);
                      if (isPlaying) {
                        setTimeout(() => audioRef.current?.play(), 100);
                      }
                    }}
                    className={`flex items-center gap-2 p-2 rounded cursor-pointer transition-colors ${
                      index === currentTrackIndex
                        ? 'bg-primary/10 text-primary'
                        : 'hover:bg-muted/50'
                    }`}
                  >
                    <img
                      src={track.cover}
                      alt={track.title}
                      className="w-6 h-6 rounded object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate">{track.title}</p>
                      <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};