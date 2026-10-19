import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  ExternalLink, 
  Phone, 
  HelpCircle,
  Minimize2,
  Maximize2
} from 'lucide-react';
import { FAQ_KNOWLEDGE_BASE, CONTACT_INFO } from '../data/mockData';
import { ChatMessage } from '../types';
import { generateWhatsAppLink } from '../utils/formatters';

interface KanibaBotProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const KanibaBot: React.FC<KanibaBotProps> = ({
  isOpen,
  onClose,
  onOpen,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'bot',
      text: 'Bonjour ! Je suis l’assistant virtuel du Groupe Kaniba. Comment puis-je vous aider aujourd’hui pour votre recherche de terrain ou villa à Bamako et Sirakoro ?',
      time: 'Maintenant',
      suggestedActions: [
        { label: '📍 Prix à Sirakoro', action: 'Prix des parcelles à Sirakoro' },
        { label: '📜 Qu’est-ce qu’un Titre Foncier ?', action: 'Explication Titre Foncier Mali' },
        { label: '🌍 Guide Diáspora', action: 'Comment acheter depuis la diaspora ?' },
        { label: '🔑 Visite sur terrain', action: 'Prendre rendez-vous pour visiter' },
      ],
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Intelligent responder matching keywords from the local real estate engine
  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = query.toLowerCase();
      let matchedAnswer: string | null = null;

      for (const item of FAQ_KNOWLEDGE_BASE) {
        if (item.keywords.some((kw) => lower.includes(kw))) {
          matchedAnswer = item.answer;
          break;
        }
      }

      if (!matchedAnswer) {
        if (lower.includes('bonjour') || lower.includes('salut') || lower.includes('hola')) {
          matchedAnswer = 'Bonjour et bienvenue chez le Groupe Kaniba ! Nous commercialisons des parcelles avec Titre Foncier (TF) à Sirakoro, Dialakorobougou, et des villas clés en main à La Cité Kaniba. Que souhaitez-vous savoir en priorité ?';
        } else if (lower.includes('contact') || lower.includes('numero') || lower.includes('telephone') || lower.includes('bureau')) {
          matchedAnswer = `Vous pouvez joindre directement nos conseillers commerciaux au ${CONTACT_INFO.phones[0]} ou ${CONTACT_INFO.phones[1]}. Nos bureaux sont situés à l’ACI 2000 et à l’entrée de la Cité Kaniba à Sirakoro.`;
        } else {
          matchedAnswer = `Merci pour votre question concernant "${query}". Pour vous fournir les plans cadastraux exacts et les disponibilités en temps réel, je peux vous mettre en relation directe avec notre conseiller sur WhatsApp au ${CONTACT_INFO.phones[0]}.`;
        }
      }

      const botResponse: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'bot',
        text: matchedAnswer,
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
        suggestedActions: [
          { label: '💬 Parler sur WhatsApp', action: 'whatsapp_handoff' },
          { label: '📐 Voir le catalogue', action: 'catalogo' },
        ],
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 700);
  };

  const handleActionClick = (action: string) => {
    if (action === 'whatsapp_handoff') {
      window.open(
        generateWhatsAppLink(
          CONTACT_INFO.whatsappPrimary,
          'Bonjour, je viens de discuter avec votre assistant virtuel sur le site et je souhaite des précisions.'
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
        aria-label="Ouvrir le chat d'assistance"
        className="fixed bottom-6 right-20 sm:right-24 z-40 p-3.5 bg-emerald-900 hover:bg-emerald-800 text-amber-300 rounded-full shadow-2xl border border-amber-400/40 transition-transform hover:scale-105 flex items-center gap-2"
      >
        <Bot className="w-6 h-6 text-amber-400" />
        <span className="hidden md:inline text-xs font-bold text-white pr-1">Conseiller Kaniba</span>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-96 max-w-sm h-[520px] max-h-[85vh] bg-white dark:bg-stone-900 rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-800 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5">
      
      {/* Bot Header */}
      <div className="p-4 bg-emerald-950 text-white flex items-center justify-between border-b border-emerald-900">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-800 flex items-center justify-center text-amber-400 border border-amber-400/30">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold flex items-center gap-1.5">
              <span>KanibaBot 24/7</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </h4>
            <p className="text-[11px] text-stone-300">Conseiller Immobilier & Titres Fonciers</p>
          </div>
        </div>

        <button
          onClick={onClose}
          aria-label="Fermer"
          className="text-stone-300 hover:text-white p-1 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Scroll View */}
      <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-stone-50 dark:bg-stone-950 text-xs">
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
              <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>
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
      <div className="p-3 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800">
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
            placeholder="Posez votre question (ex: prix Sirakoro)..."
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
          <span>Groupe Kaniba AI Advisor</span>
          <a
            href={generateWhatsAppLink(CONTACT_INFO.whatsappPrimary, 'Bonjour, je souhaite un échange personnalisé.')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 dark:text-amber-400 font-semibold hover:underline"
          >
            Passer sur WhatsApp →
          </a>
        </div>
      </div>

    </div>
  );
};
