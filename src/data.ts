import { Book, Testimonial, JourneyStep } from './types';

export const BOOKS: Book[] = [
  {
    id: 'whispers-of-autumn',
    title: 'The Art of Being Alone',
    genre: 'Literary Non-Fiction / Solitude',
    tagline: 'Solitude is my home, loneliness was my cage.',
    description: 'A profound exploration of finding peace in quiet introspection, emotional self-reliance, and discovering strength in being alone.',
    longDescription: 'In a world that constantly demands our attention and connection, The Art of Being Alone is a luminous guide to reclaiming solitude as a sanctuary rather than a punishment. Through gentle prose and thoughtful reflections, this work examines how quiet moments cultivate deep self-awareness, emotional resilience, and authentic personal freedom. Written with Marylinda’s signature elegance, it invites readers to embrace stillness and rediscover the profound power within their own company.',
    coverImage: '/images/book-1.jpeg',
    publishYear: '2024',
    pages: 284,
    isbn: '978-1-58321-492-0',
    sampleExcerpt: 'Solitude is not the absence of society, but the presence of oneself. When we learn to sit quietly with our own thoughts, the noise of the world recedes and the true melody of the soul begins to play.',
    purchaseLinks: {
      amazon: 'https://amazon.com',
      barnesNoble: 'https://barnesandnoble.com',
      bookshop: 'https://bookshop.org',
      appleBooks: 'https://books.apple.com'
    }
  },
  {
    id: 'beyond-the-horizon',
    title: 'The Psychology of Money',
    genre: 'Financial Wisdom & Human Behavior',
    tagline: 'Timeless lessons on wealth, greed, and happiness.',
    description: 'Doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people.',
    longDescription: 'Amassing wealth requires discipline, patience, and an understanding of human psychology rather than cold mathematical formulas. In this transformative work, Marylinda explores the hidden drivers behind our financial decisions—how our upbringing, worldview, and personal values shape our relationship with prosperity. Through compelling narratives and timeless wisdom, readers discover how to navigate abundance, avoid destructive greed, and secure genuine peace of mind.',
    coverImage: '/images/book-2.jpeg',
    publishYear: '2023',
    pages: 310,
    isbn: '978-0-39452-108-4',
    sampleExcerpt: 'Doing well with money has a little to do with how smart you are and a lot to do with how you behave. Money is everywhere, it affects all of us, and it makes us all do strange things.',
    purchaseLinks: {
      amazon: 'https://amazon.com',
      barnesNoble: 'https://barnesandnoble.com',
      bookshop: 'https://bookshop.org',
      appleBooks: 'https://books.apple.com'
    }
  },
  {
    id: 'midnight-library-paris',
    title: 'The Diary of a CEO',
    genre: 'Business Leadership & Life Laws',
    tagline: 'The 33 laws of business & life.',
    description: 'A masterclass in modern leadership, resilience, and personal growth distilled from intimate conversations with the world’s most successful minds.',
    longDescription: 'What separates extraordinary leaders from the rest? Drawing upon years of rigorous inquiry and deep psychological insight, The Diary of a CEO unveils 33 universal laws governing high performance, emotional intelligence, career resilience, and personal fulfillment. Each chapter serves as a masterclass in overcoming self-doubt, mastering interpersonal dynamics, and building an enduring, meaningful legacy.',
    coverImage: '/images/book-3.jpeg',
    publishYear: '2022',
    pages: 360,
    isbn: '978-0-14312-785-3',
    sampleExcerpt: 'Success is not an accident of birth or circumstance; it is the daily accumulation of disciplined choices, relentless curiosity, and the courage to fail forward.',
    purchaseLinks: {
      amazon: 'https://amazon.com',
      barnesNoble: 'https://barnesandnoble.com',
      bookshop: 'https://bookshop.org',
      appleBooks: 'https://books.apple.com'
    }
  },
  {
    id: 'symphony-of-silence',
    title: 'The Art of Being Alone (Collector’s Ed.)',
    genre: 'Philosophy & Inner Peace',
    tagline: 'Loneliness Was My Cage, Solitude Is My Home.',
    description: 'An intimate companion piece exploring the transition from feeling isolated to finding profound freedom and artistic inspiration in solitude.',
    longDescription: 'In this special collector’s edition companion, Marylinda delves further into the meditative art of inner stillness. Examining the delicate boundary between loneliness and restorative solitude, this book provides practical reflections and poetic encouragement for anyone seeking peace in a clamorous world. It is a heartfelt tribute to the quiet moments that shape our deepest creative breakthroughs.',
    coverImage: '/images/book-4.jpeg',
    publishYear: '2021',
    pages: 290,
    isbn: '978-0-67973-522-1',
    sampleExcerpt: 'When you stop running from silence, you begin to hear the whispers of your true aspirations. The cage of loneliness opens the moment you realize you are your own best company.',
    purchaseLinks: {
      amazon: 'https://amazon.com',
      barnesNoble: 'https://barnesandnoble.com',
      bookshop: 'https://bookshop.org',
      appleBooks: 'https://books.apple.com'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Marylinda writes with a rare, poetic grace that touches the deepest chambers of the heart. The Art of Being Alone is an absolute masterpiece of emotional resonance.',
    author: 'Eleanor Vance',
    role: 'Senior Literary Critic',
    publication: 'The New York Literary Review',
    rating: 5
  },
  {
    id: '2',
    quote: 'Her insights feel like dear friends you have known for a lifetime. I could not put down The Psychology of Money until the very last page was turned.',
    author: 'Jonathan Hayes',
    role: 'Bestseller Book Club Founder',
    publication: 'Global Readers Guild',
    rating: 5
  },
  {
    id: '3',
    quote: 'An enchanting storyteller who reminds us of the wisdom hidden in everyday moments. Her prose is luminous, atmospheric, and profoundly comforting.',
    author: 'Clara Sterling',
    role: 'Author & Reviewer',
    publication: 'Contemporary Fiction Monthly',
    rating: 5
  },
  {
    id: '4',
    quote: 'The Diary of a CEO captured my imagination and leadership perspective in a way few books ever do. Marylinda weaves wisdom and clarity into an unforgettable tapestry.',
    author: 'Marcus Aurelius Thorne',
    role: 'Editor-in-Chief',
    publication: 'Chronicle Book Reviews',
    rating: 5
  }
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    number: '01',
    title: 'Where Ideas Begin',
    description: 'Every novel starts in quiet observation—a weathered letter found in an antique shop, the scent of pine after a coastal rainstorm, or a passing glance at a stranger reading in a train station.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800'
  },
  {
    number: '02',
    title: 'Research & Immersion',
    description: 'Marylinda believes in deep authenticity. Before writing a single chapter, she spends months exploring historical archives, walking the cobblestone streets of her settings, and interviewing experts.',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800'
  },
  {
    number: '03',
    title: 'Character Crafting',
    description: 'Characters are living souls on the page. Marylinda listens to their voices, giving them complex flaws, soaring aspirations, and emotional depth that make them feel entirely real to readers.',
    image: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&q=80&w=800'
  },
  {
    number: '04',
    title: 'The Written Word',
    description: 'Crafted in a sunlit study surrounded by towering bookshelves and steaming cups of Earl Grey tea, each manuscript is polished through countless drafts until every sentence sings.',
    image: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?auto=format&fit=crop&q=80&w=800'
  }
];
