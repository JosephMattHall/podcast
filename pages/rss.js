import React, { useEffect, useState } from 'react';
import { db } from '@/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useTheme } from "@mui/material/styles";
import { Feed } from "feed";

function RSSFeed() {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [rssFeed, setRssFeed] = useState('');
  const site_url = "https://www.yoursite.com"

  useEffect(() => {
     const fetchEpisodes = async () => {
      setLoading(true);
      const episodesRef = collection(db, 'episodes');
      const episodesSnapshot = await getDocs(episodesRef);
      const episodes = episodesSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }));

      const feed = new Feed({
        title: 'Your Podcast RSS feed',
        description: 'Welcome to this blog podcast!',
        site_url: site_url,
        feed_url: `${site_url}/rss`,
        image_url: `${site_url}/logo.png`,
        pubDate: new Date(),
        copyright: `All rights reserved ${new Date().getFullYear()}, Podcast`,
       });
      

      

      episodes.forEach((episode) => {
        feed.addItem({
          title: episode.title,
          description: episode.title, // You can use a different field here for the episode description
          url: episode.audio, // Assuming the audio URL is stored in the "audio" field
          date: new Date(), // Use the current date or the episode's publish date
        });
      });

      // Generate the RSS feed XML
      const rssFeedXML = feed.rss2();

      // Set the RSS feed XML in the state
      setRssFeed(rssFeedXML);
    };
    fetchEpisodes();
    setLoading(false);
  }, []);


  return (
    <div>
      { loading && 
          <p>loading...</p>
        }
        {rssFeed.length > 0 &&
          <pre>{rssFeed}</pre>
        } 
    </div>
  );
}

export default RSSFeed;
