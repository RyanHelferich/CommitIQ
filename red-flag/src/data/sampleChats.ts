export type SampleChat = {
  id: string;
  title: string;
  subtitle: string;
  expectedLevel: "excellent" | "strong" | "promising" | "challenging";
  levelHint: string;
  goalSuggestion: string;
  transcript: string;
};

export const SAMPLE_CHATS: SampleChat[] = [
  {
    id: "three-month-checkin",
    title: "The 3-Month Check-In",
    subtitle: "After 3 months — are you aligned on the big things?",
    expectedLevel: "strong",
    levelHint: "Strong Connection — clear alignment with open discussion areas",
    goalSuggestion: "Long-term relationship · Marriage-minded",
    transcript: `Jordan: So it's been three months. I feel like I know you really well now, but I also want to make sure we're on the same page about where this is going.
Alex: I was thinking the same thing honestly. What's on your mind?
Jordan: I guess just — where do you see this going? I really like what we have and I want to be intentional about it.
Alex: I think about that too. I'm not looking for something casual. I genuinely want something that could be long-term.
Jordan: That's what I want too. And I feel like we communicate really well, even when things are hard.
Alex: Agreed. That conversation last week about your work stress — I felt like we actually talked through it instead of around it.
Jordan: Okay, something I want to put on the table — we haven't really talked about finances. Like where we each are with that.
Alex: That's a fair one to bring up. I'm not in a great place with savings right now — student loans are still a thing. But I'm working toward it.
Jordan: I appreciate you being honest about that. I've got some saved up but I'm not expecting us to be in the same place. I just think transparency matters a lot to me.
Alex: Completely. I don't want money to be something we avoid. What about family — do you see yourself wanting kids at some point?
Jordan: Yes. Not immediately, but yes. That's a big one for me.
Alex: Same. I always assumed I'd have a family. Two or three kids if that happens.
Jordan: Okay, good to know. My family is also very important to me — they'll be in our life a lot. That's just how I'm wired.
Alex: I love that about you. I want that too. My family is smaller but we're very close.
Jordan: This is one of those conversations I feel better for having. Like I feel more certain.
Alex: Me too. I feel like we're genuinely building something here.`,
  },
  {
    id: "aligned-on-big-things",
    title: "Aligned on the Big Things",
    subtitle: "Shared values, complementary communication styles",
    expectedLevel: "excellent",
    levelHint: "Excellent Match — strong value alignment across every area",
    goalSuggestion: "Long-term relationship · Marriage-minded · Exploring",
    transcript: `Morgan: Can I ask you something kind of serious? I want to know what commitment actually means to you.
Riley: Yes, absolutely. For me it means building a life with someone intentionally. Not just being together, but growing in the same direction.
Morgan: That's really how I feel too. I wasn't sure how to bring it up but I'm glad I did.
Riley: I feel like we're good at having these conversations. That matters to me more than I expected.
Morgan: Same. I've been in relationships where we avoided the real stuff until it blew up. I don't want that.
Riley: What are your non-negotiables? Like things that have to be true for you in a relationship.
Morgan: Honesty — genuine honesty, even when it's uncomfortable. And someone who wants to grow: personally, professionally, emotionally.
Riley: Both of those are mine too. I'd add — shared values around how we treat people. Family, friends, strangers.
Morgan: You know what I noticed about you early on? You're consistent. You show up the same way every time. That's rare.
Riley: That's really important to me. I don't want to be someone who's only their best self when things are easy.
Morgan: I feel very aligned with you on the big stuff. I'm aware we probably have differences too — I want to understand those.
Riley: I think we handle money differently. I'm more of a saver. You seem more comfortable spending.
Morgan: That's true. I'd want to talk about that more — not as a problem, just how we'd navigate it together.
Riley: That's exactly the right way to think about it.
Morgan: Are you open to talking about living arrangements at some point? Like where we'd eventually land on that.
Riley: Yes. I think about it. I have roots here but I'm not closed to things changing if we were building something real.
Morgan: Good. I feel good about this conversation. I feel good about us.
Riley: Is that okay with you — the pace we're moving at? I want to make sure you're comfortable.
Morgan: Completely. How do you feel about it?
Riley: I feel like we're moving at exactly the right speed.`,
  },
  {
    id: "growing-through-differences",
    title: "Growing Through Differences",
    subtitle: "Different lifestyles, but navigating with maturity",
    expectedLevel: "promising",
    levelHint: "Promising Start — real differences worth discussing openly",
    goalSuggestion: "Exploring compatibility · Long-term relationship",
    transcript: `Casey: I want to talk about something that's been on my mind. Our social lives are pretty different and I want to make sure that works for both of us.
Drew: Yeah I've thought about that too. I know I'm more of a homebody than you are.
Casey: It's not a problem — I just want us to understand each other. I really need social time with my friends. It recharges me.
Drew: And I completely support that. I'd never want you to give that up. I just won't always be up for going.
Casey: That feels totally fair as long as we don't end up in a situation where I feel like I have to choose between you and my social life.
Drew: That's not something I'd ever want. Your friendships are important and so is your happiness.
Casey: Thank you. Okay, bigger stuff — I think we've danced around where we each want to live long-term.
Drew: I want to stay close to my family. That's a real anchor for me. My mom's health has been unpredictable and I want to be able to be there.
Casey: I really respect that. My job is the main variable for me. I might have opportunities in other cities at some point.
Drew: I'd want to figure that out together if it came up. I don't think there's only one answer, but I want to be part of that conversation.
Casey: That's all I'd need. That we're a team in how we make those decisions.
Drew: What about how we handle conflict? I think we do okay but I want to make sure you feel heard when we disagree.
Casey: Honestly I feel like you try. I'd love it if you didn't go quiet when you're upset — it's hard to read.
Drew: That's fair. I know I do that. I grew up in a house where conflict got loud so I learned to shut down instead.
Casey: I really appreciate you telling me that. That gives me so much more context.
Drew: I want to get better at it. And I want you to tell me when I'm doing it.
Casey: Deal. I feel like this conversation is exactly what I was hoping for.
Drew: Me too. I think we're figuring it out.`,
  },
];

export function getSampleById(id: string): SampleChat | undefined {
  return SAMPLE_CHATS.find((s) => s.id === id);
}
