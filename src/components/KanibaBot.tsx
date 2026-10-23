import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Bot
} from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';
import { ChatMessage, Language } from '../types';
import { generateWhatsAppLink } from '../utils/formatters';
import { TRANSLATIONS } from '../i18n/translations';

interface KanibaBotProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  language: Language;
}

export const KanibaBot: React.FC<KanibaBotProps> = ({
  isOpen,
  onClose,
  onOpen,
  language,
}) => {
  const t = TRANSLATIONS[language];

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize or reset bot greeting when language changes
  useEffect(() => {
    setMessages([
      {
        id: `msg-welcome-${language}`,
        sender: 'bot',
        text: t.bot.greeting,
        time: new Date().toLocaleTimeString(language === 'es' ? 'es-ES' : language === 'en' ? 'en-US' : 'fr-FR', {
          hour: '2-digit',
          minute: '2-digit',
        }),
        suggestedActions: [
          { label: t.bot.chipSirakoro, action: t.bot.querySirakoro },
          { label: t.bot.chipTf, action: t.bot.queryTf },
          { label: t.bot.chipDiaspora, action: t.bot.queryDiaspora },
          { label: t.bot.chipVisit, action: t.bot.queryVisit },
        ],
      },
    ]);
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const timeStr = new Date().toLocaleTimeString(language === 'es' ? 'es-ES' : language === 'en' ? 'en-US' : 'fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: query,
      time: timeStr,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = query.toLowerCase();
      let matchedAnswer: string | null = null;

      if (lower.includes('sirakoro') || lower.includes('prix') || lower.includes('precio') || lower.includes('price') || lower.includes('cost')) {
        matchedAnswer = t.bot.answerSirakoro;
      } else if (lower.includes('titre') || lower.includes('foncier') || lower.includes('título') || lower.includes('title') || lower.includes('legal') || lower.includes('notaire') || lower.includes('notario')) {
        matchedAnswer = t.bot.answerTf;
      } else if (lower.includes('diaspora') || lower.includes('france') || lower.includes('francia') || lower.includes('espagne') || lower.includes('españa') || lower.includes('spain') || lower.includes('usa') || lower.includes('distance') || lower.includes('abroad')) {
        matchedAnswer = t.bot.answerDiaspora;
      } else if (lower.includes('construction') || lower.includes('construccion') || lower.includes('villa') || lower.includes('chalet') || lower.includes('batir') || lower.includes('build')) {
        matchedAnswer = t.bot.answerConstruction;
      } else if (lower.includes('visite') || lower.includes('visita') || lower.includes('visit') || lower.includes('rdv') || lower.includes('rendez-vous') || lower.includes('cita') || lower.includes('tour')) {
        matchedAnswer = t.bot.answerVisit;
      } else {
        matchedAnswer = t.bot.answerFallback;
      }

      const botResponse: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'bot',
        text: matchedAnswer,
        time: new Date().toLocaleTimeString(language === 'es' ? 'es-ES' : language === 'en' ? 'en-US' : 'fr-FR', {
          hour: '2-digit',
          minute: '2-digit',
        }),
        suggestedActions: [
          { label: t.bot.btnWhatsAppHandoff, action: 'whatsapp_handoff' },
          { label: t.bot.btnCatalog, action: 'catalogo' },
        ],
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 650);
  };

  const handleActionClick = (action: string) => {
    if (action === 'whatsapp_handoff') {
      window.open(
        generateWhatsAppLink(
          CONTACT_INFO.whatsappPrimary,
          language === 'es'
            ? 'Hola, estuve chateando con KanibaBot y deseo atención personalizada para una propiedad en Malí 🇲🇱.'
            : language === 'en'
            ? 'Hello, I chatted with KanibaBot and would like personalized assistance for a property in Mali 🇲🇱.'
            : 'Bonjour, j’ai échangé avec KanibaBot et je souhaite une assistance personnalisée pour un projet au Mali 🇲🇱.'
        ),
        '_blank'
      );
    } else if (action === 'catalogo') {
      const el = document.getElementById('catalogo');
      el?.scrollIntoView({ behavior: 'smooth' });
      onClose();
    } else {
      handleSendMessage(action);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={onOpen}
        aria-label={t.bot.title}
        className="fixed bottom-6 right-20 sm:right-24 z-40 p-3 sm:p-3.5 bg-emerald-900 hover:bg-emerald-800 text-amber-300 rounded-full shadow-2xl border border-amber-400/40 transition-transform hover:scale-105 flex items-center gap-2"
      >
        <span className="text-sm">🇲🇱</span>
        <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
        <span className="hidden md:inline text-xs font-bold text-white pr-1">KanibaBot</span>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 left-4 sm:left-auto z-50 w-[calc(100%-2rem)] sm:w-96 max-w-sm h-[500px] max-h-[82vh] bg-white dark:bg-stone-900 rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-800 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5">
      
      {/* Bot Header with Mali Flag */}
      <div className="p-3.5 sm:p-4 bg-emerald-950 text-white flex items-center justify-between border-b border-emerald-900">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-emerald-800 flex items-center justify-center text-amber-400 border border-amber-400/30 shrink-0">
            <Bot className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-bold flex items-center gap-1.5 truncate">
              <span>{t.bot.title}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            </h4>
            <p className="text-[10px] sm:text-[11px] text-stone-300 truncate">{t.bot.role}</p>
          </div>
        </div>

        <button
          onClick={onClose}
          aria-label="Fermer"
          className="text-stone-300 hover:text-white p-1 rounded-lg shrink-0 ml-2"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Scroll View */}
      <div className="flex-1 p-3 sm:p-3.5 overflow-y-auto space-y-3 bg-stone-50 dark:bg-stone-950 text-xs">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[85%] p-3 rounded-2xl ${
                msg.sender === 'user'
                  ? 'bg-emerald-800 text-white rounded-br-none'
                  : 'bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-800 rounded-bl-none shadow-xs'
              }`}
            >
              <p className="leading-relaxed whitespace-pre-line text-xs">{msg.text}</p>
              <span className="text-[10px] opacity-70 block text-right mt-1 font-mono">
                {msg.time}
              </span>
            </div>

            {/* Suggested Quick Actions */}
            {msg.suggestedActions && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {msg.suggestedActions.map((act, i) => (
                  <button
                    key={i}
                    onClick={() => handleActionClick(act.action)}
                    className="py-1 px-2.5 rounded-lg bg-stone-200/80 dark:bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-stone-700 dark:text-stone-300 font-medium text-[11px] transition-colors border border-stone-300 dark:border-stone-700"
                  >
                    {act.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 p-2 bg-white dark:bg-stone-900 rounded-xl w-24 text-stone-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-bounce" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.2s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.4s]" />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <div className="p-2.5 sm:p-3 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={t.bot.inputPlaceholder}
            className="flex-1 py-2 px-3 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
          />
          <button
            type="submit"
            aria-label="Envoyer"
            className="p-2 bg-emerald-800 hover:bg-emerald-700 text-white rounded-xl transition-colors shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

        <div className="flex items-center justify-between text-[10px] text-stone-400 mt-1.5 px-1">
          <span className="flex items-center gap-1">
            <span>🇲🇱</span>
            <span>Groupe Kaniba AI</span>
          </span>
          <a
            href={generateWhatsAppLink(CONTACT_INFO.whatsappPrimary, 'Bonjour, je souhaite un échange personnalisé.')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 dark:text-amber-400 font-semibold hover:underline"
          >
            {t.bot.liveHandoffLink}
          </a>
        </div>
      </div>

    </div>
  );
};
