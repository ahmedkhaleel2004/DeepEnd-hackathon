import { db } from "@/lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ConversationItem from "./conversation-item";

interface ConversationsListProps {
  userId: string;
  loggedIn: boolean;
}

interface Conversation {
  id: string;
  name: string;
  timeUpdated: Date;
}

const ConversationsList = ({ userId, loggedIn }: ConversationsListProps) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (loggedIn && userId) {
      const fetchConversations = async () => {
        const conversationRef = doc(db, "conversations", userId);

        const unsubscribe = onSnapshot(conversationRef, (docSnapshot) => {
          if (docSnapshot.exists()) {
            const general = docSnapshot.data()?.general ?? {};
            const conversationData: Conversation[] = Object.entries(
              general,
            ).map(([id, value]) => ({
              id,
              name: (value as Conversation).name,
              timeUpdated: new Date((value as Conversation).timeUpdated),
            }));

            conversationData.sort(
              (a, b) => b.timeUpdated.getTime() - a.timeUpdated.getTime(),
            );

            setConversations(conversationData);
          } else {
            console.log("No such document!");
          }
        });

        return () => unsubscribe();
      };

      fetchConversations();
    }
  }, [loggedIn, userId]);

  return (
    <div>
      {conversations.map((conversation) => (
        <ConversationItem
          key={conversation.id}
          conversation={conversation}
          userId={userId}
        />
      ))}
    </div>
  );
};

export default ConversationsList;
