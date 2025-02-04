import React from 'react';
import { useTranslation } from 'react-i18next';

export default function EventCard({ event, ...rest }) {
  const { i18n } = useTranslation();
  const language = i18n.language;
  
  // If language is Chinese and a Chinese version is available, use it; otherwise use the English content.
  const content = (language === 'zh' && event.chinese) ? event.chinese : event.text;
  
  return (
    <div className="event-card" {...rest}>
      <h3 className="event-headline" dangerouslySetInnerHTML={{ __html: content.headline }} />
      <div className="event-text" dangerouslySetInnerHTML={{ __html: content.text }} />
    </div>
  );
} 